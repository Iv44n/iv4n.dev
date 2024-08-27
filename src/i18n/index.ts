import english from '@i18n/translations/en.json'
import spanish from '@i18n/translations/es.json'

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es'
}

export const getI18n = ({ currentLocale = 'es' }: { currentLocale?: string }) => {
    if (currentLocale === LANGUAGES.ENGLISH) {
        return { ...spanish, ...english }
    }
    return spanish
}
