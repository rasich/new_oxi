import { cookies } from 'next/headers'

import { CookiesNamespace } from '@/config/namespaces'

export async function getAuth() {
	const isAuth = (await cookies()).get(CookiesNamespace.IS_AUTH)?.value === 'true'
	return { isAuth }
}
