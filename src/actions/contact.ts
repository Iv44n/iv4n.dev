'use server'

import z from 'zod'
import { env } from '@/config/env'
import resend from '@/config/resend'
import getContactEmailContent from '@/utils/emailTemplate'
import {
  type ContactFormInput,
  ContactFormSchema,
  type FormState
} from '@/validations/contact'

const getToEmail = () =>
  env.NODE_ENV === 'development' ? 'delivered@resend.dev' : env.TO_EMAILS

function formDataToRecord(fd: FormData): Record<string, string> {
  const obj: Record<string, string> = {}
  for (const [key, value] of fd.entries()) {
    obj[key] = typeof value === 'string' ? value : ''
  }
  return obj
}

export async function sendMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = formDataToRecord(formData)

  const payload: ContactFormInput = {
    fullName: raw.fullName ?? '',
    email: raw.email ?? '',
    subject: raw.subject ?? '',
    company: raw.company ?? '',
    message: raw.message ?? ''
  }

  const parsed = ContactFormSchema.safeParse(raw)

  if (!parsed.success) {
    const flattenedErrors = z.flattenError(parsed.error)

    return {
      ...prevState,
      success: false,
      message: 'Error de validación',
      errors: flattenedErrors.fieldErrors,
      values: payload
    }
  }

  const { fullName, company, subject, email, message } = parsed.data

  const { error } = await resend.emails.send({
    from: `${fullName} <${env.EMAIL_SENDER}>`,
    to: getToEmail(),
    subject: `${company}: ${subject}`,
    html: getContactEmailContent({ fullName, email, message, subject, company })
  })

  if (error)
    return {
      ...prevState,
      success: false,
      message: 'Error al enviar el mensaje',
      errors: null,
      values: payload
    }

  return {
    ...prevState,
    success: true,
    message: 'Mensaje enviado con éxito',
    errors: null,
    values: {
      fullName: '',
      email: '',
      subject: '',
      company: '',
      message: ''
    }
  }
}
