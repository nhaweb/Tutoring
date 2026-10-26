import type { Metadata } from 'next'
import { ArrowRight, Award, BookOpen, Check, ChevronRight, Clock3, GraduationCap, HeartHandshake, MessageCircle, Play, ShieldCheck, Star, Zap } from 'lucide-react'
import { subjects, tutors, testimonials, faqs, news } from '@/data/content'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { RequestForm } from '@/components/request-form'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
}

const features = [
  { icon: ShieldCheck, title: 'Sàng lọc kỹ lưỡng', description: '100% gia sư có hồ sơ và bằng cấp xác minh' },
  { icon: BookOpen, title: 'Giáo trình cá nhân hóa', description: 'Lộ trình riêng theo năng lực và mục tiêu' },
  { icon: MessageCircle, title: 'Báo cáo hàng tuần', description: 'Phụ huynh luôn nắm được tiến độ của con' },
  { icon: Clock3, title: 'Lịch học linh hoạt', description: 'Chủ động chọn thời gian và hình thức học' },
  { icon: HeartHandshake, title: 'Học thử miễn phí', description: 'Trải nghiệm trước khi đưa ra quyết định' },
  { icon: Zap, title: 'Hỗ trợ 24/7', description: 'Đồng hành nhanh chóng trong suốt hành trình' },
]

const steps = [
  ['01', 'Gửi yêu cầu', 'Chia sẻ mục tiêu và lịch học mong muốn'],
  ['02', 'Tư vấn & ghép gia sư', 'Nhận đề xuất phù hợp trong 24 giờ'],
  ['03', 'Học thử miễn phí', 'Trải nghiệm một buổi học thực tế'],
  ['04', 'Học chính thức', 'Theo dõi tiến độ cùng Gia Sư PML'],
]

const plans = [
  { name: 'Tiểu học', price: '120.000 – 180.000đ', unit: '/ buổi 90 phút', featured: false },
  { name: 'THCS', price: '150.000 – 220.000đ', unit: '/ buổi 90 phút', featured: true },
  { name: 'THPT & Luyện thi', price: '180.000 – 350.000đ', unit: '/ buổi 120 phút', featured: false },
]

const stats = [
  ['5.000+', 'Học viên đồng hành'],
  ['300+', 'Gia sư chất lượng'],
  ['2.4 điểm', 'Tăng trung bình'],
  ['98%', 'Phụ huynh hài lòng'],
]

const subjectTone: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-600',
  blue: 'bg-blue-100 text-blue-600',
  teal: 'bg-teal-100 text-teal-600',
  purple: 'bg-purple-100 text-purple-600',
  rose: 'bg-rose-100 text-rose-600',
  yellow: 'bg-yellow-100 text-yellow-600',
}

