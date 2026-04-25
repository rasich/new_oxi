/**
 * @param tScoped
 *
 * value: '{count} ...'
 */
export const getNumeralTitle = ({ count, tScoped }: { count: number; tScoped: any }) => {
	if (typeof count === 'undefined' || typeof tScoped === 'undefined') return null

	if (count % 10 === 1 && count % 100 !== 11) return tScoped(`one`, { count })

	if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 > 20))
		return tScoped(`couple`, { count })

	return tScoped(`many`, { count })
}
