'use client'

import type { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Surface } from '@heroui/react'

import Button from '@/ui/Button/Button'
import Checkbox from '@/ui/Checkbox/Checkbox'
import Input from '@/ui/Input/Input'

import { useLogin } from '@/hooks/mutations/auth/useLogin'

import { useScopedI18n } from '@/locales/client'

type FormValues = {
	email: string
	password: string
	rememberMe: boolean
}

export const LoginForm: FC = () => {
	const t = useScopedI18n('pages.login')
	const tI = useScopedI18n('ui.input')
	const tB = useScopedI18n('ui.button')
	const tC = useScopedI18n('ui.checkbox')
	const tT = useScopedI18n('ui.toasts')

	const { mutateAsync, isPending } = useLogin()

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = async (value) => {
		try {
			await mutateAsync(value)
		} catch (error: any) {}
	}

	return (
		<Surface
			className="flex flex-col gap-3 max-w-[500px] w-full rounded-3xl p-6"
			variant="secondary"
		>
			<h1 className="text-s_h2 font-w_medium">{t('title')}</h1>
			<p className="text-balance text-s_caption">{t('description')}</p>

			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<div className="flex flex-col gap-3">
					<Input
						label={tI('label.email')}
						placeholder={tI('placeholder.email')}
						control={control}
						name="email"
						type="email"
						isRequired
					/>
					<Input
						label={tI('label.password')}
						placeholder={tI('placeholder.password')}
						control={control}
						name="password"
						type="password"
						isRequired
					/>
				</div>

				<Checkbox label={tC('rememberMe')} control={control} name="rememberMe" />

				<Button type="submit" isPending={isPending} fullWidth>
					{tB('login')}
				</Button>
			</form>
		</Surface>
	)
}
