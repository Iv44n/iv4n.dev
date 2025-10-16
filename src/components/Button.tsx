import Link from 'next/link'
import type { ComponentProps, ElementType, ReactNode } from 'react'

type ButtonOwnProps<E extends ElementType> = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  as?: E
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps<E>>

const baseClasses =
  'group relative inline-flex items-center gap-2 rounded-full px-6 py-2 overflow-hidden transition-all duration-300 hover:scale-105'

const variants = {
  primary:
    'text-foreground font-medium border border-foreground hover:shadow-lg hover:shadow-foreground/10',
  secondary: 'text-muted-foreground hover:text-foreground'
}

export default function Button<E extends ElementType = 'button'>({
  children,
  variant = 'primary',
  as,
  ...props
}: ButtonProps<E>) {
  const Component = as || 'button'

  const className = `${baseClasses} ${variants[variant]} ${props.className || ''}`

  if (Component === 'a') {
    return (
      <Link {...props} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <Component {...props} className={className}>
      {children}
    </Component>
  )
}
