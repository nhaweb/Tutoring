import { ChevronDown } from 'lucide-react'

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="divide-y divide-slate-200">{children}</div>
}

export function AccordionItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left font-bold text-slate-800">
        <span>{question}</span>
        <ChevronDown className="chevron size-5 shrink-0 transition" aria-hidden />
      </summary>
      <div className="pb-5 pr-8 leading-7 text-slate-600">{children}</div>
    </details>
  )
}
