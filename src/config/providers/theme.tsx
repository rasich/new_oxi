'use client'

import { PropsWithChildren } from 'react'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: PropsWithChildren) {
	return (
		<NextThemesProvider enableSystem={true} defaultTheme="system">
			{children}
		</NextThemesProvider>
	)
}
