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
    <main className="mx-auto max-w-7xl px-4 pb-14">
      <HeroSlider slides={heroSlides} />

      <section className="mt-5 rounded-2xl bg-gradient-to-l from-amber-100/70 via-white to-lime-100/60 p-[1px]">
        <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/90 p-3 md:grid-cols-5">
          {trustItems.map((item) => (
            <div key={item} className="group rounded-xl border border-amber-100 bg-gradient-to-b from-white to-amber-50 px-3 py-2 text-center text-sm text-[#5a3e2b] transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="inline-block h-1 w-10 rounded-full bg-gradient-to-r from-amber-300 to-lime-400 mb-1" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
        <div className="relative overflow-hidden rounded-3xl border border-amber-100 shadow-lg">
          <img src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03" alt="روغن تازه‌گیری‌شده" className="h-[260px] w-full object-cover object-center sm:h-[320px] md:h-[380px] lg:h-[420px] transition duration-500 hover:scale-105" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        <div className="rounded-3xl border border-amber-100 bg-white p-6 md:p-7">
          <h2 className="text-2xl font-black text-[#5a3e2b]">روغن‌های تازه‌گیری‌شده</h2>
          <p className="mt-3 leading-8 text-slate-700">روغن‌ها به‌صورت روزانه و با دستگاه پرس سرد تولید می‌شوند تا ارزش غذایی، عطر و کیفیت طبیعی آن‌ها حفظ شود.</p>
          <ul className="mt-4 grid gap-2 text-sm text-[#5a3e2b] md:grid-cols-2">
            {['پرس سرد', 'بدون افزودنی', 'بسته‌بندی بهداشتی', 'مناسب مصرف روزانه'].map((f) => <li key={f} className="rounded-lg bg-amber-50 px-3 py-2">✓ {f}</li>)}
          </ul>
          <Link href="/products?category=oils" className="mt-5 inline-block rounded-xl bg-[#667744] px-5 py-3 text-white">خرید روغن‌های تازه</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-black text-[#5a3e2b]">دسته‌بندی‌های محبوب</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.name} className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative"><img src={c.image} alt={c.name} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" /></div>
              <div className="p-4">
                <h3 className="font-bold text-[#5a3e2b]">{c.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
                <button className="mt-3 rounded-lg bg-amber-100 px-3 py-2 text-sm text-[#5a3e2b] transition hover:bg-amber-200">مشاهده دسته</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
