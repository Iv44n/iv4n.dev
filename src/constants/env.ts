const getEnv = (key: string, defaultValue?: string) => {
  const value = import.meta.env[key] as string || defaultValue

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }

  return value
}

export const NODE_ENV = getEnv('NODE_ENV', 'development')
export const RESEND_API_KEY = getEnv('RESEND_API_KEY')
export const EMAIL_SENDER = getEnv('EMAIL_SENDER', 'onboarding@resend.dev')
