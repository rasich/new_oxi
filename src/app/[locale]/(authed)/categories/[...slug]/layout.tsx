import { ReactNode } from 'react'

import { Tabs } from '@heroui/react'
import Link from 'next/link'

import { Routes } from '@/config/namespaces'

export default async function Layout({
	children,
	params,
}: {
	children: ReactNode
	params: Promise<{ locale: string; slug: string[] }>
}) {
	const {
		slug: [id, tab, ...rest],
	} = await params

	return (
		<div className="flex flex-col gap-6 h-full">
			<Tabs className="w-full max-w-md" variant="secondary" defaultSelectedKey={tab}>
				<Tabs.ListContainer>
					<Tabs.List aria-label="">
						<Tabs.Tab id="devices" className="relative">
							Devices
							<Link href={`${Routes.CATEGORIES}/${id}/devices`} className="absolute inset-0" />
							<Tabs.Indicator />
						</Tabs.Tab>
						<Tabs.Tab id="alerts">
							Alerts
							<Link href={`${Routes.CATEGORIES}/${id}/alerts`} className="absolute inset-0" />
							<Tabs.Indicator />
						</Tabs.Tab>
						<Tabs.Tab id="reports">
							Reports
							<Link href={`${Routes.CATEGORIES}/${id}/reports`} className="absolute inset-0" />
							<Tabs.Indicator />
						</Tabs.Tab>
					</Tabs.List>
				</Tabs.ListContainer>
			</Tabs>

			<div className="h-full">{children}</div>
		</div>
	)
}
