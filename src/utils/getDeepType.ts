export type DeepType = {
	[key in string]: string | number | DeepType | DeepType[] | (<T extends string>(id: T) => string)
}
