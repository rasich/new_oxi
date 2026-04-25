import { createI18nMiddleware } from 'next-international/middleware'
import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server'

import { MiddlewareFactory } from './types'
import { DEFAULT_LOCALE, locales } from '@/locales/config'

const I18nMiddleware = createI18nMiddleware({
	locales,
	defaultLocale: DEFAULT_LOCALE,
	// urlMappingStrategy: 'rewriteDefault',
})

export const withI18n: MiddlewareFactory = (next: NextMiddleware) => {
	return async (request: NextRequest, _next: NextFetchEvent) => {
		await next(request, _next)
		return I18nMiddleware(request)
	}
}
