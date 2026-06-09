export const LANGUAGES = {
  es: 'Español',
  en: 'English'
} as const

export const DEFAULT_LANG = 'es'
export const SHOW_DEFAULT_LANG = false

export type Locale = keyof typeof LANGUAGES
