import { LANGUAGES, DEFAULT_LANG, SHOW_DEFAULT_LANG } from './config'
import { en } from './locales/en'
import { es } from './locales/es'

export const languages = LANGUAGES
export const defaultLang = DEFAULT_LANG
export const showDefaultLang = SHOW_DEFAULT_LANG

export const ui = {
  es,
  en
} as const
