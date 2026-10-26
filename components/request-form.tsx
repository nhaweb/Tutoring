'use client'

import * as React from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { gradeOptions, studyModes, subjects } from '@/data/content'
import { isValidVnPhone, type ContactDraft } from '@/lib/contact'
import { Button } from '@/components/ui/button'
import { ContactLinks } from '@/components/contact-links'

const emptyDraft: ContactDraft = { name: '', phone: '', grade: '', subject: '', mode: '' }

export function RequestForm() {
  const [draft, setDraft] = React.useState<ContactDraft>(emptyDraft)
  const [error, setError] = React.useState('')
  const [ready, setReady] = React.useState(false)
  const panelRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ready) panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [ready])

  function update(field: keyof ContactDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }))
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!draft.name.trim()) {
      setReady(false)
      setError('Vui lòng nhập tên phụ huynh hoặc học viên.')
      return
    }
    if (!isValidVnPhone(draft.phone)) {
      setReady(false)
      setError('Vui lòng nhập số điện thoại hợp lệ, ví dụ 0909123456.')
      return
    }
    if (!draft.grade) {
      setReady(false)
      setError('Vui lòng chọn lớp của học viên.')
      return
    }
    if (!draft.subject) {
      setReady(false)
      setError('Vui lòng chọn môn học.')
      return
    }
    if (!draft.mode) {
      setReady(false)
      setError('Vui lòng chọn hình thức học.')
      return
    }
    setError('')
    setReady(true)
  }

  return (
    <div className="rounded-3xl bg-white p-5 shadow-2xl shadow-orange-900/10 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
          <Phone aria-hidden />
        </div>
        <div>
          <h3 className="text-lg font-extrabold">Nhận tư vấn miễn phí</h3>
          <p className="text-sm text-slate-500">Điền thông tin, rồi gọi, nhắn Zalo hoặc gửi email. Website không lưu yêu cầu.</p>
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
            <option value="">Chọn hình thức</option>
            {studyModes.map((mode) => (
              <option key={mode}>{mode}</option>
            ))}
          </select>
        </label>
        <Button type="submit" size="lg" className="w-full sm:col-span-2">
          Xem cách liên hệ <ArrowRight aria-hidden />
        </Button>
        {error ? (
          <p role="alert" className="text-sm text-red-600 sm:col-span-2">
            {error}
          </p>
        ) : null}
      </form>
      {ready ? (
        <div ref={panelRef} className="mt-4 rounded-2xl bg-orange-50 p-4 text-slate-700">
          <p className="font-bold text-slate-900">Chưa gửi đi — website không lưu form.</p>
          <p className="mt-1 text-sm leading-6">Hãy gọi, nhắn Zalo hoặc mở email. Email sẽ soạn sẵn nội dung bên dưới. Khi nhắn Zalo, hãy gửi kèm các dòng này.</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Họ tên: {draft.name.trim()}</li>
            <li>Số điện thoại: {draft.phone.trim()}</li>
            <li>Lớp: {draft.grade}</li>
            <li>Môn học: {draft.subject}</li>
            <li>Hình thức học: {draft.mode}</li>
          </ul>
          <div className="mt-4">
            <ContactLinks draft={draft} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
