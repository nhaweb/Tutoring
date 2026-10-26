import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNewsArticle, news } from '@/data/content'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'

export const dynamicParams = false

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) return { title: 'Không tìm thấy bài viết' }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/tin-tuc/${article.slug}` },
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      url: `/tin-tuc/${article.slug}`,
      type: 'article',
      locale: 'vi_VN',
    },
  }
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) notFound()

  return (
    <main className="bg-[#fffaf5] text-slate-700">
      <article className="container max-w-3xl py-12 sm:py-16">
        <a href="/#tin-tuc" className="text-sm font-bold text-orange-600">
          ← Tin tức & kinh nghiệm
        </a>
        <p className="mt-6 text-sm font-bold uppercase text-orange-600">
          {article.category} · {article.date}
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3.1rem)]">{article.title}</h1>
        <p className="mt-8 text-lg leading-8 text-slate-600">{article.body}</p>
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl">Muốn áp dụng với con?</h2>
          <p className="mt-2 text-slate-600">Gia Sư PML ghép gia sư theo môn và lịch của gia đình. Gọi hoặc để sẵn nội dung liên hệ — website không lưu đơn.</p>
          <Button href="/#dang-ky" className="mt-5" size="lg">
            Tìm gia sư phù hợp
          </Button>
        </div>
      </article>
    </main>
  )
}
