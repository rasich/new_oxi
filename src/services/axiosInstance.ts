import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	InternalAxiosRequestConfig,
} from 'axios'
import Cookies from 'js-cookie'

import { ApiRoutes } from '@/config/constants'
import { CookiesNamespace, LocalStorageNamespace, Routes } from '@/config/namespaces'
import type { Token } from '@/types/generated/apiGenerated'

import { DEFAULT_LOCALE, locales } from '@/locales/config'

interface CreateAxiosInstanceOptions {
	baseURL: string
}

const jsonHeaders = { 'Content-Type': 'application/json; charset=utf-8' }

let refreshPromise: Promise<boolean> | null = null

function isAuthRequestWithoutRetry(url: string | undefined): boolean {
	if (!url) return false
	return url.includes(ApiRoutes.auth.login) || url.includes(ApiRoutes.auth.refresh)
}

function redirectToLogin(): void {
	const seg = window.location.pathname.split('/').filter(Boolean)[0]
	const locale = locales.includes(seg as (typeof locales)[number]) ? seg : DEFAULT_LOCALE
	window.location.replace(`/${locale}${Routes.AUTH}`)
}

/** Сброс клиентской сессии (токены + флаг авторизации в cookie). */
export function clearAuthSession(): void {
	if (typeof window === 'undefined') return
	localStorage.removeItem(LocalStorageNamespace.ACCESS_TOKEN)
	localStorage.removeItem(LocalStorageNamespace.REFRESH_TOKEN)
	Cookies.remove(CookiesNamespace.IS_AUTH)
}

export function setAuthTokens(access: string, refresh: string): void {
	if (typeof window === 'undefined') return
	localStorage.setItem(LocalStorageNamespace.ACCESS_TOKEN, access)
	localStorage.setItem(LocalStorageNamespace.REFRESH_TOKEN, refresh)
}

function handleUnauthorized(): void {
	clearAuthSession()
	redirectToLogin()
}

function createAxiosInstance({ baseURL }: CreateAxiosInstanceOptions): AxiosInstance {
	const refreshClient = axios.create({
		baseURL,
		headers: jsonHeaders,
	})

	async function refreshTokens(): Promise<boolean> {
		const refreshToken = localStorage.getItem(LocalStorageNamespace.REFRESH_TOKEN)
		if (!refreshToken) return false

		try {
			const { data } = await refreshClient.post<Token>(ApiRoutes.auth.refresh, {
				refreshToken,
			})
			setAuthTokens(data.accessToken, data.refreshToken)
			return true
		} catch {
			return false
		}
	}

	const instance = axios.create({
		baseURL,
		headers: jsonHeaders,
		paramsSerializer: { indexes: null },
	})

	instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
		if (typeof window === 'undefined') return config

		// Логин не должен нести старый Bearer
		if (config.url?.includes(ApiRoutes.auth.login)) {
			delete config.headers.Authorization
			// setAuthorizationHeader(config, null)
			return config
		}

		const access = localStorage.getItem(LocalStorageNamespace.ACCESS_TOKEN)
		if (access) {
			config.headers.Authorization = `Bearer ${access}`
			// setAuthorizationHeader(config, `Bearer ${access}`)
		}

		return config
	})

	instance.interceptors.response.use(
		(res) => res,
		async (error: AxiosError) => {
			if (typeof window === 'undefined') throw error

			const status = error.response?.status
			const originalConfig = error.config as (AxiosRequestConfig & { _retry?: boolean }) | undefined

			if (!originalConfig) throw error
			if (status !== 401 || originalConfig._retry) throw error
			if (isAuthRequestWithoutRetry(originalConfig.url)) throw error

			originalConfig._retry = true

			const storedRefresh = localStorage.getItem(LocalStorageNamespace.REFRESH_TOKEN)
			if (!storedRefresh) {
				handleUnauthorized()
				throw error
			}

			if (!refreshPromise) {
				refreshPromise = refreshTokens().finally(() => {
					refreshPromise = null
				})
			}

			const ok = await refreshPromise
			if (!ok) {
				handleUnauthorized()
				throw error
			}

			return instance(originalConfig)
		}
	)

	return instance
}

export const instanceAxios = createAxiosInstance({
	baseURL: process.env.NEXT_PUBLIC_URL as string,
})
