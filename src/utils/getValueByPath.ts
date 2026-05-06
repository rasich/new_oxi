export const getValueByPath = (obj: any, keyString: string) => {
	if (!keyString) return null

	const keys = keyString.split('.')
	let result = obj

	for (const key of keys) {
		if (result && Object.prototype.hasOwnProperty.call(result, key)) {
			result = result[key]
		} else {
			return undefined
		}
	}

	return result
}
