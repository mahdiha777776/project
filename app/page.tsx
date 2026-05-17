import Link from 'next/link';
import { HeroSlider } from '@/components/shop/HeroSlider';

const heroSlides = [
  { title: 'روغن‌های طبیعی و ادویه‌های اصیل، مستقیم از عصاری', subtitle: 'کیفیت تضمین‌شده، تولید تازه، ارسال سریع و بسته‌بندی بهداشتی برای خریدی امن.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5', ctaText: 'مشاهده محصولات', ctaLink: '/products' },
  { title: 'روغن‌های تازه‌گیری‌شده با پرس سرد روزانه', subtitle: 'بدون افزودنی، مناسب مصرف روزانه و حفظ کامل عطر و خواص طبیعی.', image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03', ctaText: 'خرید روغن‌های تازه', ctaLink: '/products?category=oils' },
  { title: 'ادویه‌های اصیل و معطر برای طعم واقعی غذا', subtitle: 'انتخاب تخصصی زردچوبه، دارچین، هل و ادویه‌های محبوب ایرانی.', image: 'https://images.unsplash.com/photo-1615485291234-9fbc5ec80a8f', ctaText: 'مشاهده ادویه‌ها', ctaLink: '/products?category=spices' }
];

const trustItems = ['ارسال سریع', 'ضمانت اصالت', 'پرداخت امن', 'پشتیبانی خرید', 'بسته‌بندی بهداشتی'];
const features = ['پرس سرد', 'بدون افزودنی', 'بسته‌بندی بهداشتی', 'مناسب مصرف روزانه'];
const spiceCards = ['زردچوبه ممتاز', 'دارچین سیگاری', 'هل سبز اعلا', 'فلفل سیاه تازه'];
const testimonials = [
  { name: 'سمیرا احمدی', text: 'کیفیت روغن‌ها فوق‌العاده بود و بسته‌بندی بسیار تمیز بود.', rate: '★★★★★' },
  { name: 'مهدی نوروزی', text: 'ادویه‌ها خیلی خوش‌عطر بودند. ارسال هم سریع انجام شد.', rate: '★★★★★' },
  { name: 'الهام عباسی', text: 'پشتیبانی قبل از خرید عالی بود و دقیق راهنمایی شدم.', rate: '★★★★☆' }
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16">
      <section className="hero-text mt-6 overflow-hidden rounded-[30px] border border-amber-100 bg-white/85 p-3 shadow-[0_18px_60px_-32px_rgba(90,62,43,0.45)] backdrop-blur-sm">
        <HeroSlider slides={heroSlides} />
      </section>

      <section className="mt-6 grid grid-cols-2 gap-2 rounded-3xl border border-amber-100 bg-white p-3 md:grid-cols-5">
        {trustItems.map((item) => (
          <div key={item} className="rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50 to-[#f6f3ea] px-3 py-2 text-center text-sm font-medium text-[#5a3e2b]">
            {item}
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
        <div className="group relative overflow-hidden rounded-3xl border border-amber-100 shadow-[0_20px_50px_-35px_rgba(90,62,43,0.8)]">
          <img src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03" alt="روغن تازه‌گیری‌شده" className="h-[300px] w-full object-cover object-center transition duration-700 group-hover:scale-105 sm:h-[360px] md:h-[420px]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2f261f]/60 via-[#2f261f]/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#2f261f]/45 p-4 text-white backdrop-blur-sm">
            <p className="text-sm text-amber-100">تولید روزانه • پرس سرد • خالص</p>
            <h2 className="mt-1 text-2xl font-black">روغن‌های تازه‌گیری‌شده</h2>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-[#f9f5eb] via-[#f5efdf] to-[#ece8d9] p-7 text-[#4c3326] shadow-[0_20px_50px_-36px_rgba(90,62,43,0.65)]">
          <p className="inline-block rounded-full border border-amber-200 bg-white/60 px-3 py-1 text-xs font-semibold text-[#7b5a3d]">Premium Collection</p>
          <h3 className="mt-3 text-2xl font-black text-[#5a3e2b]">کیفیت یکدست، طعم اصیل</h3>
          <p className="mt-3 leading-8 text-[#5d4737]">روغن‌ها به‌صورت روزانه و با دستگاه پرس سرد تولید می‌شوند تا ارزش غذایی، عطر و کیفیت طبیعی آن‌ها حفظ شود.</p>
          <ul className="mt-5 grid gap-2 text-sm md:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="rounded-xl border border-amber-200 bg-white/70 px-3 py-2">✓ {f}</li>
            ))}
          </ul>
          <Link href="/products?category=oils" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-[#667744] to-[#7f8f5c] px-5 py-3 font-bold text-white transition hover:brightness-105">
            خرید روغن‌های تازه
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-amber-100 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(90,62,43,0.55)]">
        <h2 className="text-2xl font-black text-[#5a3e2b]">ادویه‌های اصیل و معطر</h2>
        <p className="mt-2 text-[#6a5241]">پالت رنگی هماهنگ با هویت برند: گرم، طبیعی و یکدست برای تجربه‌ی خرید حرفه‌ای‌تر.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {spiceCards.map((title) => (
            <div key={title} className="rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50 to-[#f3ede0] p-4 transition hover:-translate-y-1 hover:shadow-md">
              <p className="font-bold text-[#5a3e2b]">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-[#6f8050] bg-gradient-to-r from-[#5f7041] to-[#738457] p-7 text-white shadow-[0_18px_44px_-30px_rgba(51,64,33,0.85)]">
        <p className="text-sm text-amber-100">پیشنهاد ویژه امروز</p>
        <h3 className="mt-1 text-3xl font-black">تا ۲۰٪ تخفیف روی روغن‌های منتخب</h3>
        <p className="mt-2 text-white/90">فرصت محدود برای خرید اقتصادی‌تر محصولات تازه‌گیری‌شده.</p>
        <Link href="/products" className="mt-4 inline-block rounded-xl bg-white px-5 py-3 font-bold text-[#5f7041]">خرید با تخفیف</Link>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-[0_14px_35px_-28px_rgba(90,62,43,0.65)]">
            <p className="text-amber-600">{t.rate}</p>
            <p className="mt-2 text-[#5e4a3c]">{t.text}</p>
            <p className="mt-3 text-sm font-bold text-[#5a3e2b]">{t.name}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-amber-100 bg-gradient-to-l from-[#f2eddf] to-[#fbf7ec] p-8 text-center shadow-[0_18px_40px_-30px_rgba(90,62,43,0.45)]">
        <h2 className="text-3xl font-black text-[#5a3e2b]">آماده یک خرید جذاب و یکدست هستید؟</h2>
        <p className="mt-2 text-[#5d4737]">همین حالا از بین روغن‌ها، ادویه‌ها و محصولات عصاری انتخاب کنید.</p>
        <Link href="/products" className="mt-5 inline-block rounded-xl bg-gradient-to-r from-[#667744] to-[#7f8f5c] px-6 py-3 font-bold text-white">شروع خرید</Link>
      </section>
    </main>
  );
}
