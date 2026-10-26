import type { Metadata } from 'next'
import { privacyPolicy } from '@/data/content'
import { siteConfig } from '@/config/site'
import { ContactLinks } from '@/components/contact-links'
import { ContentPage } from '@/components/content-page'

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: '/chinh-sach-bao-mat' },
  openGraph: {
    title: `${privacyPolicy.title} | ${siteConfig.name}`,
    description: privacyPolicy.description,
    url: '/chinh-sach-bao-mat',
    locale: 'vi_VN',
  },
}

export default function PrivacyPage() {
  return (
    <ContentPage eyebrow="PHÁP LÝ" title={privacyPolicy.title} description={privacyPolicy.description}>
      <p className="text-sm text-slate-500">Cập nhật: {privacyPolicy.updated}</p>
      <div className="mt-8 max-w-3xl space-y-8">
        {privacyPolicy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-base leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
      <div className="mt-10 max-w-3xl rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl">Liên hệ Gia Sư PML</h2>
        <p className="mt-3 text-base leading-8 text-slate-600">Ba nút bên dưới mở cuộc gọi, Zalo hoặc email. Không có biểu mẫu nào được gửi lên máy chủ.</p>
        <div className="mt-5">
          <ContactLinks />
        </div>
      </div>
    </ContentPage>
  )
}
