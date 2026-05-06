import { redirect } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params

	// if (isNaN(Number(id))) redirect('/test/page1')

	return <div>My Post: {id}</div>
}
