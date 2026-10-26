import type { Metadata } from 'next'
import { termsOfService } from '@/data/content'
import { siteConfig } from '@/config/site'
import { ContactLinks } from '@/components/contact-links'
import { ContentPage } from '@/components/content-page'

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.description,
  alternates: { canonical: '/dieu-khoan' },
  openGraph: {
    title: `${termsOfService.title} | ${siteConfig.name}`,
    description: termsOfService.description,
    url: '/dieu-khoan',
    locale: 'vi_VN',
  },
}

export default function TermsPage() {
  return (
    <ContentPage eyebrow="PHÁP LÝ" title={termsOfService.title} description={termsOfService.description}>
      <p className="text-sm text-slate-500">Cập nhật: {termsOfService.updated}</p>
      <div className="mt-8 max-w-3xl space-y-8">
        {termsOfService.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-base leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
            {section.heading === 'Bảo mật' ? (
              <p className="mt-3 text-base leading-8">
                <a href="/chinh-sach-bao-mat" className="font-bold text-orange-600">
                  Đọc chính sách bảo mật
                </a>
              </p>
            ) : null}
          </section>
        ))}
      </div>
      <div className="mt-10 max-w-3xl rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl">Cần tư vấn theo điều khoản này?</h2>
        <p className="mt-3 text-base leading-8 text-slate-600">Gọi, nhắn Zalo hoặc gửi email. Câu trả lời trên trang này khớp mục hỏi đáp ở trang chủ.</p>
        <div className="mt-5">
          <ContactLinks />
        </div>
      </div>
    </ContentPage>
  )
}
