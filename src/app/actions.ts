'use server'

import { env } from '@/config/env'
import resend from '@/config/resend'
import getContactEmailContent from '@/utils/emailTemplate'

export type ActionState = {
  success: boolean
  message?: string
  error?: string
} | null

interface ContactFormData {
  fullName: string
  email: string
  company: string
  subject: string
  message: string
}

function getField(data: FormData, name: keyof ContactFormData): string {
  const value = data.get(name)
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Missing or invalid field: ${name}`)
  }
  return value
}

function parseContactForm(data: FormData): ContactFormData {
  return {
    fullName: getField(data, 'fullName'),
    email: getField(data, 'email'),
    company: getField(data, 'company'),
    subject: getField(data, 'subject'),
    message: getField(data, 'message')
  }
}

const getToEmail = () =>
  env.NODE_ENV === 'development' ? 'delivered@resend.dev' : env.TO_EMAILS

export async function sendMessage(formData: FormData): Promise<ActionState> {
  const { fullName, subject, message, company, email } =
    parseContactForm(formData)

  const { error } = await resend.emails.send({
    from: `${fullName} <${env.EMAIL_SENDER}>`,
    to: getToEmail(),
    subject: `${company}: ${subject}`,
    html: getContactEmailContent({ fullName, email, message, subject, company })
  })

  if (error) return { success: false, error: 'Error al enviar el mensaje' }

  return { success: true, message: 'Mensaje enviado con éxito' }
}
