'use client'

import { type FC } from 'react'

import { Skeleton } from '@heroui/react'
import { LogOut, Moon, Rainbow, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import Button from '@/ui/Button/Button'

import { useMounted } from '@/hooks/system/useMount'

import { useAuth } from '@/config/providers/auth/auth'

import { useChangeLocale, useCurrentLocale } from '@/locales/client'

const ActionsBlock: FC = () => {
	// THEME
	const { theme, setTheme } = useTheme()
	const isMounted = useMounted()

	// LOCALE
	const currentLocale = useCurrentLocale()
	const changeLocale = useChangeLocale()

	// AUTH
	const { isAuth, signOut } = useAuth()

	// if (isAuth) return null

	return (
		<div className="fixed bottom-0 right-0 p-2 flex items-center gap-2 backdrop-blur rounded-tl-xl z-1">
			{isAuth ? (
				<>
					<Button
						variant="ghost"
						isIconOnly
						size="lg"
						onPress={() =>
							setTheme((v) => (v === 'rainbow_light' ? 'rainbow_dark' : 'rainbow_light'))
						}
					>
						<Rainbow strokeWidth={2.5} size={18} />
					</Button>
				</>
			) : (
				<>
					{/* THEME */}
					{!isMounted ? (
						<Skeleton className="h-10 w-10 shrink-0 rounded-full" />
					) : (
						<>
							<Button
								variant="ghost"
								isIconOnly
								size="lg"
								onPress={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))}
							>
								{theme === 'dark' ? <Moon strokeWidth={2.5} /> : <Sun strokeWidth={2.5} />}
							</Button>

							<Button
								variant="ghost"
								isIconOnly
								size="lg"
								onPress={() =>
									setTheme((v) => (v === 'rainbow_light' ? 'rainbow_dark' : 'rainbow_light'))
								}
							>
								<Rainbow strokeWidth={2.5} size={18} />
							</Button>
						</>
					)}

					{/* LOCALE */}
					<Button
						size="lg"
						isIconOnly
						variant="ghost"
						className="uppercase font-w_semiBold"
						onPress={() => changeLocale(currentLocale === 'en' ? 'ru' : 'en')}
					>
						{currentLocale}
					</Button>

					{/* AUTH */}
					{isAuth && (
						<Button
							size="lg"
							isIconOnly
							variant="ghost"
							className="animate-fade"
							onPress={() => signOut()}
						>
							<LogOut strokeWidth={2.5} />
						</Button>
					)}
				</>
			)}
		</div>
	)
}

export default ActionsBlock
