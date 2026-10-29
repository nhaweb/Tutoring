import { siteConfig } from '@/config/site'
import { telHref } from '@/lib/contact'

const explore = [
  ['Về chúng tôi', '/#gioi-thieu'],
  ['Môn học', '/#mon-hoc'],
  ['Đội ngũ gia sư', '/#gia-su'],
  ['Học phí', '/#hoc-phi'],
] as const

const support = [
  ['Chính sách bảo mật', '/chinh-sach-bao-mat'],
  ['Điều khoản dịch vụ', '/dieu-khoan'],
  ['Tuyển dụng gia sư', '/tuyen-dung-gia-su'],
  ['Câu hỏi thường gặp', '/#faq'],
] as const

function SocialIcon({ name }: { name: string }) {
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.91h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93Z" />
      </svg>
    )
  }
  if (name === 'YouTube') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.75 15.57V8.43L15.82 12l-6.07 3.57Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .56.04.82.1v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.5 21.64a6.34 6.34 0 0 0 6.34-6.34V8.77a8.2 8.2 0 0 0 4.79 1.53V6.85a4.85 4.85 0 0 1-1.04-.16Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer id="lien-he" className="bg-slate-950 py-14 text-slate-300">
      <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <a href="/" className="flex items-center gap-2 text-lg font-black text-white hover:!text-white">
            <span className="flex size-9 items-center justify-center rounded-xl bg-orange-500">✦</span>
            Gia Sư <span className="text-orange-500">PML</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-7">
            Kết nối gia đình với những người thầy tận tâm, để mỗi ngày học là một ngày tiến bộ.
          </p>
          <ul className="mt-5 flex items-center gap-3" aria-label="Mạng xã hội">
            {siteConfig.social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500 hover:text-white"
                  aria-label={item.name}
                >
                  <SocialIcon name={item.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-extrabold text-white">Khám phá</p>
          <div className="flex flex-col gap-3 text-sm">
            {explore.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-extrabold text-white">Hỗ trợ</p>
          <div className="flex flex-col gap-3 text-sm">
            {support.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-extrabold text-white">Liên hệ</p>
          <p className="text-sm leading-7">
            Hotline:{' '}
            <a href={telHref()} className="font-bold text-orange-400 hover:!text-orange-300">
              {siteConfig.hotline}
            </a>
            <br />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            {siteConfig.address}
          </p>
        </div>
      </div>
      <div className="container mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
        © 2026 {siteConfig.name}. Bảo lưu mọi quyền.
      </div>
    </footer>
  )
}
