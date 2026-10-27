'use client'

import * as React from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { telHref } from '@/lib/contact'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="relative z-40 bg-white">
      <div className="hidden border-b border-orange-100 bg-[#fffaf5] sm:block">
        <div className="container flex min-h-11 flex-wrap items-center justify-between gap-x-5 gap-y-1 py-2 text-sm font-medium text-slate-600">
          <span>Học thử miễn phí · Ghép gia sư trong 24h</span>
          <span className="flex gap-5">
            <a href={telHref()}>☎ {siteConfig.hotline}</a>
            <a href={`mailto:${siteConfig.email}`}>✉ {siteConfig.email}</a>
          </span>
        </div>
      </div>
      <div className="container flex h-[76px] items-center justify-between gap-3">
        <a href="/" className="flex min-w-0 items-center gap-2 font-black text-slate-900">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl text-white">✦</span>
          <span className="truncate text-lg">
            Gia Sư <span className="text-orange-500">PML</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Chính">
          {siteConfig.nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold hover:text-orange-500">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Button href="/#dang-ky">
            Tìm gia sư ngay <ArrowRight aria-hidden />
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg lg:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav className="absolute left-0 right-0 top-full z-40 flex flex-col gap-1 border-t bg-white p-4 shadow-xl lg:hidden" aria-label="Di động">
          {siteConfig.nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold hover:bg-orange-50">
              {label}
            </a>
          ))}
          <Button href="/#dang-ky" className="mt-2 w-full" onClick={() => setOpen(false)}>
            Tìm gia sư ngay <ArrowRight aria-hidden />
          </Button>
        </nav>
      ) : null}
    </header>
  )
}
