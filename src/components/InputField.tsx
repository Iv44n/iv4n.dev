type InputFieldProps = {
  id: string
  type?: string
  placeholder: string
  rows?: number
}
const InputField = ({
  id,
  type = 'text',
  placeholder,
  rows
}: InputFieldProps) => {
  const baseClasses =
    'bg-transparent border-b border-gray-600 focus:border-emerald-400 outline-none py-3 placeholder-gray-500 transition-colors text-xl'

  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        className={`${baseClasses} resize-none`}
        required={id === 'fullName' || id === 'email' || id === 'message'}
      />
    )
  }

  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className={baseClasses}
      required={id === 'fullName' || id === 'email'}
    />
  )
}

export default InputField
