import { Mail, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { mailtoHref, telHref, zaloHref, type ContactDraft, type ContactIntent } from '@/lib/contact'
import { Button } from '@/components/ui/button'

export function ContactLinks({
  draft,
  intent = 'consult',
}: {
  draft?: Partial<ContactDraft>
  intent?: ContactIntent
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Button href={telHref()} size="lg" className="w-full">
        <Phone aria-hidden /> Gọi {siteConfig.hotline}
      </Button>
      <Button href={zaloHref()} target="_blank" rel="noopener noreferrer" size="lg" variant="outline" className="w-full">
        <MessageCircle aria-hidden /> Nhắn Zalo
      </Button>
      <Button href={mailtoHref(draft, intent)} size="lg" variant="dark" className="w-full">
        <Mail aria-hidden /> Gửi email
      </Button>
    </div>
  )
}
