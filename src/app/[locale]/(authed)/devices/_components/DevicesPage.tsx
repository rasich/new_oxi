'use client'

import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'react-use'

import { Card, Chip } from '@heroui/react'
import { Search } from 'lucide-react'
import Link from 'next/link'

import { SpinnerPage } from '@/components/SpinnerPage/SpinnerPage'

import Input from '@/ui/Input/Input'

import { useDevices } from '@/hooks/queries/devices/useDevices'

import { Routes } from '@/config/namespaces'

interface DevicesPageProps {
	categoryId?: string
}

type FormValues = {
	search: string
	_search: string
}

export const DevicesPage: FC<DevicesPageProps> = ({ categoryId }) => {
	const { control, watch, setValue } = useForm<FormValues>()

	const _search = watch('_search')
	useDebounce(() => setValue('search', _search), 400, [_search])

	const search = watch('search')
	const { data, isLoading } = useDevices({ categoryId, search })

	return (
		<div className="flex flex-col gap-6 h-full">
			<div className="flex gap-2 items-center">
				<Input
					control={control}
					name="_search"
					type="search"
					placeholder="Search..."
					startContent={<Search />}
				/>
			</div>

			{!data?.length && isLoading ? (
				<SpinnerPage />
			) : (
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{data?.map((device) => (
						<Card key={device.id} className="rounded-md relative overflow-hidden">
							{/* <Link href={`${Routes.CATEGORIES}/${device.id}`} className="absolute inset-0" /> */}

							<Card.Header>
								<Card.Title className="text-s_h4 font-w_medium flex-center-between">
									{device.name}

									<Chip variant="primary" color="accent">
										{device.status}
									</Chip>
								</Card.Title>
							</Card.Header>
							<Card.Footer className="text-muted"></Card.Footer>
						</Card>
					))}
				</div>
			)}
		</div>
	)
}
