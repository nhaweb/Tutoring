import type { Metadata } from 'next'
import { recruitment } from '@/data/content'
import { siteConfig } from '@/config/site'
import { ContactLinks } from '@/components/contact-links'
import { ContentPage } from '@/components/content-page'

export const metadata: Metadata = {
  title: recruitment.title,
  description: recruitment.description,
  alternates: { canonical: '/tuyen-dung-gia-su' },
  openGraph: {
    title: `${recruitment.title} | ${siteConfig.name}`,
    description: recruitment.description,
    url: '/tuyen-dung-gia-su',
    locale: 'vi_VN',
  },
}

export default function RecruitmentPage() {
  return (
    <ContentPage eyebrow="GIA SƯ PML" title={recruitment.title} description={recruitment.description}>
      <div className="max-w-3xl space-y-10">
        <p className="text-base leading-8 text-slate-600">{recruitment.intro}</p>
        <section>
          <h2 className="text-2xl">Gia Sư PML cần gì</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-slate-600">
            {recruitment.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl">Sàng lọc</h2>
          <p className="mt-3 text-base leading-8 text-slate-600">{recruitment.screening}</p>
        </section>
        <section>
          <h2 className="text-2xl">Khi đã hợp tác</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-slate-600">
            {recruitment.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">Cách ứng tuyển</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-8 text-slate-600">
            {recruitment.applySteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <div className="mt-6">
            <ContactLinks intent="apply" />
          </div>
        </section>
      </div>
    </ContentPage>
  )
}
