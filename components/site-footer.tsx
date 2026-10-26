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

export function SiteFooter() {
  return (
    <footer id="lien-he" className="bg-slate-950 py-14 text-slate-300">
      <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <a href="/" className="flex items-center gap-2 text-lg font-black text-white hover:!text-white">
            <span className="flex size-9 items-center justify-center rounded-xl bg-orange-500">✦</span>
            Gia Sư <span className="text-orange-500">PML</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-7">Kết nối gia đình với những người thầy tận tâm, để mỗi ngày học là một ngày tiến bộ.</p>
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
      <div className="container mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">© 2026 {siteConfig.name}. Bảo lưu mọi quyền.</div>
    </footer>
  )
}
