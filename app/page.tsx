import Link from 'next/link';
import { HeroSlider } from '@/components/shop/HeroSlider';

const heroSlides = [
  { title: 'روغن‌های طبیعی و ادویه‌های اصیل، مستقیم از عصاری', subtitle: 'کیفیت تضمین‌شده، تولید تازه، ارسال سریع و بسته‌بندی بهداشتی برای خریدی امن.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5', ctaText: 'مشاهده محصولات', ctaLink: '/products' },
  { title: 'روغن‌های تازه‌گیری‌شده با پرس سرد روزانه', subtitle: 'بدون افزودنی، مناسب مصرف روزانه و حفظ کامل عطر و خواص طبیعی.', image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03', ctaText: 'خرید روغن‌های تازه', ctaLink: '/products?category=oils' },
  { title: 'ادویه‌های اصیل و معطر برای طعم واقعی غذا', subtitle: 'انتخاب تخصصی زردچوبه، دارچین، هل و ادویه‌های محبوب ایرانی.', image: 'https://images.unsplash.com/photo-1615485291234-9fbc5ec80a8f', ctaText: 'مشاهده ادویه‌ها', ctaLink: '/products?category=spices' }
];

const trustItems = ['ارسال سریع', 'ضمانت اصالت', 'پرداخت امن', 'پشتیبانی خرید', 'بسته‌بندی بهداشتی'];
const categories = [
  { name: 'روغن‌ها', desc: 'پرس سرد و تازه‌گیری روز', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5' },
  { name: 'ادویه‌ها', desc: 'عطر و طعم اصیل', image: 'https://images.unsplash.com/photo-1615485291234-9fbc5ec80a8f' },
  { name: 'ارده و شیره', desc: 'مقوی و طبیعی', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d' },
  { name: 'دمنوش‌ها', desc: 'آرامش‌بخش و سالم', image: 'https://images.unsplash.com/photo-1597481499666-3fef31a5f2c9' },
  { name: 'گیاهان دارویی', desc: 'انتخاب تخصصی', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
  { name: 'پک‌های هدیه', desc: 'زیبا و کاربردی', image: 'https://images.unsplash.com/photo-1514996937319-344454492b37' }
];

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-16">
      <div className="pointer-events-none absolute -top-24 -left-10 h-64 w-64 rounded-full bg-amber-200/45 blur-3xl" />
      <div className="pointer-events-none absolute top-44 -right-16 h-72 w-72 rounded-full bg-lime-200/35 blur-3xl" />

      <HeroSlider slides={heroSlides} />

      <section className="relative mt-6 rounded-3xl border border-white/60 bg-white/70 p-1 shadow-[0_20px_80px_-40px_rgba(90,62,43,0.45)] backdrop-blur">
        <div className="grid grid-cols-2 gap-2 rounded-[22px] bg-gradient-to-l from-amber-50/80 via-white to-lime-50/70 p-3 md:grid-cols-5">
          {trustItems.map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-2xl border border-amber-100/80 bg-white/90 px-3 py-3 text-center text-sm font-medium text-[#5a3e2b] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -left-5 -top-5 h-10 w-10 rounded-full bg-amber-200/35 blur-lg transition group-hover:scale-125" />
              <span className="mb-2 inline-block h-1 w-12 rounded-full bg-gradient-to-r from-amber-300 via-orange-300 to-lime-400" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="relative overflow-hidden rounded-[28px] border border-white/50 shadow-[0_20px_90px_-45px_rgba(36,22,12,0.75)]">
          <img src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03" alt="روغن تازه‌گیری‌شده" className="h-[280px] w-full object-cover object-center transition duration-700 hover:scale-110 sm:h-[340px] md:h-[400px] lg:h-[450px]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-xl bg-white/85 px-4 py-2 text-xs font-semibold text-[#5a3e2b] backdrop-blur">تولید روزانه | پرس سرد</div>
        </div>

        <div className="relative rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_65px_-35px_rgba(78,55,31,0.55)] backdrop-blur md:p-8">
          <div className="absolute left-6 top-0 h-1 w-20 rounded-full bg-gradient-to-r from-amber-300 to-lime-400" />
          <h2 className="text-2xl font-black text-[#5a3e2b] md:text-3xl">روغن‌های تازه‌گیری‌شده</h2>
          <p className="mt-4 leading-8 text-slate-700">روغن‌ها به‌صورت روزانه و با دستگاه پرس سرد تولید می‌شوند تا ارزش غذایی، عطر و کیفیت طبیعی آن‌ها حفظ شود.</p>
          <ul className="mt-5 grid gap-2 text-sm text-[#5a3e2b] md:grid-cols-2">
            {['پرس سرد', 'بدون افزودنی', 'بسته‌بندی بهداشتی', 'مناسب مصرف روزانه'].map((f) => (
              <li key={f} className="rounded-xl border border-amber-100 bg-gradient-to-r from-amber-50 to-lime-50 px-3 py-2 shadow-sm">
                ✓ {f}
              </li>
            ))}
          </ul>
          <Link href="/products?category=oils" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-[#667744] to-[#829954] px-6 py-3 text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl">
            خرید روغن‌های تازه
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-black text-[#5a3e2b] md:text-3xl">دسته‌بندی‌های محبوب</h2>
          <Link href="/categories" className="text-sm font-semibold text-[#667744] hover:underline">مشاهده همه</Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.name} className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-[0_14px_50px_-35px_rgba(62,43,26,0.75)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_65px_-35px_rgba(62,43,26,0.8)]">
              <div className="relative">
                <img src={c.image} alt={c.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-[#5a3e2b]">{c.name}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">{c.desc}</p>
                <button className="mt-4 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-lime-50 px-3 py-2 text-sm font-semibold text-[#5a3e2b] transition group-hover:border-lime-300 group-hover:bg-white">
                  مشاهده دسته
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
