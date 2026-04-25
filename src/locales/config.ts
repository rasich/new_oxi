import { enUS, ru as ruDateFns } from 'date-fns/locale'

import * as en from './dictionaries/en'
import * as ru from './dictionaries/ru'

const dictionaries = { en: en.default.pages, ru: ru.default.pages }
export const dictionaryLocaleForMetaData = (locale: string, key?: string) => {
	// @ts-ignore
	const page = dictionaries?.[locale] || dictionaries.en

	// @ts-ignore
	return key
		? (page?.[key] as (typeof en.default.pages)[keyof typeof en.default.pages])
		: (page as typeof en.default.pages)
}

export const importLocales = {
	en: () => import('./dictionaries/en'),
	ru: () => import('./dictionaries/ru'),
}

export const DEFAULT_LOCALE = 'en'

export const locales = ['en', 'ru'] as const
export type LocaleType = (typeof locales)[number]

export const isLocale = (locale?: string): locale is LocaleType =>
	locales.includes(locale as LocaleType)

export const fullLocales = [
	{ key: 'ru', title: 'Русский', localeFns: ruDateFns },
	{ key: 'en', title: 'English', localeFns: enUS },
]

export const stripLocaleFromPath = (pathname: string) => {
	if (!pathname) return '/'

	const segments = pathname.split('/').filter(Boolean)

	if (segments.length === 0) return '/'

	if (locales.includes(segments[0] as (typeof locales)[number])) {
		segments.shift()
	}

	return '/' + segments.join('/')
}

export const getLocaleFromPath = (pathname: string): LocaleType => {
	const segment = pathname.split('/').filter(Boolean)[0]

	return isLocale(segment) ? segment : DEFAULT_LOCALE
}
