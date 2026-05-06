import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { cn } from '@/utils/cn'
import { getCurrentDir } from '@/utils/system/isRTL'

import { CookiesNamespace } from '@/config/namespaces'
import { ThemeProvider } from '@/config/providers/theme'

import './globals.css'
import './globals.css'

import { Inter } from '@/fonts'
import { DEFAULT_LOCALE, isLocale } from '@/locales/config'
import { getScopedI18n } from '@/locales/server'

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist.',
}

export default async function GlobalNotFound() {
	const cookieLocale = (await cookies()).get(CookiesNamespace.NEXT_LOCALE)?.value
	const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE

	const t = await getScopedI18n('pages.404')

	return (
		<html
			lang={locale}
			dir={getCurrentDir(locale)}
			className={cn(Inter.variable, 'antialiased')}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider>
					<h1>{t('title')}</h1>
					<p>{t('description')}</p>
				</ThemeProvider>
			</body>
		</html>
	)
}
