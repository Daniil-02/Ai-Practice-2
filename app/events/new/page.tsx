import Link from "next/link";

const fields = [
  { label: "Назва події", value: "Наприклад, Цитадель Попелу" },
  { label: "Дата та час", value: "Оберіть дату і час події" },
  { label: "Ліміт місць", value: "10 учасників" },
];

export default function NewEventPage() {
  return (
    <main className="min-h-screen bg-[#0b1013] px-4 py-6 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Shadow Vanguard</p>
            <h1 className="mt-1 text-2xl font-bold">Нова подія</h1>
          </div>
          <nav aria-label="Навігація" className="flex gap-3 text-sm">
            <Link href="/events" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Розклад подій</Link>
            <Link href="/" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Головна</Link>
          </nav>
        </header>
        <section className="py-10">
          <p className="text-sm text-slate-400">Заплануй наступну пригоду для свого загону.</p>
          <div className="mt-6 space-y-5 rounded-2xl border border-white/10 bg-[#11191d] p-5 sm:p-8">
            {fields.map((field) => (
              <div key={field.label}>
                <p className="mb-2 text-sm font-semibold text-slate-200">{field.label}</p>
                <div className="rounded-xl border border-white/10 bg-[#0b1013] px-4 py-3 text-sm text-slate-500">{field.value}</div>
              </div>
            ))}
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-200">Опис</p>
              <div className="min-h-32 rounded-xl border border-white/10 bg-[#0b1013] px-4 py-3 text-sm text-slate-500">Додайте деталі рейду, вимоги до спорядження та іншу важливу інформацію…</div>
            </div>
            <div className="flex flex-wrap justify-end gap-3 border-t border-white/10 pt-5">
              <Link href="/events" className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white">Скасувати</Link>
              <button type="button" className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300">Створити подію</button>
            </div>
            <p className="text-xs text-slate-500">Макет форми — дані не зберігаються.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
