import { EMAIL_SENDER, NODE_ENV, TO_EMAILS } from 'astro:env/server'
import { ActionError, defineAction } from 'astro:actions'
import resend from '../config/resend'
import getContactEmailContent from '../config/email-template'
import { z } from 'astro/zod'

const getToEmail = () => NODE_ENV === 'development' ? 'delivered@resend.dev' : TO_EMAILS.split(',')

const ContactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre es demasiado largo'),

  email: z
    .email()
    .max(150, 'El correo es demasiado largo'),

  subject: z
    .string()
    .trim()
    .min(3, 'El asunto no puede estar vacío')
    .max(150, 'El asunto es demasiado largo'),

  company: z
    .string()
    .trim()
    .min(1, 'El nombre de la compañía es requerida')
    .max(100, 'El nombre de la compañía es demasiado largo'),

  message: z
    .string()
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(3000, 'El mensaje es demasiado largo')
})

export const server = {
  sendMessage: defineAction({
    input: ContactFormSchema,
    handler: async ({ fullName, company, subject, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: `${fullName} <${EMAIL_SENDER}>`,
        to: getToEmail(),
        subject: `${company}: ${subject}`,
        html: getContactEmailContent({ fullName, email, message, subject, company })
      })

      if(error){
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message
        })
      }

      return data
    }
  })
}
