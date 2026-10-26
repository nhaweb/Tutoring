import { MessageCircle, Phone } from 'lucide-react'
import { telHref, zaloHref } from '@/lib/contact'

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a
        href={telHref()}
        className="flex size-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:!text-white"
        aria-label="Gọi Gia Sư PML"
      >
        <Phone aria-hidden />
      </a>
      <a
        href={zaloHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:!text-white"
        aria-label="Nhắn Zalo Gia Sư PML"
      >
        <MessageCircle aria-hidden />
      </a>
    </div>
  )
}
