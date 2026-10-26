import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'outline' | 'ghost' | 'dark'
type Size = 'default' | 'sm' | 'lg'

function buttonClass(variant: Variant, size: Size, className?: string) {
  return cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-center text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50',
    variant === 'default' && 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:!text-white',
    variant === 'outline' && 'border border-orange-200 bg-white text-orange-600 hover:bg-orange-50 hover:!text-orange-600',
    variant === 'dark' && 'bg-slate-900 text-white hover:bg-slate-800 hover:!text-white',
    variant === 'ghost' && 'text-slate-600 hover:bg-orange-50 hover:!text-orange-600',
    size === 'lg' && 'min-h-14 px-7 text-base',
    size === 'sm' && 'min-h-9 px-4 text-xs',
    className,
  )
}

type Shared = { variant?: Variant; size?: Size; className?: string }
type ButtonProps = Shared & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type LinkButtonProps = Shared & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string }

export function Button({ variant = 'default', size = 'default', className, ...props }: ButtonProps | LinkButtonProps) {
  const classes = buttonClass(variant, size, className)
  if ('href' in props && props.href) {
    const { href, ...anchor } = props
    if (href.startsWith('/') || href.startsWith('#')) {
      return <Link href={href} className={classes} {...anchor} />
    }
    return <a href={href} className={classes} {...anchor} />
  }
  return <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
}
