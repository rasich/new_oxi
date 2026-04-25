'use client'
import type { FC } from 'react'

import { Card, Chip } from '@heroui/react'
import Link from 'next/link'

import { SpinnerPage } from '@/components/SpinnerPage/SpinnerPage'

import { useAlerts } from '@/hooks/queries/alerts/useAlerts'
import { useDevices } from '@/hooks/queries/devices/useDevices'
import { useReports } from '@/hooks/queries/reports/useReports'

import { Routes } from '@/config/namespaces'

import { DevicesPage } from '../../../devices/_components/DevicesPage'

interface CategoryPageProps {
	id: string
	tab?: string
	device?: string
}

export const CategoryPage: FC<CategoryPageProps> = ({ id, tab, device }) => {
	if (tab === 'alerts') return <AlertsTab id={id} />

	if (tab === 'reports') return <ReportsTab id={id} />

	if (tab === 'device' && device) return <DevicesPage categoryId={id} />
	return <DevicesTab id={id} device={device} />
}

const DevicesTab: FC<{ id: string; device?: string }> = ({ id, device }) => {
	const { data, isLoading } = useDevices({ categoryId: id })

	if (isLoading) return <SpinnerPage />

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{data?.map((device) => (
				<Card key={device.id} className="rounded-md relative overflow-hidden">
					<Link
						href={`${Routes.CATEGORIES}/${id}/device/${device.id}`}
						className="absolute inset-0"
					/>

					<Card.Header>
						<Card.Title className="text-s_h4 font-w_medium flex-center-between">
							{device.name}

							<Chip color="danger" variant="primary">
								{device.status}
							</Chip>
						</Card.Title>
					</Card.Header>
					<Card.Content />
					<Card.Footer className="text-muted"></Card.Footer>
				</Card>
			))}
		</div>
	)
}

const AlertsTab: FC<{ id: string }> = ({ id }) => {
	const { data, isLoading } = useAlerts({ categoryId: id })

	if (isLoading) return <SpinnerPage />

	return <div>AlertsTab</div>
}

const ReportsTab: FC<{ id: string }> = ({ id }) => {
	const { data, isLoading } = useReports({ referenceId: id, type: 'Category' })

	if (isLoading) return <SpinnerPage />

	return <div>ReportsTab</div>
}
