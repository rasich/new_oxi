import { ReactNode } from 'react'

import { cookies } from 'next/headers'

import Aside from '@/components/Aside/Aside'
import UserDataFetcher from '@/components/FetchComponents/UserDataFetcher/UserDataFetcher'
import HeaderLayout from '@/components/Layout/HeaderLayout'

import { cn } from '@/utils/cn'

import { CookiesNamespace } from '@/config/namespaces'

import styles from './layout.module.css'

export default async function Layout({ children }: { children: ReactNode }) {
	const showAside = (await cookies()).get(CookiesNamespace.SHOW_ASIDE)?.value

	return (
		<>
			<div className={styles.layout}>
				<Aside showAside={typeof showAside === 'undefined' ? true : showAside === 'true'} />

				<div className={styles.contentWrapper}>
					<HeaderLayout
						classNames={{
							header: cn(
								styles.header,
								'border-separator/50 dark:border-separator px-6 py-4 max-md:px-4 max-md:py-3'
							),
							left: styles.left,
							icon: styles.icon,
							right: styles.right,
						}}
					/>
					<div className={styles.content}>{children}</div>
				</div>
			</div>

			<UserDataFetcher />
		</>
	)
}
