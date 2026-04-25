'use client'

import { Card } from '@heroui/react'
import { Folder, Icon } from 'lucide-react'
import Link from 'next/link'

import { SpinnerPage } from '@/components/SpinnerPage/SpinnerPage'

import { useCategories } from '@/hooks/queries/categories/useCategories'
import { getNumeralTitle } from '@/utils/getNumeralTitle'

import { Routes } from '@/config/namespaces'

import { useScopedI18n } from '@/locales/client'

export default function Page() {
	const tScoped = useScopedI18n('ui.counter.devices')

	const { data, isLoading } = useCategories()

	if (isLoading) return <SpinnerPage />

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{data?.map((category) => (
				<Card key={category.id} className="rounded-md relative overflow-hidden">
					<Link href={`${Routes.CATEGORIES}/${category.id}`} className="absolute inset-0" />

					<Card.Header>
						<Card.Title className="text-s_h4 font-w_medium flex-center-between">
							{category.name}

							<Folder className="text-muted" size={24} />
						</Card.Title>
					</Card.Header>
					<Card.Footer className="text-muted">
						{getNumeralTitle({ count: category.amountOfDevices, tScoped })}
					</Card.Footer>
				</Card>
			))}
		</div>
	)
}
