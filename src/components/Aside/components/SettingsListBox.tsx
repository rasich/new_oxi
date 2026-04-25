'use client'

import type { FC } from 'react'

import { ListBox } from '@heroui/react'
import { Languages, LogOut, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { useMounted } from '@/hooks/system/useMount'

import { useAuth } from '@/config/providers/auth/auth'

import ListBoxItem from './ListBoxItem'
import { useChangeLocale, useCurrentLocale, useScopedI18n } from '@/locales/client'

interface SettingsListBoxProps {
	show: boolean
}

const SettingsListBox: FC<SettingsListBoxProps> = ({ show }) => {
	return (
		<ListBox aria-label="Settings" selectionMode="none" onAction={() => {}}>
			<ThemeSwitcher show={show} />

			<LocaleSwitcher show={show} />

			<LogOutButton show={show} />
		</ListBox>
	)
}

export default SettingsListBox

const ThemeSwitcher: FC<{ show: boolean }> = ({ show }) => {
	const t = useScopedI18n('ui.select.theme')

	const { theme, setTheme } = useTheme()
	const isMounted = useMounted()

	return (
		<ListBoxItem
			show={show}
			textValue="theme"
			isSkeleton={!isMounted}
			onPress={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))}
		>
			{theme === 'dark' ? (
				<Moon strokeWidth={2.5} size={18} className="shrink-0" />
			) : (
				<Sun strokeWidth={2.5} size={18} className="shrink-0" />
			)}
			{show && (
				<span>
					{theme === 'light' ? t('light') : t('dark')} {t('theme')}
				</span>
			)}
		</ListBoxItem>
	)
}

const LocaleSwitcher: FC<{ show: boolean }> = ({ show }) => {
	const t = useScopedI18n('ui.select')

	const currentLocale = useCurrentLocale()
	const changeLocale = useChangeLocale()

	return (
		<ListBoxItem
			show={show}
			textValue="locale"
			onPress={() => changeLocale(currentLocale === 'en' ? 'ru' : 'en')}
		>
			{show ? (
				<>
					<Languages strokeWidth={2.5} size={18} className="shrink-0" />
					<span>
						{t('language')}: <span className="uppercase font-w_bold ">{currentLocale}</span>
					</span>
				</>
			) : (
				<span className="uppercase font-w_bold ">{currentLocale}</span>
			)}
		</ListBoxItem>
	)
}

const LogOutButton: FC<{ show: boolean }> = ({ show }) => {
	const t = useScopedI18n('ui.button')
	const { signOut } = useAuth()

	return (
		<ListBoxItem show={show} textValue="logout" onPress={() => signOut()}>
			<LogOut strokeWidth={2.5} size={22} className="shrink-0" />
			{show && <span>{t('logout')}</span>}
		</ListBoxItem>
	)
}
