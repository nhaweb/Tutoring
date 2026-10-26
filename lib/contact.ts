import { siteConfig } from '@/config/site'

export type ContactDraft = {
  name: string
  phone: string
  grade: string
  subject: string
  mode: string
}

export type ContactIntent = 'consult' | 'apply'

export function hotlineDigits(hotline = siteConfig.hotline) {
  return hotline.replace(/\s+/g, '')
}

export function telHref() {
  return `tel:${hotlineDigits()}`
}

export function zaloHref() {
  return `https://zalo.me/${hotlineDigits()}`
}

export function isValidVnPhone(value: string) {
  return /^0\d{9,10}$/.test(value.replace(/\s+/g, ''))
}

export function mailtoHref(draft?: Partial<ContactDraft>, intent: ContactIntent = 'consult') {
  const subject =
    intent === 'apply'
      ? 'Ứng tuyển gia sư — Gia Sư PML'
      : draft?.name
        ? `Đăng ký tìm gia sư — ${draft.name}`
        : 'Đăng ký tìm gia sư — Gia Sư PML'

  const lines =
    intent === 'apply'
      ? [
          'Xin chào Gia Sư PML,',
          '',
          'Tôi muốn ứng tuyển gia sư.',
          'Họ tên:',
          'Môn có thể dạy:',
          'Khu vực:',
          'Số điện thoại:',
          'Hình thức: Tại nhà / Online 1-1',
        ]
      : [
          'Xin chào Gia Sư PML,',
          '',
          'Tôi muốn được tư vấn tìm gia sư.',
          `Họ tên: ${draft?.name?.trim() || ''}`,
          `Số điện thoại: ${draft?.phone?.trim() || ''}`,
          `Lớp: ${draft?.grade || ''}`,
          `Môn học: ${draft?.subject || ''}`,
          `Hình thức học: ${draft?.mode || ''}`,
        ]

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}
