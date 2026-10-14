import Link from "next/link";

const events = [
  { id: "1", name: "Цитадель Попелу", type: "Рейд · Міфічний", date: "Сьогодні, 20:00", count: "8 / 10", status: "Набір відкрито", open: true },
  { id: "2", name: "Безодня забутих", type: "Рейд · Героїчний", date: "Сб, 18 травня · 19:30", count: "6 / 12", status: "Набір відкрито", open: true },
  { id: "3", name: "Облога Чорного храму", type: "Рейд · Міфічний", date: "Вт, 14 травня · 20:00", count: "10 / 10", status: "Завершено", open: false },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0b1013] px-4 py-6 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Shadow Vanguard</p>
            <h1 className="mt-1 text-2xl font-bold">Розклад подій</h1>
          </div>
          <nav aria-label="Навігація" className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Головна</Link>
            <Link href="/events/new" className="rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-300">＋ Створити подію</Link>
          </nav>
        </header>
        <section className="py-10">
          <p className="text-sm text-slate-400">Рейди, пригоди та спільні вилазки гільдії</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">Усі події</h2>
            <div className="flex gap-2">
              <button type="button" aria-pressed="true" className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950">Усі</button>
              <button type="button" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Майбутні</button>
              <button type="button" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Завершені</button>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            {events.map((event) => (
              <article key={event.id} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#11191d] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-300/10 text-xl text-amber-300">⚔</span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{event.type}</p>
                    <h3 className="mt-1 text-lg font-bold">{event.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{event.date}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5 sm:justify-end">
                  <div>
                    <p className="text-xs text-slate-500">Слоти</p>
                    <p className="mt-1 font-semibold">{event.count}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${event.open ? "bg-emerald-400/10 text-emerald-300" : "bg-slate-700/50 text-slate-300"}`}>{event.status}</span>
                  <Link href={`/events/${event.id}`} className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-amber-300/50 hover:text-amber-200">Деталі <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
