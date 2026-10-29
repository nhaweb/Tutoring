'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { gradeOptions, studyModes, subjects } from '@/data/content'
import { isValidVnPhone, type ContactDraft } from '@/lib/contact'
import { Button } from '@/components/ui/button'
import { SubjectIcon } from '@/components/subject-icon'
import { cn } from '@/lib/utils'

const emptyDraft: ContactDraft = { name: '', phone: '', grade: '', subject: '', mode: studyModes[0] }

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition',
        active
          ? 'border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/25'
          : 'border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50',
      )}
    >
      {children}
    </button>
  )
}

function RequestFormInner() {
  const searchParams = useSearchParams()
  const [step, setStep] = React.useState<1 | 2>(1)
  const [draft, setDraft] = React.useState<ContactDraft>(emptyDraft)
  const [error, setError] = React.useState('')
  const [successOpen, setSuccessOpen] = React.useState(false)
  const successTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    return () => {
      if (successTimer.current) clearTimeout(successTimer.current)
    }
  }, [])

  React.useEffect(() => {
    const mon = searchParams.get('mon')?.trim()
    if (!mon) return
    if (!subjects.some((subject) => subject.name === mon)) return
    setDraft((current) => (current.subject === mon ? current : { ...current, subject: mon }))
    setStep(1)
    setError('')
  }, [searchParams])

  function update(field: keyof ContactDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }))
    setError('')
  }

  function goNext() {
    if (!draft.grade) {
      setError('Chọn lớp của học viên.')
      return
    }
    if (!draft.subject) {
      setError('Chọn môn cần tìm.')
      return
    }
    if (!draft.mode) {
      setError('Chọn hình thức học.')
      return
    }
    setError('')
    setStep(2)
  }

  function closeSuccess() {
    setSuccessOpen(false)
    setDraft(emptyDraft)
    setStep(1)
    setError('')
    if (successTimer.current) {
      clearTimeout(successTimer.current)
      successTimer.current = null
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!draft.name.trim()) {
      setError('Nhập tên phụ huynh hoặc học viên.')
      return
    }
    if (!isValidVnPhone(draft.phone)) {
      setError('Số điện thoại chưa hợp lệ, ví dụ 0908985844.')
      return
    }
    setError('')
    setSuccessOpen(true)
    if (successTimer.current) clearTimeout(successTimer.current)
    successTimer.current = setTimeout(() => closeSuccess(), 5000)
  }

  return (
    <>
      <div className="w-full overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_24px_60px_-28px_rgba(212,120,40,0.5)]">
        <div className="flex flex-col gap-4 border-b border-orange-50 bg-gradient-to-r from-orange-50 via-white to-amber-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-md shadow-orange-500/30">
              <Sparkles className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-lg font-bold text-slate-900">Tư vấn miễn phí</p>
              <p className="text-sm text-slate-500">Khoảng 30 giây</p>
            </div>
          </div>
          <div className="flex items-center gap-3" aria-label={`Bước ${step} / 2`}>
            <span className="hidden text-sm font-semibold text-slate-500 sm:inline">Bước {step}/2</span>
            <span className={cn('h-2.5 w-14 rounded-full transition', step >= 1 ? 'bg-orange-500' : 'bg-slate-200')} />
            <span className={cn('h-2.5 w-14 rounded-full transition', step >= 2 ? 'bg-orange-500' : 'bg-slate-200')} />
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="p-5 sm:p-8">
          {step === 1 ? (
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">1 · Nhu cầu học</p>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                <div>
                  <label className="mb-2.5 block text-sm font-semibold text-slate-700">Lớp</label>
                  <div className="flex flex-wrap gap-2.5">
                    {gradeOptions.map((grade) => (
                      <Chip key={grade} active={draft.grade === grade} onClick={() => update('grade', grade)}>
                        {grade}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block text-sm font-semibold text-slate-700">Hình thức</label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {studyModes.map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => update('mode', mode)}
                        className={cn(
                          'rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition',
                          draft.mode === mode
                            ? 'border-orange-500 bg-orange-50 text-orange-800 ring-2 ring-orange-500/40'
                            : 'border-slate-200 bg-slate-50/80 text-slate-700 hover:border-orange-200',
                        )}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2.5 block text-sm font-semibold text-slate-700">Môn học</label>
                <div className="flex flex-wrap gap-2.5">
                  {subjects.map((subject) => (
                    <Chip
                      key={subject.name}
                      active={draft.subject === subject.name}
                      onClick={() => update('subject', subject.name)}
                    >
                      <span
                        className={cn(
                          'flex size-6 items-center justify-center rounded-full',
                          draft.subject === subject.name ? 'bg-white/20 text-white' : 'bg-orange-50 text-orange-600',
                        )}
                      >
                        <SubjectIcon name={subject.name} className="size-3.5" />
                      </span>
                      {subject.name}
                    </Chip>
                  ))}
                </div>
              </div>

              {error ? (
                <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm font-semibold text-red-700">
                  {error}
                </p>
              ) : null}

              <div className="flex justify-end pt-1">
                <Button type="button" size="lg" onClick={goNext} className="min-w-[200px] sm:min-w-[240px]">
                  Tiếp theo <ArrowRight className="size-5" aria-hidden />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <button
                type="button"
                onClick={() => {
                  setStep(1)
                  setError('')
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                <ArrowLeft className="size-4" aria-hidden /> Quay lại nhu cầu
              </button>

              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">2 · Liên hệ</p>

              <div className="flex flex-wrap gap-2.5">
                {[draft.grade, draft.subject, draft.mode].filter(Boolean).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3.5 py-1.5 text-sm font-semibold text-orange-700"
                  >
                    {subjects.some((s) => s.name === tag) ? <SubjectIcon name={tag} className="size-3.5" /> : null}
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
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
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Số điện thoại
                  <input
                    required
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={draft.phone}
                    onChange={(event) => update('phone', event.target.value)}
                    placeholder="0908985844"
                    aria-invalid={Boolean(error && !isValidVnPhone(draft.phone))}
                    className="field font-normal"
                  />
                </label>
              </div>

              {error ? (
                <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm font-semibold text-red-700">
                  {error}
                </p>
              ) : null}

              <div className="flex justify-end pt-1">
                <Button type="submit" size="lg" className="min-w-[200px] sm:min-w-[240px]">
                  Gửi yêu cầu tư vấn <ArrowRight className="size-5" aria-hidden />
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>

      {successOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-[2px]">
          <div
            role="alertdialog"
            aria-modal="true"
            aria-label="Đăng ký tư vấn thành công"
            className="w-full max-w-md rounded-3xl border border-emerald-100 bg-white p-6 shadow-2xl shadow-slate-900/20"
          >
            <div className="flex flex-col items-center text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="size-8" aria-hidden />
              </span>
              <p className="mt-4 text-lg font-bold text-slate-900">Đăng ký tư vấn thành công!</p>
              <p className="mt-1 text-sm text-slate-500">Chúng tôi sẽ liên hệ sớm với bạn.</p>
            </div>
            <div className="mt-5 space-y-2.5 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5 text-left text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">Họ tên</span>
                <span className="font-semibold text-slate-900">{draft.name}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">Số điện thoại</span>
                <span className="font-semibold text-slate-900">{draft.phone}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">Lớp</span>
                <span className="font-semibold text-slate-900">{draft.grade}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">Môn học</span>
                <span className="font-semibold text-slate-900">{draft.subject}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">Hình thức</span>
                <span className="max-w-[60%] text-right font-semibold text-slate-900">{draft.mode}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeSuccess}
              className="mt-5 w-full rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Đóng
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export function RequestForm() {
  return (
    <React.Suspense
      fallback={
        <div className="w-full rounded-3xl border border-orange-100 bg-white p-8 text-sm text-slate-500 shadow-sm">
          Đang tải form tư vấn…
        </div>
      }
    >
      <RequestFormInner />
    </React.Suspense>
  )
}
