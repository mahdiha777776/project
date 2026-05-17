import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 px-4 py-10">
      <div className="pointer-events-none absolute -top-16 left-0 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.9)] backdrop-blur-xl md:p-8">
        <p className="mb-2 text-sm font-semibold text-cyan-200">ورود به حساب کاربری</p>
        <h1 className="text-3xl font-black text-white">خوش برگشتی 👋</h1>
        <p className="mt-2 text-sm leading-7 text-slate-200">برای مشاهده سفارش‌ها، علاقه‌مندی‌ها و خرید سریع‌تر وارد حساب خودت شو.</p>

        <form action="/api/auth/login" method="post" className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-slate-100">شماره موبایل</label>
            <input name="mobile" placeholder="09xxxxxxxxx" className="w-full rounded-xl border border-white/20 bg-white/90 px-3 py-2.5 text-slate-800 outline-none ring-fuchsia-400 transition focus:ring-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-100">رمز عبور</label>
            <input name="password" type="password" placeholder="رمز عبور" className="w-full rounded-xl border border-white/20 bg-white/90 px-3 py-2.5 text-slate-800 outline-none ring-fuchsia-400 transition focus:ring-2" />
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-900/40 transition hover:scale-[1.01] hover:shadow-xl">
            ورود به حساب
          </button>
        </form>

        <div className="mt-5 rounded-2xl border border-white/20 bg-white/5 p-3 text-center text-sm text-slate-100">
          حساب ندارید؟
          <Link href="/auth/register" className="mr-2 font-bold text-cyan-300 transition hover:text-cyan-200 hover:underline">
            ثبت‌نام سریع
          </Link>
        </div>
      </div>
    </main>
  );
}
