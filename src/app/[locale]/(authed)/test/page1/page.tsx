import { Metadata } from 'next'

import { getTitleMetadata } from '@/utils/system/getTitleMetadata'

import { ServerSideProps } from '@/types/main'

import { getScopedI18n } from '@/locales/server'

export async function generateMetadata({ params }: ServerSideProps): Promise<Metadata> {
	const { locale } = await params
	const title = getTitleMetadata({ locale, title: 'test.page1.titleMeta' })
	if (!title) return {}
	return { title }
}

export default async function Page() {
	const t = await getScopedI18n('pages.test.page1')

	return <div className="">{t('title')}</div>
}
