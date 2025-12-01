import { z } from 'zod'

export const ContactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre es demasiado largo'),

  email: z
    .email('Por favor ingresa un correo electrónico válido')
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

export type ContactFormInput = z.infer<typeof ContactFormSchema>

export type FormState = {
  success: boolean
  message: string
  errors: {
    fullName?: string[] | undefined
    email?: string[] | undefined
    subject?: string[] | undefined
    company?: string[] | undefined
    message?: string[] | undefined
  } | null
  values: {
    fullName: string
    email: string
    subject: string
    company: string
    message: string
  }
}
