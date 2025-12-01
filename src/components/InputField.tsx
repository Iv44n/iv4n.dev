type InputFieldProps = {
  id: string
  type?: string
  placeholder: string
  rows?: number
  required?: boolean
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}
const InputField = ({
  id,
  type = 'text',
  placeholder,
  rows,
  required = false,
  value,
  defaultValue,
  onChange
}: InputFieldProps) => {
  const baseClasses =
    'bg-transparent border-b border-foreground-alt focus:border-foreground focus:border-b-[1.5px] outline-none py-2 placeholder-foreground-alt transition-colors text-lg'

  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`${baseClasses} resize-none`}
      />
    )
  }

  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue}
      className={baseClasses}
    />
  )
}

export default InputField