function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className={light ? 'text-orange-200' : 'text-orange-600'}>{eyebrow}</p>
      <h2 className={light ? 'text-white' : 'text-slate-900'}>{title}</h2>
      {description ? <p className={light ? 'text-orange-50/80' : 'text-slate-500'}>{description}</p> : null}
    </div>
  )
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#fffaf5] text-slate-700">
      <section id="top" className="hero-bg relative">
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
              <span className="size-2 rounded-full bg-orange-500" /> Đồng hành cùng 5.000+ gia đình
            </div>
            <h1>
              Tìm gia sư phù hợp.
              <br />
              <span className="text-orange-500">Con tiến bộ rõ rệt.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Kết nối với gia sư chất lượng cao, được tuyển chọn kỹ lưỡng — học đúng phương pháp, tiến bộ bền vững.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" href="/#dang-ky">
                Đăng ký tìm gia sư <ArrowRight aria-hidden />
              </Button>
              <Button size="lg" variant="outline" href="/#gia-su">
                <Play aria-hidden /> Xem gia sư tiêu biểu
              </Button>
            </div>
            <div className="mt-9 grid max-w-lg grid-cols-2 gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-4">
              <span className="flex items-center gap-2"><Check className="text-orange-500" aria-hidden /> Hồ sơ xác minh</span>
              <span className="flex items-center gap-2"><Check className="text-orange-500" aria-hidden /> Học thử miễn phí</span>
              <span className="flex items-center gap-2"><Check className="text-orange-500" aria-hidden /> Đổi gia sư miễn phí</span>
              <span className="flex items-center gap-2"><Check className="text-orange-500" aria-hidden /> Hỗ trợ 24/7</span>
            </div>
          </div>
          <div className="relative">
            <div className="hero-art">
              <img src="/images/gia-su-pml-hero.png" alt="Gia sư PML đang hướng dẫn học viên" className="absolute inset-0 size-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-transparent to-white/10" />
              <div className="absolute -left-5 top-8 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Award aria-hidden />
                  </div>
                  <div>
                    <strong className="block text-sm">Gia sư hàng đầu</strong>
                    <span className="text-xs text-slate-400">Được phụ huynh tin chọn</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-4 hidden rounded-2xl bg-slate-900 p-4 text-white shadow-xl sm:block">
                <strong className="block text-2xl">98%</strong>
                <span className="text-xs text-slate-300">Hài lòng sau học thử</span>
              </div>
              <div className="hero-person">
                <GraduationCap className="size-24 text-orange-500" aria-hidden />
                <div className="mt-3 h-3 w-28 rounded-full bg-orange-200" />
                <div className="mt-2 h-2 w-20 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
        <div id="dang-ky" className="container relative z-10 -mb-16">
          <RequestForm />
        </div>
      </section>

      <section id="mon-hoc" className="container py-28">
        <SectionTitle eyebrow="MÔN HỌC & CẤP LỚP" title="Học gì cũng có gia sư giỏi" description="Từ kiến thức nền tảng đến luyện thi chuyên sâu, chúng tôi tìm đúng người thầy cho mục tiêu của bạn." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <a key={subject.name} href="/#dang-ky" className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100">
              <div className={`mb-5 flex size-14 items-center justify-center rounded-2xl text-xl font-black ${subjectTone[subject.color] ?? subjectTone.orange}`}>{subject.icon}</div>
              <div className="flex items-center justify-between">
                <div>
                  <h3>{subject.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{subject.levels}</p>
                </div>
                <ChevronRight className="text-orange-400 transition group-hover:translate-x-1" aria-hidden />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="gioi-thieu" className="bg-white py-24">
        <div className="container">
          <SectionTitle eyebrow="VÌ SAO CHỌN GIA SƯ PML" title="Mỗi giờ học đều đáng giá" description="Chúng tôi không chỉ tìm gia sư, mà xây dựng một hành trình học tập phù hợp cho từng học viên." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
              <div key={feature.title} className="rounded-3xl bg-[#fffaf5] p-6">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon aria-hidden />
                </div>
                <h3>{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{feature.description}</p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <SectionTitle eyebrow="QUY TRÌNH ĐƠN GIẢN" title="Bắt đầu chỉ với 4 bước" />
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <div key={number} className="relative text-center">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-200">{number}</div>
              <h3>{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gia-su" className="bg-[#fff1e4] py-24">
        <div className="container">
          <SectionTitle eyebrow="ĐỘI NGŨ GIA SƯ" title="Những người thầy truyền cảm hứng" description="Tận tâm, giỏi chuyên môn và luôn biết cách giúp học viên yêu việc học." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tutors.map((tutor) => (
              <article key={tutor.slug} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative flex h-48 items-center justify-center bg-orange-100">
                  <img src={tutor.image} alt={tutor.name} className="size-32 rounded-full object-cover ring-8 ring-white/60" />
                  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-orange-600">{tutor.tag}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg">
                        <a href={`/gia-su/${tutor.slug}`}>{tutor.name}</a>
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-orange-600">{tutor.subject}</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" aria-hidden />
                      {tutor.rating}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">
                    {tutor.school}
                    <br />
                    {tutor.experience}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm">
                      Từ <strong>{tutor.price}</strong>
                      <br />
                      <small className="text-slate-400">/ buổi</small>
                    </span>
                    <Button size="sm" variant="outline" href={`/gia-su/${tutor.slug}`}>
                      Xem hồ sơ
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hoc-phi" className="container py-24">
        <SectionTitle eyebrow="HỌC PHÍ THAM KHẢO" title="Đầu tư xứng đáng cho tương lai" description="Mức phí linh hoạt theo môn học, cấp lớp và hình thức học. Đăng ký gói tháng tiết kiệm đến 15%." />
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={plan.featured ? 'rounded-3xl border border-orange-400 bg-orange-500 p-7 text-white shadow-xl shadow-orange-200' : 'rounded-3xl border border-orange-100 bg-white p-7'}>
              <p className={plan.featured ? 'text-orange-100' : 'text-orange-600'}>{plan.name}</p>
              <div className="my-5 text-3xl font-black">{plan.price}</div>
              <p className={plan.featured ? 'text-orange-100' : 'text-slate-500'}>{plan.unit}</p>
              <div className="my-6 h-px bg-current opacity-10" />
              <p className="flex gap-2 text-sm"><Check aria-hidden /> Tại nhà hoặc online 1-1</p>
              <p className="mt-3 flex gap-2 text-sm"><Check aria-hidden /> Học thử miễn phí</p>
              <Button className="mt-7 w-full" variant={plan.featured ? 'dark' : 'outline'} href="/#dang-ky">
                Nhận báo giá phù hợp
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="container">
          <SectionTitle light eyebrow="NHỮNG CON SỐ BIẾT NÓI" title="Cùng con tạo nên bước tiến mới" />
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong className="text-4xl font-black text-orange-400 sm:text-5xl">{value}</strong>
                <p className="mt-2 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <SectionTitle eyebrow="CẢM NHẬN" title="Phụ huynh nói gì về Gia Sư PML" />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
              <div className="mb-5 flex gap-1 text-yellow-400" aria-label="5 sao">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="text-lg leading-8 text-slate-700">“{item.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={item.image} alt="" className="size-11 rounded-full object-cover" />
                <div>
                  <strong className="block">{item.name}</strong>
                  <span className="text-sm text-slate-500">{item.detail}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-white py-24">
        <div className="container">
          <SectionTitle eyebrow="HỎI ĐÁP" title="Bạn đang băn khoăn điều gì?" />
          <div className="mx-auto max-w-3xl rounded-3xl border border-orange-100 bg-[#fffaf5] px-6">
            <Accordion>
              {faqs.map(([question, answer]) => (
                <AccordionItem key={question} question={question}>
                  {answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="tin-tuc" className="container py-24">
        <SectionTitle eyebrow="TIN TỨC & KINH NGHIỆM" title="Góc học tập cho cả nhà" />
        <div className="grid gap-5 md:grid-cols-3">
          {news.map((item, index) => (
            <article key={item.slug} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className={`flex h-44 items-center justify-center text-5xl ${index === 0 ? 'bg-orange-100' : index === 1 ? 'bg-blue-100' : 'bg-teal-100'}`} aria-hidden>
                {index === 0 ? '✎' : index === 1 ? '★' : '◌'}
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase text-orange-600">
                  {item.category} · {item.date}
                </span>
                <h3 className="mt-3 leading-7">
                  <a href={`/tin-tuc/${item.slug}`}>{item.title}</a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.excerpt}</p>
                <a href={`/tin-tuc/${item.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange-600">
                  Đọc tiếp <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 py-16">
        <div className="container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="font-bold text-orange-100">SẴN SÀNG ĐỂ CON TIẾN BỘ?</p>
            <h2 className="mt-2 text-white">
              Gọi hoặc nhắn Zalo — nhận tư vấn
              <br className="hidden sm:block" /> và học thử miễn phí
            </h2>
          </div>
          <Button variant="dark" size="lg" href="/#dang-ky">
            Liên hệ ngay <ArrowRight aria-hidden />
          </Button>
        </div>
      </section>
    </main>
  )
}
