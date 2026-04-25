import { createI18nServer } from 'next-international/server'

import { importLocales } from './config'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer(importLocales)
