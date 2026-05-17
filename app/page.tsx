import Link from 'next/link';
import { HeroSlider } from '@/components/shop/HeroSlider';

const heroSlides = [
  { title: 'روغن‌های طبیعی و ادویه‌های اصیل، مستقیم از عصاری', subtitle: 'کیفیت تضمین‌شده، تولید تازه، ارسال سریع و بسته‌بندی بهداشتی برای خریدی امن.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5', ctaText: 'مشاهده محصولات', ctaLink: '/products' },
  { title: 'روغن‌های تازه‌گیری‌شده با پرس سرد روزانه', subtitle: 'بدون افزودنی، مناسب مصرف روزانه و حفظ کامل عطر و خواص طبیعی.', image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03', ctaText: 'خرید روغن‌های تازه', ctaLink: '/products?category=oils' },
  { title: 'ادویه‌های اصیل و معطر برای طعم واقعی غذا', subtitle: 'انتخاب تخصصی زردچوبه، دارچین، هل و ادویه‌های محبوب ایرانی.', image: 'https://images.unsplash.com/photo-1615485291234-9fbc5ec80a8f', ctaText: 'مشاهده ادویه‌ها', ctaLink: '/products?category=spices' }
];

const trustItems = ['ارسال سریع', 'ضمانت اصالت', 'پرداخت امن', 'پشتیبانی خرید', 'بسته‌بندی بهداشتی'];

const spiceCards = [
  { title: 'زردچوبه ممتاز', tone: 'from-amber-300/30 to-orange-400/10' },
  { title: 'دارچین سیگاری', tone: 'from-rose-300/30 to-orange-400/10' },
  { title: 'هل سبز اعلا', tone: 'from-lime-300/30 to-emerald-400/10' },
  { title: 'فلفل سیاه تازه', tone: 'from-slate-300/30 to-zinc-400/10' }
];

const testimonials = [
  { name: 'سمیرا احمدی', text: 'کیفیت روغن‌ها فوق‌العاده بود و بسته‌بندی بسیار تمیز بود.', rate: '★★★★★' },
  { name: 'مهدی نوروزی', text: 'ادویه‌ها خیلی خوش‌عطر بودند. ارسال هم سریع انجام شد.', rate: '★★★★★' },
  { name: 'الهام عباسی', text: 'پشتیبانی قبل از خرید عالی بود و دقیق راهنمایی شدم.', rate: '★★★★☆' }
];

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-64 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      <section className="hero-text mt-6 rounded-[28px] border border-white/30 bg-white/60 p-3 shadow-2xl shadow-fuchsia-950/10 backdrop-blur-xl">
        <HeroSlider slides={heroSlides} />
      </section>

      <section className="mt-6 grid grid-cols-2 gap-2 rounded-3xl border border-white/40 bg-white/70 p-3 shadow-xl backdrop-blur-xl md:grid-cols-5">
        {trustItems.map((item) => (
          <div key={item} className="rounded-2xl border border-white/60 bg-gradient-to-r from-white to-fuchsia-50 px-3 py-2 text-center text-sm font-medium text-[#4a2f27]">
            {item}
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03" alt="روغن تازه‌گیری‌شده" className="h-[300px] w-full object-cover object-center transition duration-700 group-hover:scale-110 sm:h-[360px] md:h-[420px]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-black/35 p-4 text-white backdrop-blur-md">
            <p className="text-sm text-white/85">تولید روزانه • پرس سرد • خالص</p>
            <h2 className="mt-1 text-2xl font-black">روغن‌های تازه‌گیری‌شده</h2>
          </div>
        </div>

        <div className="rounded-3xl border border-white/30 bg-gradient-to-br from-[#1f2937] via-[#3b0764] to-[#111827] p-7 text-white shadow-2xl">
          <p className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs">Premium Collection</p>
          <p className="mt-4 leading-8 text-white/90">روغن‌ها به‌صورت روزانه و با دستگاه پرس سرد تولید می‌شوند تا ارزش غذایی، عطر و کیفیت طبیعی آن‌ها حفظ شود.</p>
          <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
            {['پرس سرد', 'بدون افزودنی', 'بسته‌بندی بهداشتی', 'مناسب مصرف روزانه'].map((f) => (
              <li key={f} className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">✓ {f}</li>
            ))}
          </ul>
          <Link href="/products?category=oils" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-bold text-slate-900 transition hover:scale-105">
            خرید روغن‌های تازه
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/40 bg-white/65 p-6 shadow-xl backdrop-blur-xl">
        <h2 className="text-2xl font-black text-[#422c3b]">ادویه‌های اصیل با پالت رنگی زنده</h2>
        <p className="mt-2 text-slate-700">ترکیب رنگ، عطر و اصالت در ادویه‌هایی که طعم غذای ایرانی را بی‌نظیر می‌کنند.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {spiceCards.map((s) => (
            <div key={s.title} className={`rounded-2xl border border-white/40 bg-gradient-to-br ${s.tone} p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl`}>
              <p className="font-bold text-[#4e3340]">{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-fuchsia-200/50 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-700 p-7 text-white shadow-2xl">
        <p className="text-sm text-cyan-100">پیشنهاد ویژه امروز</p>
        <h3 className="mt-1 text-3xl font-black">تا ۲۰٪ تخفیف روی روغن‌های منتخب</h3>
        <p className="mt-2 text-white/90">فرصت محدود برای خرید اقتصادی‌تر محصولات تازه‌گیری‌شده.</p>
        <Link href="/products" className="mt-4 inline-block rounded-xl bg-white px-5 py-3 font-bold text-violet-700">خرید با تخفیف</Link>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-lg">
            <p className="text-amber-600">{t.rate}</p>
            <p className="mt-2 text-slate-700">{t.text}</p>
            <p className="mt-3 text-sm font-bold text-[#4b2b2b]">{t.name}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-white/40 bg-gradient-to-l from-cyan-50/80 via-white/70 to-fuchsia-50/80 p-8 text-center shadow-xl backdrop-blur-xl">
        <h2 className="text-3xl font-black text-[#412a38]">آماده یک خرید مدرن و متفاوت هستید؟</h2>
        <p className="mt-2 text-slate-700">همین حالا از بین روغن‌ها، ادویه‌ها و محصولات عصاری انتخاب کنید.</p>
        <Link href="/products" className="mt-5 inline-block rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-bold text-white">شروع خرید</Link>
      </section>
    </main>
  );
}
