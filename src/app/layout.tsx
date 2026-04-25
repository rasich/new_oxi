import { ReactNode } from 'react'

import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'

import ActionsBlock from '@/components/ActionsBlock/ActionsBlock'

import { cn } from '@/utils/cn'
import { getCurrentDir } from '@/utils/system/isRTL'

import { CookiesNamespace } from '@/config/namespaces'
import { AuthProvider } from '@/config/providers/auth/auth'
import { DeviceProvider, DeviceType } from '@/config/providers/device'
import QueryProvider from '@/config/providers/query/query'
import { ToastProvider } from '@/config/providers/toast'

import './globals.css'

import { ThemeProvider } from '../config/providers/theme'

import { Inter } from '@/fonts'
import { I18nProviderClient } from '@/locales/client'
import { DEFAULT_LOCALE, isLocale } from '@/locales/config'

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	interactiveWidget: 'resizes-content',
}

export const metadata: Metadata = {
	title: {
		template: '%s | OXI',
		default: 'OXI',
	},
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	const cookieLocale = (await cookies()).get(CookiesNamespace.NEXT_LOCALE)?.value
	const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE

	const device = (await cookies()).get(CookiesNamespace.DEVICE)?.value as DeviceType

	const isAuth = (await cookies()).get(CookiesNamespace.IS_AUTH)?.value === 'true'

	return (
		<html
			lang={locale}
			dir={getCurrentDir(locale)}
			className={cn(Inter.variable, 'antialiased')}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider>
					<DeviceProvider device={device}>
						<I18nProviderClient locale={locale}>
							<QueryProvider>
								<AuthProvider isAuth={isAuth}>
									<ToastProvider />

									<ActionsBlock />

									{children}
								</AuthProvider>
							</QueryProvider>
						</I18nProviderClient>
					</DeviceProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
