import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0b1324] px-4 py-10">
      <div className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl" />

      <div className="relative mx-auto max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.9)] backdrop-blur-xl md:p-8">
        <p className="mb-2 text-sm font-semibold text-emerald-200">ایجاد حساب کاربری</p>
        <h1 className="text-3xl font-black text-white">شروع تجربه خرید حرفه‌ای ✨</h1>
        <p className="mt-2 text-sm leading-7 text-slate-200">ثبت‌نام کن تا سفارش‌ها، آدرس‌ها و تخفیف‌های اختصاصی همیشه در دسترست باشه.</p>

        <form action="/api/auth/register" method="post" className="mt-6 space-y-4">
          <input name="name" placeholder="نام و نام خانوادگی" className="w-full rounded-xl border border-white/20 bg-white/90 px-3 py-2.5 text-slate-800 outline-none ring-emerald-500 transition focus:ring-2" />
          <input name="mobile" placeholder="شماره موبایل" className="w-full rounded-xl border border-white/20 bg-white/90 px-3 py-2.5 text-slate-800 outline-none ring-emerald-500 transition focus:ring-2" />
          <input name="email" placeholder="ایمیل" className="w-full rounded-xl border border-white/20 bg-white/90 px-3 py-2.5 text-slate-800 outline-none ring-emerald-500 transition focus:ring-2" />
          <input name="password" type="password" placeholder="رمز عبور" className="w-full rounded-xl border border-white/20 bg-white/90 px-3 py-2.5 text-slate-800 outline-none ring-emerald-500 transition focus:ring-2" />

          <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400 px-4 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:scale-[1.01] hover:shadow-xl">
            ثبت‌نام و ادامه
          </button>
        </form>

        <div className="mt-5 rounded-2xl border border-white/20 bg-white/5 p-3 text-center text-sm text-slate-100">
          قبلاً ثبت‌نام کرده‌اید؟
          <Link href="/auth/login" className="mr-2 font-bold text-emerald-300 transition hover:text-emerald-200 hover:underline">
            ورود به حساب
          </Link>
        </div>
      </div>
    </main>
  );
}
