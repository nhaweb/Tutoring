import { siteConfig } from '@/config/site'
import { gradeOptions, studyModes, subjects } from '@/data/content'

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

const gradeList: readonly string[] = gradeOptions
const modeList: readonly string[] = studyModes

export function consultFieldError(draft: Partial<ContactDraft> | null | undefined) {
  const name = draft?.name?.trim() ?? ''
  const phone = draft?.phone ?? ''
  const grade = draft?.grade ?? ''
  const subject = draft?.subject ?? ''
  const mode = draft?.mode ?? ''
  if (!name) return 'Vui lòng nhập tên phụ huynh hoặc học viên.'
  if (!isValidVnPhone(phone)) return 'Vui lòng nhập số điện thoại hợp lệ, ví dụ 0909123456.'
  if (!gradeList.includes(grade)) return 'Vui lòng chọn lớp của học viên.'
  if (!subjects.some((item) => item.name === subject)) return 'Vui lòng chọn môn học.'
  if (!modeList.includes(mode)) return 'Vui lòng chọn hình thức học.'
  return null
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
          'Hình thức: Tại nhà / Online 1-1 qua Microsoft Teams (lời mời ngoài website)',
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
