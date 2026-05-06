'use client'

import {
	Alert,
	Chip,
	EmptyState,
	Label,
	ListBox,
	SearchField,
	Select,
	Spinner,
	Table,
} from '@heroui/react'
import { format } from 'date-fns'
import { Inbox } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Map, MapControls } from '@/ui/Map/map'

import { useLocations } from '@/hooks/queries/locations/useLocations'
import { useStatus } from '@/hooks/queries/status/useStatus'

export default function Home() {
	const { data } = useStatus()
	const { theme } = useTheme()

	// throw new Error('Error in Explore Page')

	const { data: locations, isLoading: isLoadingLocations } = useLocations({ withStatuses: true })

	return (
		<div className="flex flex-col gap-6">
			<Alert status="danger" className="bg-danger/20 rounded-2xl animate-fade">
				<Alert.Indicator />
				<Alert.Content>
					<Alert.Title className="text-s_body">
						50% of locations are reporting critical status.
					</Alert.Title>
					<Alert.Description className="">
						<b>There are 1 device with critical status.</b>
						<br />
						last updated at 00:45 18.04.2026
					</Alert.Description>
				</Alert.Content>
			</Alert>

			<div className="flex items-center gap-4 flex-wrap">
				<SearchField name="search">
					<Label>Search</Label>
					<SearchField.Group>
						<SearchField.SearchIcon />
						<SearchField.Input
							className="w-[280px]"
							placeholder="Search by location name or address..."
						/>
						<SearchField.ClearButton />
					</SearchField.Group>
				</SearchField>

				<div className="flex items-center gap-4 flex-wrap">
					<Select className="w-[256px]" placeholder="State">
						<Label>State</Label>
						<Select.Trigger>
							<Select.Value />
							<Select.Indicator />
						</Select.Trigger>
						<Select.Popover>
							<ListBox>
								<ListBox.Item id="Critical" textValue="Critical">
									Critical
									<ListBox.ItemIndicator />
								</ListBox.Item>
								<ListBox.Item id="Warning" textValue="Warning">
									Warning
									<ListBox.ItemIndicator />
								</ListBox.Item>
								<ListBox.Item id="Normal" textValue="Normal">
									Normal
									<ListBox.ItemIndicator />
								</ListBox.Item>
							</ListBox>
						</Select.Popover>
					</Select>

					<Select className="w-[256px]" placeholder="Connection">
						<Label>Connection</Label>
						<Select.Trigger>
							<Select.Value />
							<Select.Indicator />
						</Select.Trigger>
						<Select.Popover>
							<ListBox>
								<ListBox.Item id="Online" textValue="Online">
									Online
									<ListBox.ItemIndicator />
								</ListBox.Item>
								<ListBox.Item id="Offline" textValue="Offline">
									Offline
									<ListBox.ItemIndicator />
								</ListBox.Item>
							</ListBox>
						</Select.Popover>
					</Select>
				</div>
			</div>

			<div className="h-95 rounded-2xl overflow-hidden">
				<Map
					center={[-74.006, 40.7128]}
					zoom={11}
					theme={theme?.includes('dark') ? 'dark' : 'light'}
				>
					<MapControls />
				</Map>
			</div>

			<Table>
				<Table.ScrollContainer>
					<Table.Content aria-label="Team members" className="">
						<Table.Header>
							<Table.Column isRowHeader>Location</Table.Column>
							<Table.Column>Connection</Table.Column>
							<Table.Column>Status</Table.Column>
							<Table.Column>Alerts</Table.Column>
							<Table.Column>Issues Detected</Table.Column>
							<Table.Column>Last Updated</Table.Column>
						</Table.Header>
						<Table.Body
							renderEmptyState={() => (
								<EmptyState className="flex h-30 w-full flex-col items-center justify-center gap-4 text-center">
									{isLoadingLocations ? (
										<Spinner />
									) : (
										<>
											<Inbox />
											<span className="text-sm text-muted">No results found</span>
										</>
									)}
								</EmptyState>
							)}
						>
							{locations?.map((location) => (
								<Table.Row key={location.id}>
									<Table.Cell>
										<div>{location.name}</div>
										<div>{location.address}</div>
									</Table.Cell>
									<Table.Cell>Offline</Table.Cell>
									<Table.Cell>
										<Chip color="danger" variant="primary" size="sm">
											CRITICAL
										</Chip>
									</Table.Cell>
									<Table.Cell>
										{format(new Date(location.connections?.[0].createdAt), 'HH:mm dd.MM.yyyy')}
									</Table.Cell>
									<Table.Cell>{}</Table.Cell>
									<Table.Cell>{}</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Content>
				</Table.ScrollContainer>
			</Table>
		</div>
	)
}
