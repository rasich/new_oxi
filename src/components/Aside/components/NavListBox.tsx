import type { FC } from 'react'

import { Drawer, ListBox, ScrollShadow } from '@heroui/react'
import {
	ChartNoAxesColumn,
	CircleUserRound,
	Compass,
	GitFork,
	Grid2x2,
	LayoutDashboard,
	LucideIcon,
	Menu,
	Monitor,
	SearchCode,
	Settings,
} from 'lucide-react'
import { usePathname } from 'next/navigation'

import Button from '@/ui/Button/Button'

import { cn } from '@/utils/cn'

import { Routes } from '@/config/namespaces'

import ListBoxItem from './ListBoxItem'
import { useScopedI18n } from '@/locales/client'
import { stripLocaleFromPath } from '@/locales/config'

interface NavListBoxProps {
	show: boolean
}

const navItems: { icon: LucideIcon; label: string; route: string }[] = [
	{ icon: Compass, label: 'explore', route: Routes.HOME },
	{ icon: LayoutDashboard, label: 'dashboard', route: Routes.DASHBOARD },
	{ icon: Grid2x2, label: 'categories', route: Routes.CATEGORIES },
	{ icon: ChartNoAxesColumn, label: 'reports', route: Routes.REPORTS },
	{ icon: SearchCode, label: 'logs', route: Routes.LOGS },
	{ icon: Monitor, label: 'devices', route: Routes.DEVICES },
	{ icon: GitFork, label: 'processes', route: Routes.PROCESSES },
	{ icon: Settings, label: 'settings', route: Routes.SETTINGS },
	{ icon: CircleUserRound, label: 'account', route: Routes.ACCOUNT },
]

export const NavListBox: FC<NavListBoxProps> = ({ show }) => {
	const t = useScopedI18n('nav')

	const pathname = usePathname()

	return (
		<ScrollShadow>
			<ListBox aria-label="Navigation" selectionMode="single">
				<ListBoxItem
					isLink
					show={show}
					id={Routes.HOME}
					textValue={Routes.HOME}
					className={cn({
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.HOME,
					})}
				>
					<Compass
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('explore')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.DASHBOARD}
					textValue={Routes.DASHBOARD}
					className={cn({
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.DASHBOARD,
					})}
				>
					<LayoutDashboard
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('dashboard')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.CATEGORIES}
					textValue={Routes.CATEGORIES}
					className={cn({
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.CATEGORIES,
					})}
				>
					<Grid2x2
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('categories')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.REPORTS}
					textValue={Routes.REPORTS}
					className={cn({
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.REPORTS,
					})}
				>
					<ChartNoAxesColumn
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('reports')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.LOGS}
					textValue={Routes.LOGS}
					className={cn('line-through', {
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.LOGS,
					})}
				>
					<SearchCode
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('logs')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.DEVICES}
					textValue={Routes.DEVICES}
					className={cn({
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.DEVICES,
					})}
				>
					<Monitor
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('devices')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.PROCESSES}
					textValue={Routes.PROCESSES}
					className={cn('line-through', {
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.PROCESSES,
					})}
				>
					<GitFork
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('processes')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.SETTINGS}
					textValue={Routes.SETTINGS}
					className={cn('line-through', {
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.SETTINGS,
					})}
				>
					<Settings
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('settings')}</span>}
				</ListBoxItem>

				<ListBoxItem
					isLink
					show={show}
					id={Routes.ACCOUNT}
					textValue={Routes.ACCOUNT}
					className={cn('line-through', {
						['[*]:text-accent']: stripLocaleFromPath(pathname) === Routes.ACCOUNT,
					})}
				>
					<CircleUserRound
						size={22}
						className={cn('shrink-0 transition-[margin]', { ['mx-auto']: !show })}
					/>
					{show && <span className="text-s_body">{t('account')}</span>}
				</ListBoxItem>
			</ListBox>
		</ScrollShadow>
	)
}

export const NavDrawer: FC = () => {
	const t = useScopedI18n('nav')

	return (
		<Drawer>
			<Button isIconOnly variant="secondary">
				<Menu />
			</Button>

			<Drawer.Backdrop>
				<Drawer.Content>
					<Drawer.Dialog>
						<Drawer.Handle />
						<Drawer.Header>
							<Drawer.Heading>Navigation</Drawer.Heading>
						</Drawer.Header>
						<Drawer.Body>
							<nav className="flex flex-col gap-1">
								{navItems.map((item) => (
									<a
										href={item.route}
										key={item.label}
										className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
										type="button"
									>
										<item.icon className="size-5 text-muted" />
										{t(item.label as keyof typeof t)}
									</a>
								))}
							</nav>
						</Drawer.Body>
					</Drawer.Dialog>
				</Drawer.Content>
			</Drawer.Backdrop>
		</Drawer>
	)
}
