'use client'
import { useEffect } from 'react'

import Button from '@/ui/Button/Button'

export default function ErrorPage({
	error,
	unstable_retry,
}: {
	error: Error & { digest?: string }
	unstable_retry: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="flex-center-center h-full flex-col gap-2">
			<b>AUTHED</b>
			<h2>Something went wrong!</h2>
			<span>Error: {error.message}</span>
			<Button onPress={unstable_retry}>Try again</Button>
		</div>
	)
}
