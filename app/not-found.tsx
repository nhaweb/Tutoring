import { siteConfig } from '@/config/site'
import { telHref } from '@/lib/contact'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="bg-[#fffaf5] text-slate-700">
      <div className="container py-24 text-center">
        <p className="font-bold text-orange-600">404</p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3.2rem)]">Không tìm thấy trang</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">Địa chỉ này không có trên website Gia Sư PML. Bạn có thể về trang chủ hoặc gọi hotline {siteConfig.hotline}.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Về trang chủ
          </Button>
          <Button href={telHref()} size="lg" variant="outline">
            Gọi {siteConfig.hotline}
          </Button>
        </div>
      </div>
    </main>
  )
}
