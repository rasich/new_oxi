import { toast } from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { CookiesNamespace, Routes } from '@/config/namespaces'
import { useAuth } from '@/config/providers/auth/auth'

import { apiClientService } from '@/services/apiClientService'
import { setAuthTokens } from '@/services/axiosInstance'

import { useScopedI18n } from '@/locales/client'

export const useLogin = () => {
	const tT = useScopedI18n('ui.toasts')

	const { signIn } = useAuth()

	const router = useRouter()

	return useMutation({
		mutationFn: async (data: { email: string; password: string }) => {
			if (!data.email || !data.password) throw new Error()

			return (await apiClientService.auth.postLogin(data)).data
		},
		onSuccess: async (tokens) => {
			signIn()
			setAuthTokens(tokens.accessToken, tokens.refreshToken)

			Cookies.set(CookiesNamespace.IS_AUTH, 'true')

			router.replace(Routes.HOME)
		},
		onError: (error) => {
			console.error(error)

			toast.danger(tT('authError'))
		},
	})
}
