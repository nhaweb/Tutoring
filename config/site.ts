export const siteConfig = {
  name: 'Gia Sư PML',
  title: 'Gia Sư PML | Tìm gia sư phù hợp cho con',
  description: 'Kết nối gia đình với gia sư chất lượng cao, học thử miễn phí và tiến bộ rõ rệt.',
  hotline: '0908 985 844',
  email: 'hello@giasupml.vn',
  address: 'Tầng 3, 18 Nguyễn Thị Minh Khai, Quận 1, TP. Hồ Chí Minh',
  nav: [
    ['Giới thiệu', '/#gioi-thieu'],
    ['Môn học', '/#mon-hoc'],
    ['Gia sư', '/#gia-su'],
    ['Học phí', '/#hoc-phi'],
    ['Tin tức', '/#tin-tuc'],
    ['Liên hệ', '/#lien-he'],
  ],
} as const

/** Absolute origin for canonical URLs, Open Graph, robots and sitemap. */
export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (production) return `https://${production.replace(/^https?:\/\//, '').replace(/\/$/, '')}`
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, '').replace(/\/$/, '')}`
  return 'http://localhost:3000'
}
