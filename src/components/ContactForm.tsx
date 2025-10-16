'use client'

import { useActionState, useEffect, useState } from 'react'
import { type ActionState, sendMessage } from '@/app/actions'
import Button from './Button'
import InputField from './InputField'

const FORM_FIELDS = [
  { id: 'fullName', placeholder: 'Nombre completo', type: 'text' },
  { id: 'email', placeholder: 'Correo electrónico', type: 'email' },
  { id: 'subject', placeholder: 'Asunto', type: 'text' },
  { id: 'company', placeholder: 'Compañía', type: 'text' },
  {
    id: 'message',
    placeholder: 'Mensaje',
    type: 'textarea',
    rows: 5,
    colSpan: 'md:col-span-2'
  }
]

export default function ContactForm() {
  const [displayData, setDisplayData] = useState<ActionState | null>(null)

  const [state, action, isPending] = useActionState<ActionState, FormData>(
    async (_prev, formData) => {
      return await sendMessage(formData)
    },
    null
  )

  useEffect(() => {
    if (state) {
      setDisplayData(state)

      const timer = setTimeout(() => {
        setDisplayData(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [state])

  return (
    <form
      className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'
      action={action}
    >
      {FORM_FIELDS.map(({ id, placeholder, type, rows, colSpan }) => (
        <div key={id} className={`flex flex-col flex-1 ${colSpan || ''}`}>
          <label htmlFor={id} className='sr-only'>
            {placeholder}
          </label>
          <InputField
            id={id}
            type={type}
            placeholder={placeholder}
            rows={rows}
          />
        </div>
      ))}

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

      {displayData?.success && (
        <p className='text-emerald-300 text-xl'>{displayData.message}</p>
      )}

      {displayData?.error && (
        <p className='text-red-300 text-xl'>{displayData.error}</p>
      )}
    </form>
  )
}
