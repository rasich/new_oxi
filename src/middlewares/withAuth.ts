import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import { CookiesNamespace, Routes } from '@/config/namespaces'

import { MiddlewareFactory } from './types'

const LoggedOutRoutes = [
	Routes.AUTH,
	Routes.RESET_PASSWORD,
	Routes.CONFIRM_EMAIL,
	Routes.CONFIRM_INVITATION,
] as const

function isPublicPath(pathname: string, route: string): boolean {
	const routeSegments = route.split('/').filter(Boolean)
	const pathSegments = pathname.split('/').filter(Boolean)

	if (routeSegments.length === 0 || pathSegments.length < routeSegments.length) return false

	for (let i = 0; i <= pathSegments.length - routeSegments.length; i++) {
		let ok = true
		for (let j = 0; j < routeSegments.length; j++) {
			if (pathSegments[i + j] !== routeSegments[j]) {
				ok = false
				break
			}
		}

		if (ok) return true
	}

	return false
}

export const withAuth: MiddlewareFactory = (next) => {
	return async (request: NextRequest, _next: NextFetchEvent) => {
		const url = request.nextUrl
		const pathname = url.pathname

		const isAuth = request.cookies.get(CookiesNamespace.IS_AUTH)?.value === 'true'

		const isLoggedOutRoute = LoggedOutRoutes.some((route) => isPublicPath(pathname, route))

		if (!isAuth) {
			if (isLoggedOutRoute) {
				return next(request, _next)
			}

			url.pathname = Routes.AUTH
			return NextResponse.redirect(url)
		}

		if (isLoggedOutRoute) {
			url.pathname = Routes.HOME
			return NextResponse.redirect(url)
		}

		return next(request, _next)
	}
}
