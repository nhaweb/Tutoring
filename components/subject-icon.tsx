import {
  Atom,
  BookOpenText,
  Calculator,
  FlaskConical,
  Languages,
  Music2,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const subjectIcons: Record<string, LucideIcon> = {
  Toán: Calculator,
  'Ngữ văn': BookOpenText,
  'Tiếng Anh': Languages,
  'Vật lý': Atom,
  'Hóa học': FlaskConical,
  'Piano & Vẽ': Music2,
}

export function SubjectIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = subjectIcons[name] ?? BookOpenText
  return <Icon className={cn('size-4 shrink-0', className)} aria-hidden />
}
