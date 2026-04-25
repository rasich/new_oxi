'use client'

import { ReactNode, useState } from 'react'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import {
	Button,
	Description,
	FieldError,
	InputGroup,
	Label,
	TextArea,
	TextField,
	TextFieldRootProps,
} from '@heroui/react'
import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/utils/cn'

type Picked = 'className' | 'fullWidth' | 'isRequired' | 'isDisabled' | 'isInvalid'

type AutoCompleteType =
	| 'off'
	| 'on'
	| 'name'
	| 'given-name'
	| 'additional-name'
	| 'family-name'
	| 'nickname'
	| 'email'
	| 'username'
	| 'new-password'
	| 'current-password'
	| 'one-time-code'
	| 'tel'

type InputModeType =
	| 'text'
	| 'search'
	| 'email'
	| 'tel'
	| 'url'
	| 'decimal'
	| 'none'
	| 'numeric'

type OptionalHeroUIProps = Partial<Pick<TextFieldRootProps, Picked>>

interface InputProps<TFieldValues extends FieldValues> extends OptionalHeroUIProps {
	control: Control<TFieldValues>
	name: FieldPath<TFieldValues>

	label?: string
	placeholder?: string
	description?: string
	errorMessage?: string
	type?: InputModeType | 'password' | 'textArea'
	defaultValue?: string
	autoComplete?: AutoCompleteType

	variant?: 'primary' | 'secondary'
	min?: number
	max?: number
	minLength?: number
	maxLength?: number
	startContent?: ReactNode
	endContent?: ReactNode
}

function Input<TFieldValues extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	description,
	errorMessage,
	isRequired,
	isDisabled,
	isInvalid,
	className,
	type = 'text',
	defaultValue,
	autoComplete = 'off',
	startContent,
	endContent,
	variant,
	...rest
}: InputProps<TFieldValues>) {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { value, onChange, onBlur, ref },
				fieldState: { error },
				formState: { isSubmitting },
			}) => (
				<TextField
					isRequired={isRequired}
					isDisabled={isDisabled || isSubmitting}
					isInvalid={!!error || isInvalid}
					defaultValue={defaultValue}
					className={cn('max-w-[468px] w-full', className)}
					onBlur={onBlur}
					onChange={onChange}
					value={value}
					autoComplete={autoComplete}
					type={type === 'textArea' ? undefined : type}
					variant={variant}
				>
					{label && <Label className="cursor-pointer">{label}</Label>}

					{type === 'textArea' ? (
						<TextArea
							placeholder={placeholder}
							ref={ref}
							{...rest}
							//
						/>
					) : (
						<InputGroup>
							{startContent && <InputGroup.Prefix>{startContent}</InputGroup.Prefix>}

							<InputGroup.Input
								placeholder={placeholder}
								ref={ref}
								type={type === 'password' ? (isVisible ? 'text' : 'password') : undefined}
								className='w-full'
								{...rest}
							/>

							{(endContent || type === 'password') && (
								<InputGroup.Suffix>
									{endContent ? (
										endContent
									) : (
										<Button
											isIconOnly
											aria-label={isVisible ? 'Hide password' : 'Show password'}
											size="sm"
											variant="ghost"
											onPress={() => setIsVisible(!isVisible)}
										>
											{isVisible ? <Eye /> : <EyeOff />}
										</Button>
									)}
								</InputGroup.Suffix>
							)}
						</InputGroup>
					)}

					{description && <Description>{description}</Description>}

					{!!error?.message && <FieldError className="animate-fade">{error?.message}</FieldError>}
				</TextField>
			)}
		/>
	)
}

export default Input
