import type { FC, PropsWithChildren } from 'react'

import { Label, ListBox, PressEvent, Skeleton, Tooltip } from '@heroui/react'
import Link from 'next/link'

import { cn } from '@/utils/cn'

interface ListBoxItemProps extends PropsWithChildren {
	show: boolean
	onPress?: (e: PressEvent) => void
	className?: string
	isSkeleton?: boolean
	isLink?: boolean
	id?: string
	textValue?: string
	textTooltip?: string
}

const ListBoxItem: FC<ListBoxItemProps> = ({
	id,
	textValue,
	textTooltip,
	onPress,
	show,
	children,
	className,
	isSkeleton,
	isLink,
}) => {
	return (
		<ListBox.Item
			id={id}
			textValue={textValue}
			onPress={onPress}
			className="overflow-hidden relative p-0 flex w-full h-full "
		>
			{isSkeleton ? (
				<Skeleton className="w-full h-6 shrink-0 rounded-lg" />
			) : (
				<>
					{isLink ? (
						<Tooltip delay={0} isDisabled={show || !textTooltip}>
							<Link
								href={textValue || '#'}
								className={cn(
									'absolute inset-0 w-full h-full px-4 flex items-center gap-2 truncate no-underline',
									className
								)}
							>
								{children}
							</Link>
							<Tooltip.Content>
								<p>{textTooltip}</p>
							</Tooltip.Content>
						</Tooltip>
					) : (
						<Tooltip delay={0} isDisabled={show || !textTooltip}>
							<Tooltip.Trigger aria-label="User avatar">
								<Label className={cn('flex items-center px-4 gap-2 truncate', className)}>
									{children}
								</Label>
							</Tooltip.Trigger>
							<Tooltip.Content placement="right" offset={32}>
								<p>{textTooltip}</p>
							</Tooltip.Content>
						</Tooltip>
					)}
				</>
			)}
		</ListBox.Item>
	)
}

export default ListBoxItem
