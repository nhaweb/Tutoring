'use client'

import * as React from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { submitConsultRequest } from '@/app/actions/consult'
import { defaultStudyMode, gradeOptions, studyModes, subjects } from '@/data/content'
import { consultFieldError, isValidVnPhone, type ContactDraft } from '@/lib/contact'
import { Button } from '@/components/ui/button'

const emptyDraft: ContactDraft = { name: '', phone: '', grade: '', subject: '', mode: defaultStudyMode }

function openMailto(href: string) {
  window.location.href = href
}

export function RequestForm() {
  const [draft, setDraft] = React.useState<ContactDraft>(emptyDraft)
  const [error, setError] = React.useState('')
  const [pending, setPending] = React.useState(false)
  const [handoff, setHandoff] = React.useState<{ mailto: string; email: string; opened: boolean } | null>(null)
  const panelRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (handoff) panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [handoff])

  function update(field: keyof ContactDraft, value: string) {
    setHandoff(null)
    setDraft((current) => ({ ...current, [field]: value }))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fieldError = consultFieldError(draft)
    if (fieldError) {
      setHandoff(null)
      setError(fieldError)
      return
    }

    const normalized = { ...draft, name: draft.name.trim(), phone: draft.phone.replace(/\s+/g, '') }
    setError('')
    setPending(true)
    try {
      const result = await submitConsultRequest(normalized)
      if (!result.ok) {
        setHandoff(null)
        setError(result.error)
        return
      }
      let opened = true
      try {
        openMailto(result.mailto)
      } catch {
        opened = false
      }
      setHandoff({ mailto: result.mailto, email: result.email, opened })
    } catch {
      setHandoff(null)
      setError('Không gửi được yêu cầu. Hãy thử lại hoặc gọi hotline.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="rounded-3xl bg-white p-5 shadow-2xl shadow-orange-900/10 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
          <Phone aria-hidden />
        </div>
        <div>
          <h3 className="text-lg font-extrabold">Nhận tư vấn miễn phí</h3>
          <p className="text-sm text-slate-500">Điền thông tin để mở email soạn sẵn. Gia Sư PML nhận yêu cầu khi bạn bấm Gửi trong thư.</p>
        </div>
      </div>
      <form onSubmit={onSubmit} noValidate className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
          Tên phụ huynh / học viên
          <input
            required
            name="name"
            autoComplete="name"
            value={draft.name}
            onChange={(event) => update('name', event.target.value)}
            placeholder="Nguyễn Văn A"
            className="field font-normal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
          Số điện thoại
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={draft.phone}
            onChange={(event) => update('phone', event.target.value)}
            placeholder="0909123456"
            aria-invalid={Boolean(error && !isValidVnPhone(draft.phone))}
            className="field font-normal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
          Lớp của học viên
          <select required name="grade" value={draft.grade} onChange={(event) => update('grade', event.target.value)} className="field font-normal">
            <option value="">Chọn cấp lớp</option>
            {gradeOptions.map((grade) => (
              <option key={grade}>{grade}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
          Môn học cần tìm
          <select required name="subject" value={draft.subject} onChange={(event) => update('subject', event.target.value)} className="field font-normal">
            <option value="">Chọn môn học</option>
            {subjects.map((subject) => (
              <option key={subject.name}>{subject.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slate-700 sm:col-span-2">
          Hình thức học
          <select required name="mode" value={draft.mode} onChange={(event) => update('mode', event.target.value)} className="field font-normal">
            {studyModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
          <span className="text-xs font-normal leading-5 text-slate-500">
            {draft.mode === defaultStudyMode
              ? 'Lời mời Microsoft Teams được gửi bên ngoài website. Trang này không có phòng học.'
              : 'Gia sư học trực tiếp tại nhà. Website không mở phòng học.'}
          </span>
        </label>
        <Button type="submit" size="lg" className="w-full sm:col-span-2" disabled={pending}>
          {pending ? 'Đang mở email…' : 'Gửi yêu cầu tư vấn'} <ArrowRight aria-hidden />
        </Button>
        {error ? (
          <p role="alert" className="text-sm text-red-600 sm:col-span-2">
            {error}
          </p>
        ) : null}
      </form>
      {handoff ? (
        <div ref={panelRef} role="status" className="mt-4 rounded-2xl bg-emerald-50 p-4 text-slate-700">
          <p className="font-bold text-slate-900">{handoff.opened ? 'Đã mở email soạn sẵn' : 'Email đã soạn sẵn'}</p>
          <p className="mt-1 text-sm leading-6">
            {handoff.opened
              ? `Thư gửi tới ${handoff.email} đã được mở với nội dung tư vấn.`
              : `Không tự mở được thư tới ${handoff.email}. Hãy bấm “Mở lại email”.`}{' '}
            Gia Sư PML chỉ nhận được yêu cầu sau khi bạn bấm Gửi trong ứng dụng thư. Website không lưu form.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Họ tên: {draft.name.trim()}</li>
            <li>Số điện thoại: {draft.phone.trim()}</li>
            <li>Lớp: {draft.grade}</li>
            <li>Môn học: {draft.subject}</li>
            <li>Hình thức học: {draft.mode}</li>
          </ul>
          <div className="mt-4">
            <Button href={handoff.mailto} size="lg" variant="dark" className="w-full sm:w-auto">
              <Mail aria-hidden /> Mở lại email
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
