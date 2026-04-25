'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { Spinner } from '@heroui/react'
import Cookies from 'js-cookie'

import { SpinnerPage } from '@/components/SpinnerPage/SpinnerPage'

import { CookiesNamespace } from '@/config/namespaces'

const BREAKPOINTS = {
	md: 768,
	lg: 1024,
} as const

const DeviceContext = createContext({
	isMobile: false,
	isTablet: false,
	isDesktop: false,
})

export type DeviceType = 'desktop' | 'tablet' | 'mobile'

const getDevice = (width: number): DeviceType => {
	if (width < BREAKPOINTS.md) return 'mobile'
	if (width < BREAKPOINTS.lg) return 'tablet'
	return 'desktop'
}

export function DeviceProvider({ device, children }: { device?: DeviceType; children: ReactNode }) {
	const [curDevice, setCurDevice] = useState<DeviceType | undefined>(device)

	useEffect(() => {
		const updateDevice = () => {
			const newDevice = getDevice(window.innerWidth)

			setCurDevice((prevDevice) => {
				if (prevDevice !== newDevice) {
					Cookies.set(CookiesNamespace.DEVICE, newDevice)
					return newDevice
				}
				return prevDevice
			})
		}

		updateDevice()

		window.addEventListener('resize', updateDevice)
		return () => window.removeEventListener('resize', updateDevice)
	}, [])

	if (!curDevice) return <SpinnerPage />

	return (
		<DeviceContext.Provider
			value={{
				isMobile: curDevice === 'mobile',
				isTablet: curDevice === 'tablet',
				isDesktop: curDevice === 'desktop',
			}}
		>
			{children}
		</DeviceContext.Provider>
	)
}

export function useDevice() {
	return useContext(DeviceContext)
}
