import { useActionState } from 'react'
import { actions } from '@/actions'
import type { FormState } from '@/validations/contact'
import Button from './Button'
import { FormError } from './FormError'
import InputField from './InputField'

const FORM_FIELDS = [
  { id: 'fullName', placeholder: 'Nombre completo', type: 'text' },
  { id: 'email', placeholder: 'Correo electrónico', type: 'email' },
  { id: 'subject', placeholder: 'Asunto', type: 'text' },
  { id: 'company', placeholder: 'Compañía', type: 'text' }
] as const

const INITIAL_STATE: FormState = {
  success: false,
  message: '',
  errors: null,
  values: {
    fullName: '',
    email: '',
    subject: '',
    company: '',
    message: ''
  }
}

export default function ContactForm() {
  const [formState, formAction, isPending] = useActionState(
    actions.contact.sendMessage,
    INITIAL_STATE
  )

  return (
    <form
      className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'
      action={formAction}
    >
      {FORM_FIELDS.map(({ id, placeholder, type }) => (
        <div key={id} className='flex flex-col flex-1'>
          <label htmlFor={id} className='sr-only'>
            {placeholder}
          </label>
          <InputField
            id={id}
            type={type}
            placeholder={placeholder}
            defaultValue={formState.values?.[id]}
            onChange={() => {}}
          />
          <FormError error={formState.errors?.[id]} />
        </div>
      ))}
      <div className='flex flex-col flex-1 md:col-span-2'>
        <label htmlFor='message' className='sr-only'>
          Mensaje
        </label>
        <InputField
          id='message'
          type='textarea'
          placeholder='Mensaje'
          rows={5}
          defaultValue={formState.values.message}
          onChange={() => {}}
        />
        <FormError error={formState.errors?.message} />
      </div>

      <div className='md:col-span-2 flex justify-start mt-6 text-lg'>
        <Button
          type='submit'
          variant='primary'
          disabled={isPending}
          className='disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:scale-100'
        >
          {isPending ? 'Enviando...' : 'Enviar'}
        </Button>
      </div>

      {formState.success && (
        <p className='text-emerald-300 text-xl'>{formState.message}</p>
      )}
    </form>
  )
}
