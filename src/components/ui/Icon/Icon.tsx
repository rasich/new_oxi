import { type FC } from 'react'

import { cn } from '@/utils/cn'

import styles from './Icon.module.css'

import { IconProps, UIIconNames } from './Icon.types'
import * as IconsData from './data'

export const Icon: FC<IconProps> = ({ name, size, className, title }) => {
	const options = {
		icons: IconsData,
		name: name,
		enum: UIIconNames,
	}

	if (!options.icons || !options.name || !options.enum) return null

	const currentName = options.name.toUpperCase()
	// @ts-ignore
	const currentEnum = options.enum?.[currentName]

	if (!currentEnum) return currentName

	// @ts-ignore
	const IconComponent = options.icons?.[currentEnum]

	if (!IconComponent) return null

	return (
		<div
			className={cn(styles.icon, className)}
			style={!size ? { height: 24 } : { height: size }}
			title={title}
		>
			<IconComponent />
		</div>
	)
}
