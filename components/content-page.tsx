import type { ReactNode } from 'react'

export function ContentPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <main className="bg-[#fffaf5] text-slate-700">
      <section className="border-b border-orange-100 bg-white">
        <div className="container py-12 sm:py-16">
          <p className="font-bold text-orange-600">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3.1rem)]">{title}</h1>
          {description ? <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{description}</p> : null}
        </div>
      </section>
      <div className="container py-12 sm:py-16">{children}</div>
    </main>
  )
}
