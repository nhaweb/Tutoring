import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Star } from 'lucide-react'
import { getTutor, tutors } from '@/data/content'
import { siteConfig } from '@/config/site'
import { telHref } from '@/lib/contact'
import { Button } from '@/components/ui/button'

export const dynamicParams = false

export function generateStaticParams() {
  return tutors.map((tutor) => ({ slug: tutor.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tutor = getTutor(slug)
  if (!tutor) return { title: 'Không tìm thấy gia sư' }
  const description = `${tutor.name} dạy ${tutor.subject} tại Gia Sư PML. ${tutor.school}. ${tutor.experience}. Học phí từ ${tutor.price} mỗi buổi.`
  return {
    title: `${tutor.name} — ${tutor.subject}`,
    description,
    alternates: { canonical: `/gia-su/${tutor.slug}` },
    openGraph: {
      title: `${tutor.name} — ${tutor.subject} | ${siteConfig.name}`,
      description,
      url: `/gia-su/${tutor.slug}`,
      locale: 'vi_VN',
      images: [{ url: tutor.image, alt: tutor.name }],
    },
  }
}

export default async function TutorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tutor = getTutor(slug)
  if (!tutor) notFound()

  return (
    <main className="bg-[#fffaf5] text-slate-700">
      <div className="container py-10 sm:py-14">
        <a href="/#gia-su" className="text-sm font-bold text-orange-600">
          ← Đội ngũ gia sư
        </a>
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl bg-white p-6 text-center shadow-sm">
            <img src={tutor.image} alt={tutor.name} className="mx-auto size-40 rounded-full object-cover" />
            <p className="mt-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-600">{tutor.tag}</p>
            <p className="mt-4 text-3xl font-black text-slate-900">{tutor.price}</p>
            <p className="text-sm text-slate-500">mỗi buổi</p>
            <p className="mt-3 flex items-center justify-center gap-1 text-sm font-bold">
              <Star className="size-4 fill-yellow-400 text-yellow-400" aria-hidden />
              {tutor.rating}/5
            </p>
          </aside>
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h1 className="text-[clamp(2rem,4vw,3rem)]">{tutor.name}</h1>
            <p className="mt-2 text-lg font-bold text-orange-600">{tutor.subject}</p>
            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-bold text-slate-900">Trường / chứng chỉ</dt>
                <dd className="mt-1 text-slate-600">{tutor.school}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Kinh nghiệm</dt>
                <dd className="mt-1 text-slate-600">{tutor.experience}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-bold text-slate-900">Lịch rảnh</dt>
                <dd className="mt-1 text-slate-600">{tutor.schedule}</dd>
              </div>
            </dl>
            <h2 className="mt-8 text-2xl">Giới thiệu</h2>
            <p className="mt-3 text-base leading-8 text-slate-600">{tutor.bio}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={telHref()} size="lg">
                Gọi {siteConfig.hotline}
              </Button>
              <Button href="/#dang-ky" size="lg" variant="outline">
                Đăng ký tư vấn
              </Button>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
