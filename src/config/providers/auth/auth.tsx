'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

import { useRouter } from 'next/navigation'

import { clearAllCookies } from '@/utils/system/clearAllCookies'

import { Routes } from '@/config/namespaces'

type SignInType = { login: string; password: string }

const AuthContext = createContext({
	isAuth: false,
	signIn: () => {},
	signOut: () => {},
})

export function AuthProvider({
	children,
	isAuth: _isAuth,
}: {
	children: ReactNode
	isAuth: boolean
}) {
	const [isAuth, setIsAuth] = useState(_isAuth)

	const router = useRouter()

	const signIn = () => setIsAuth(true)

	const signOut = async () => {
		setIsAuth(false)
		clearAllCookies()
		router.replace(Routes.AUTH)
	}

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext)
}
