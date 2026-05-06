import { getValueByPath } from '../getValueByPath'

import { DEFAULT_LOCALE, dictionaryLocaleForMetaData } from '@/locales/config'

export const getTitleMetadata = ({
	locale,
	title,
}: {
	locale: string | undefined
	title: null | string
}) => {
	if (!title) return null

	return getValueByPath(dictionaryLocaleForMetaData(locale || DEFAULT_LOCALE), title) || title
}
