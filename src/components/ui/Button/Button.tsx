'use client'

import type { FC, ReactNode } from 'react'

import {
	Button as HerouiButton,
	ButtonProps as HerouiButtonProps,
	PressEvent,
	Spinner,
} from '@heroui/react'

interface ButtonProps extends HerouiButtonProps {
	startContent?: ReactNode
	endContent?: ReactNode
	hoveredContent?: ReactNode
}

const Button: FC<ButtonProps> = ({
	children,
	startContent,
	endContent,
	hoveredContent,
	...props
}) => {
	return (
		<HerouiButton {...props}>
			{({ isPending, isHovered }) =>
				props?.isIconOnly ? (
					<>{isPending ? <Spinner color="current" size="sm" /> : children}</>
				) : (
					<>
						{isPending ? <Spinner color="current" size="sm" /> : startContent}
						{isHovered && hoveredContent ? hoveredContent : children}
						{endContent}
					</>
				)
			}
		</HerouiButton>
	)
}

export default Button
