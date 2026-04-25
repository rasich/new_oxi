'use client'

import { type FC, useEffect } from 'react'

import { useUser } from '@/hooks/queries/users/useUser'

import { useRoleStore } from '@/stores/useRoleStore'

interface UserDataFetcherProps {}

const UserDataFetcher: FC<UserDataFetcherProps> = () => {
	const { data } = useUser()

	const setRole = useRoleStore((s) => s.setRole)

	useEffect(() => {
		if (data?.role) setRole(data.role)
	}, [data?.role])

	return null
}

export default UserDataFetcher
