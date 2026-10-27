'use server'

import { siteConfig } from '@/config/site'
import { consultFieldError, mailtoHref, type ContactDraft } from '@/lib/contact'

export type ConsultSubmitResult =
  | { ok: true; mailto: string; email: string }
  | { ok: false; error: string }

export async function submitConsultRequest(input: ContactDraft): Promise<ConsultSubmitResult> {
  const draft: ContactDraft = {
    name: input?.name?.trim() ?? '',
    phone: input?.phone?.replace(/\s+/g, '') ?? '',
    grade: input?.grade ?? '',
    subject: input?.subject ?? '',
    mode: input?.mode ?? '',
  }

  const error = consultFieldError(draft)
  if (error) return { ok: false, error }

  const email = siteConfig.email.trim()
  if (!email.includes('@')) {
    return { ok: false, error: 'Chưa có email nhận yêu cầu. Vui lòng gọi hotline.' }
  }

  const mailto = mailtoHref(draft, 'consult')
  if (!mailto.startsWith(`mailto:${email}?`)) {
    return { ok: false, error: 'Không tạo được thư tư vấn. Vui lòng thử lại hoặc gọi hotline.' }
  }

  console.info('[consult] mailto handoff ready')
  return { ok: true, mailto, email }
}
