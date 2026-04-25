export enum UIIconNames {
	LOGO = 'Logo',
}

type IconNameType = Lowercase<keyof typeof UIIconNames>

export type IconProps = {
	/**
	 *  default 24px
	 */
	size?: number
	className?: string
	title?: string
	name: IconNameType
}
