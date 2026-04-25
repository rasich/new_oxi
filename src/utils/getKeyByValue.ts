export function getKeyByValue<T extends Record<string, string>>(
	obj: T,
	value: string
): keyof T | undefined {
	return Object.entries(obj).find(([_, v]) => v === value)?.[0] as keyof T | undefined
}
