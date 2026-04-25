'use client'

import type { FC } from 'react'

import { Spinner } from '@heroui/react'

import { cn } from '@/utils/cn'

export const SpinnerPage: FC<{ className?: string }> = ({ className }) => (
	<div className={cn('w-full h-full flex-center-center animate-fade', className)}>
		<Spinner size="xl" />
	</div>
)
