import { ReactNode } from 'react'

import Link from 'next/link'

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="border border-red-400 h-full grid grid-rows-[auto_1fr] p-5">
			<div className="flex gap-5">
				Layout
				<div className="flex items-center gap-2">
					<Link href="/test" className="underline text-blue-400">
						default
					</Link>
					<Link href="/test/page1" className="underline text-blue-400">
						Page 1
					</Link>
					<Link href="/test/page2" className="underline text-blue-400">
						Page 2
					</Link>
					<Link href="/test/error" className="underline text-blue-400">
						Error
					</Link>
				</div>
			</div>

			<div className="border border-green-400 h-full">{children}</div>
		</div>
	)
}
