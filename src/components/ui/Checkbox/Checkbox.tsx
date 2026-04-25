import { type FC, ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues, UseFormRegisterReturn } from 'react-hook-form'

import {
	Description,
	FieldError,
	Checkbox as HerouiCheckbox,
	CheckboxProps as HerouiCheckboxProps,
	Label,
} from '@heroui/react'

import { cn } from '@/utils/cn'

type Picked =
	| 'className'
	| 'isDisabled'
	| 'isInvalid'
	| 'defaultSelected'
	| 'isSelected'
	| 'onChange'
	| 'variant'

type OptionalHeroUIProps = Partial<Pick<HerouiCheckboxProps, Picked>>

interface CheckboxProps<TFieldValues extends FieldValues> extends OptionalHeroUIProps {
	// react-hook-form
	control: Control<TFieldValues>
	name: FieldPath<TFieldValues>

	label: string
	description?: string
	customIcon?: ReactNode
}

function Checkbox<TFieldValues extends FieldValues>({
	name,
	control,
	label,
	description,
	customIcon,
	...rest
}: CheckboxProps<TFieldValues>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { value, onChange },
				fieldState: { error },
				formState: { isSubmitting },
			}) => (
				<HerouiCheckbox
					{...rest}
					isInvalid={!!error || rest?.isInvalid}
					isDisabled={isSubmitting || rest?.isDisabled}
					name={name}
					isSelected={value}
					onChange={onChange}
				>
					<HerouiCheckbox.Control>
						{!customIcon ? (
							<HerouiCheckbox.Indicator />
						) : (
							<HerouiCheckbox.Indicator>
								{({ isSelected }) => (isSelected ? customIcon : null)}
							</HerouiCheckbox.Indicator>
						)}
					</HerouiCheckbox.Control>
					<HerouiCheckbox.Content>
						<Label>{label}</Label>
						{(error || description) && (
							<Description
								className={cn('', {
									['text-red-400 animate-fade']: !!error?.message,
								})}
							>
								{error?.message || description}
							</Description>
						)}
					</HerouiCheckbox.Content>
				</HerouiCheckbox>
			)}
		/>
	)
}

export default Checkbox
