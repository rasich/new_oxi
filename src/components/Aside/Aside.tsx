'use client'

import { type FC, useEffect, useState } from 'react'

import { Separator } from '@heroui/react'
import { cn } from '@heroui/styles'
import Cookies from 'js-cookie'
import { PanelRightClose, PanelRightOpen } from 'lucide-react'

import Button from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'

import { CookiesNamespace, Routes } from '@/config/namespaces'
import { useDevice } from '@/config/providers/device'

import { NavListBox } from './components/NavListBox'
import SettingsListBox from './components/SettingsListBox'

interface AsideProps {
	showAside: boolean
}

const Aside: FC<AsideProps> = ({ showAside }) => {
	const [show, setShow] = useState(showAside)

	const { isMobile, isTablet, isDesktop } = useDevice()

	useEffect(() => {
		if (isTablet) {
			setShow(false)
		}

		if (isDesktop) {
			setShow(true)
		}
	}, [isTablet, isDesktop])

	const handleShow = () => {
		Cookies.set(CookiesNamespace.SHOW_ASIDE, show ? 'false' : 'true')
		setShow(!show)
	}

	if (isMobile) return null

	return (
		<aside
			className={cn(
				'bg-surface border-separator border-r h-full max-h-dvh transition-[width] overflow-clip px-2 pt-2 pb-4 grid grid-rows-[auto_1fr_auto] gap-2 w-20',
				{ ['w-56']: show }
			)}
		>
			<div className="flex-center-between w-full">
				<Button
					className={cn('rounded-md overflow-hidden', { ['pointer-events-none']: show })}
					onPress={handleShow}
					size="sm"
					variant="ghost"
					hoveredContent={
						<span className="w-10 flex-center-center">
							<PanelRightClose />
						</span>
					}
				>
					<span className="w-10">
						<Icon name="logo" size={42} className="[&_svg]:overflow-visible [&_svg]:aspect-auto" />
					</span>
				</Button>

				{show && (
					<Button
						isIconOnly
						className="rounded-md animate-fade"
						size="sm"
						variant="ghost"
						onPress={handleShow}
					>
						<PanelRightOpen />
					</Button>
				)}
			</div>

			<NavListBox show={show} />

			<div>
				{!show && (
					<div className="w-full px-1 animate-fade mb-3">
						<Button
							size="md"
							isIconOnly
							variant="ghost"
							className="rounded-md w-full"
							onPress={handleShow}
						>
							<PanelRightClose />
						</Button>
					</div>
				)}

				<Separator className="mb-2" />

				<SettingsListBox show={show} />
			</div>
		</aside>
	)
}

export default Aside
