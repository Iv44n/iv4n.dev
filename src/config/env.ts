const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue

  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`)
  }

  return value
}

export const env = {
  NODE_ENV: getEnv('NODE_ENV', 'development'),
  RESEND_API_KEY: getEnv('RESEND_API_KEY'),
  EMAIL_SENDER: getEnv('EMAIL_SENDER', 'onboarding@resend.dev'),
  TO_EMAILS: getEnv('TO_EMAILS').split(',')
}
