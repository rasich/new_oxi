'use client'

import type { FC } from 'react'

import { Breadcrumbs } from '@heroui/react'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

import Button from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'

import { getKeyByValue } from '@/utils/getKeyByValue'

import { Routes } from '@/config/namespaces'
import { useDevice } from '@/config/providers/device'

import { NavDrawer } from '../Aside/components/NavListBox'

import { useScopedI18n } from '@/locales/client'
import { stripLocaleFromPath } from '@/locales/config'

interface HeaderLayoutProps {
	classNames?: {
		header?: string
		left?: string
		icon?: string
		right?: string
	}
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ classNames }) => {
	const t = useScopedI18n('nav')
	const { isMobile } = useDevice()

	const pathname = usePathname()

	const currentPath = stripLocaleFromPath(pathname)
	const currentPathArray = currentPath.split('/').filter(Boolean)

	const firstSegment = currentPathArray[0]

	const routeValue = firstSegment ? `/${firstSegment}` : Routes.HOME

	const currentRouteKey = getKeyByValue(Routes, routeValue)

	const currentPathName = currentRouteKey === 'HOME' ? 'explore' : currentRouteKey?.toLowerCase()

	return (
		<header className={classNames?.header}>
			<div className={classNames?.left}>
				{isMobile && <Icon name="logo" size={42} className={classNames?.icon} />}

				<Breadcrumbs>
					{currentPathArray.length === 0 ? (
						<Breadcrumbs.Item href={Routes.HOME}>{t('explore')}</Breadcrumbs.Item>
					) : (
						currentPathArray.map((item, index) => (
							<Breadcrumbs.Item key={index} href={index === 0 ? routeValue : '#'}>
								{index === 0 && currentPathName ? t(currentPathName as keyof typeof t) : item}
							</Breadcrumbs.Item>
						))
					)}
				</Breadcrumbs>
			</div>

			<div className={classNames?.right}>{isMobile && <NavDrawer />}</div>
		</header>
	)
}

export default HeaderLayout
