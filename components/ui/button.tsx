import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'ghost' | 'dark'; size?: 'default' | 'sm' | 'lg' }
export function Button({ className, variant='default', size='default', ...props }: ButtonProps) {
  return <button className={cn('inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:opacity-50', variant==='default' && 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600', variant==='outline' && 'border border-orange-200 bg-white text-orange-600 hover:bg-orange-50', variant==='dark' && 'bg-slate-900 text-white hover:bg-slate-800', variant==='ghost' && 'text-slate-600 hover:bg-orange-50 hover:text-orange-600', size==='lg' && 'min-h-14 px-7 text-base', size==='sm' && 'min-h-9 px-4 text-xs', className)} {...props} />
}
