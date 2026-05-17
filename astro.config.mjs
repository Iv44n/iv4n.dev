// @ts-check
import { defineConfig, envField } from 'astro/config'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://iv4n.dev',
  output: 'server',

  env: {
    validateSecrets: true,
    schema: {
      NODE_ENV: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        default: 'development'
      }),
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret'
      }),
      EMAIL_SENDER: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: 'onboarding@resend.dev'
      }),
      TO_EMAILS: envField.string({
        context: 'server',
        access: 'secret'
      })
    }
  },

  adapter: vercel()
})
