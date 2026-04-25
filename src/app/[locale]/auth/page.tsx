import { Icon } from '@/ui/Icon/Icon'

import { LoginForm } from './_components/LoginForm'

export default function Home() {
	return (
		<div className="container px-5 py-20 mx-auto min-h-dvh relative flex-center-center flex-col gap-6 ">
			<Icon name="logo" size={80} className="absolute top-0 left-5" />

			<LoginForm />
		</div>
	)
}
