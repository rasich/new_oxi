export type ServerSideProps = {
	params: Promise<{ locale: string; slug?: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
