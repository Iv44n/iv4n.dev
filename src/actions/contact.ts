import { ActionError, defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import resend from '../config/resend'
import { EMAIL_SENDER, NODE_ENV } from '../constants/env'
import { getContactEmailTemplate } from '../utils/emailTemplates'

const toEmails = ['todelanoivan13@gmail.com', 'ivandev2oo6@gmail.com']

const getEmail = () => (NODE_ENV === 'development' ? 'onboarding@resend.dev' : EMAIL_SENDER)
const getToEmail = () => (NODE_ENV === 'development' ? 'delivered@resend.dev' : toEmails)

export const sendContactMessage = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email format'),
    subject: z.string().min(5, 'Subject is required'),
    message: z.string().min(5, 'Message is required')
  }),
  handler: async ({ name, email, subject, message }) => {
    const { error } = await resend.emails.send({
      from: `${name} <${getEmail()}>`,
      to: getToEmail(),
      subject,
      html: getContactEmailTemplate(name, email, subject, message)
    })

    if (error) throw new ActionError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Error al enviar el correo'
    })

    return { success: true, message: 'Correo enviado con éxito' }
  }
})
