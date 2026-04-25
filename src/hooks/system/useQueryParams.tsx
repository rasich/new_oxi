import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const setQuery = (params: Record<string, string | number | undefined>, isReplace?: boolean) => {
		const currentParams = new URLSearchParams()

		Object.entries(params).forEach((value) => {
			if (typeof value[1] !== 'undefined') currentParams.set(value[0], value[1].toString())
			else currentParams.delete(value[0])
		})

		if (isReplace) return router.replace(`${pathname}?${currentParams.toString()}`)
		router.push(`${pathname}?${currentParams.toString()}`)
	}

	const pushQuery = (params: Record<string, string | number | undefined>, isReplace?: boolean) => {
		const currentParams = new URLSearchParams(searchParams.toString())

		Object.entries(params).forEach((value) => {
			if (typeof value[1] !== 'undefined') currentParams.set(value[0], value[1].toString())
		})

		if (isReplace) return router.replace(`${pathname}?${currentParams.toString()}`)
		router.push(`${pathname}?${currentParams.toString()}`)
	}

	const getQuery = (key: string) => {
		const query = searchParams.get(key)
		return query
	}

	const getAllQuery = (key: string) => {
		const query = searchParams.getAll(key)
		return query
	}

	const removeQuery = (key: string, isReplace?: boolean) => {
		const currentParams = new URLSearchParams(searchParams.toString())
		currentParams.delete(key)

		if (isReplace) return router.replace(`${pathname}?${currentParams.toString()}`)
		router.push(`${pathname}?${currentParams.toString()}`)
	}

	const removeAllQuery = (isReplace?: boolean) => {
		const currentParams = new URLSearchParams()

		if (isReplace) return router.replace(`${pathname}?${currentParams.toString()}`)
		router.push(`${pathname}?${currentParams.toString()}`)
	}

	const getAllQueries = () => {
		const query = searchParams.toString()
		return { string: query, object: Object.fromEntries(searchParams) }
	}

	return {
		setQuery,
		pushQuery,
		getQuery,
		getAllQuery,
		removeQuery,
		removeAllQuery,
		getAllQueries,
	}
}
