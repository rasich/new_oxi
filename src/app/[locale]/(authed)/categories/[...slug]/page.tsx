import { CategoryPage } from './_components/CategoryPage'

export default async function Page({
	params,
}: {
	params: Promise<{ locale: string; slug: string[] }>
}) {
	const {
		slug: [id, tab, device],
	} = await params

	return <CategoryPage id={id} tab={tab} device={device} />
}
