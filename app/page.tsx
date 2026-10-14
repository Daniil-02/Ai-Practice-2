import Link from "next/link";

const upcomingRaids = [
  {
    name: "Цитадель Попелу",
    date: "Сьогодні, 20:00",
    players: "8 / 10",
    status: "Набір відкрито",
  },
  {
    name: "Безодня забутих",
    date: "Сб, 18 травня · 19:30",
    players: "6 / 12",
    status: "Набір відкрито",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1013] px-4 py-6 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-amber-400/10 text-xl text-amber-300">✦</span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Гільдія</span>
              <span className="block text-lg font-bold tracking-wide">Shadow Vanguard</span>
            </span>
          </Link>
          <nav aria-label="Головна навігація" className="flex items-center gap-3 text-sm">
            <Link className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white" href="/members">Учасники</Link>
            <Link className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white" href="/events">Події</Link>
            <Link className="rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-300" href="/events/new">＋ Створити подію</Link>
          </nav>
        </header>

        <section className="grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Оперативний штаб · Сезон V</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Разом сильніші. <span className="text-amber-300">Разом — легенда.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Координуй склад, плануй наступні рейди та збирай команду Shadow Vanguard для нових перемог.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/members" className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300">Переглянути склад <span aria-hidden="true">→</span></Link>
              <Link href="/events" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-amber-300/60 hover:text-amber-200">Розклад подій</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-300/15 bg-gradient-to-br from-amber-300/10 to-transparent p-6">
            <p className="text-sm text-slate-400">Наступний рейд</p>
            <h2 className="mt-2 text-2xl font-bold">Цитадель Попелу</h2>
            <p className="mt-1 text-sm text-amber-200">Сьогодні · 20:00 за Києвом</p>
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-slate-300">Заповненість загону</span>
              <span className="font-semibold text-white">8 / 10</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-4/5 rounded-full bg-amber-300" />
            </div>
            <Link href="/events/1" className="mt-5 inline-flex text-sm font-semibold text-amber-300 hover:text-amber-200">Деталі події <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </section>

        <section aria-label="Статистика гільдії" className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Учасники гільдії", value: "42", note: "+3 цього місяця" },
            { label: "Рейди цього сезону", value: "18", note: "12 перемог" },
            { label: "Активні учасники", value: "36", note: "За останні 7 днів" },
          ].map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/10 bg-[#11191d] p-5">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-xs text-emerald-300">{stat.note}</p>
            </article>
          ))}
        </section>

        <section className="py-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Планування</p>
              <h2 className="mt-1 text-2xl font-bold">Найближчі рейди</h2>
            </div>
            <Link href="/events" className="text-sm font-semibold text-amber-300 hover:text-amber-200">Усі події →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingRaids.map((raid) => (
              <article key={raid.name} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#11191d] p-5">
                <div>
                  <h3 className="font-semibold">{raid.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{raid.date}</p>
                </div>
                <div className="text-right">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">{raid.status}</span>
                  <p className="mt-2 text-sm text-slate-300">{raid.players} учасників</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
