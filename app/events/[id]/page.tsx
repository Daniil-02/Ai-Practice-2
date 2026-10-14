import Link from "next/link";

const roster = [
  { name: "Nightwarden", role: "Танк", rank: "Офіцер" },
  { name: "Lunaria", role: "Хілер", rank: "Ветеран" },
  { name: "Ashbringer", role: "ДПС", rank: "Ветеран" },
  { name: "Thornshield", role: "Танк", rank: "Еліта" },
  { name: "Starweaver", role: "Хілер", rank: "Учасник" },
  { name: "Voidstriker", role: "ДПС", rank: "Учасник" },
  { name: "Ironhowl", role: "ДПС", rank: "Новобранець" },
  { name: "Ravenfall", role: "ДПС", rank: "Учасник" },
];

const reserve = [
  { name: "Frostveil", role: "Хілер" },
  { name: "Duskblade", role: "ДПС" },
];

export default async function EventPage({ params }: PageProps<"/events/[id]">) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#0b1013] px-4 py-6 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Shadow Vanguard · Подія #{id}</p>
            <h1 className="mt-1 text-2xl font-bold">Цитадель Попелу</h1>
          </div>
          <nav aria-label="Навігація" className="flex gap-2 text-sm">
            <Link href="/events" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Розклад подій</Link>
            <Link href="/members" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Склад гільдії</Link>
          </nav>
        </header>
        <section className="grid gap-6 py-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-6">
            <article className="rounded-2xl border border-white/10 bg-[#11191d] p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">Набір відкрито</span>
                  <h2 className="mt-4 text-2xl font-bold">Цитадель Попелу</h2>
                  <p className="mt-2 text-sm text-slate-400">Рейд · Міфічний рівень · Сьогодні о 20:00</p>
                </div>
                <span className="rounded-xl border border-emerald-300/20 bg-emerald-300/5 px-3 py-2 text-xs font-semibold text-emerald-300"><span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-emerald-300" />REALTIME</span>
              </div>
              <p className="mt-6 max-w-2xl leading-7 text-slate-300">Вирушаємо до Цитаделі Попелу за рідкісними трофеями. Перевірте спорядження та приходьте за 10 хвилин до початку.</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#0b1013] p-4">
                <div>
                  <p className="text-sm text-slate-400">Вільні місця</p>
                  <p className="mt-1 text-xl font-bold">8 <span className="text-sm font-normal text-slate-500">з 10 учасників</span></p>
                </div>
                <button type="button" className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300">Записатися на рейд</button>
              </div>
            </article>
            <RosterCard title="Основний склад" people={roster} officerControls />
            <RosterCard title="Резерв" people={reserve} officerControls />
          </div>
          <aside className="h-fit rounded-2xl border border-white/10 bg-[#11191d] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Комунікація</p>
            <h2 className="mt-2 text-xl font-bold">Коментарі</h2>
            <div className="mt-5 space-y-4">
              <article className="rounded-xl bg-[#0b1013] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">Lunaria</span>
                  <time className="text-xs text-slate-500">18:42</time>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Візьму запасні зілля лікування для групи.</p>
                <div className="mt-3 flex gap-3">
                  <button type="button" className="text-xs text-slate-500 hover:text-amber-200">Поскаржитися</button>
                  <button type="button" className="text-xs text-slate-500 hover:text-amber-200">Приховати</button>
                </div>
              </article>
              <article className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-4">
                <p className="text-xs font-medium text-slate-500">Повідомлення приховано офіцером</p>
                <p className="mt-2 text-sm italic text-slate-600">Цей коментар більше не відображається.</p>
              </article>
              <article className="rounded-xl bg-[#0b1013] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">Nightwarden</span>
                  <time className="text-xs text-slate-500">18:15</time>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Збираємося біля входу до підземелля.</p>
                <div className="mt-3 flex gap-3">
                  <button type="button" className="text-xs text-slate-500 hover:text-amber-200">Поскаржитися</button>
                  <button type="button" className="text-xs text-slate-500 hover:text-amber-200">Приховати</button>
                </div>
              </article>
            </div>
            <div className="mt-5 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-500">Напишіть коментар…</div>
            <button type="button" className="mt-3 w-full rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-400">Надіслати</button>
          </aside>
        </section>
      </div>
    </main>
  );
}

function RosterCard({
  title,
  people,
  officerControls,
}: {
  title: string;
  people: { name: string; role: string; rank?: string }[];
  officerControls: boolean;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#11191d] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold">{title} <span className="text-sm font-medium text-slate-500">{people.length}</span></h2>
        {officerControls && <button type="button" className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-amber-300/50 hover:text-amber-200">＋ Додати учасника</button>}
      </div>
      <ul className="mt-4 divide-y divide-white/5">
        {people.map((person) => (
          <li key={person.name} className="flex flex-wrap items-center justify-between gap-3 py-3">
            <div>
              <p className="text-sm font-semibold">{person.name}</p>
              <p className="mt-1 text-xs text-slate-500">{person.role}{person.rank ? ` · ${person.rank}` : ""}</p>
            </div>
            {officerControls && <div className="flex gap-2">
              <button type="button" aria-label={`Перемістити ${person.name}`} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400 hover:text-white">↕</button>
              <button type="button" aria-label={`Прибрати ${person.name}`} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400 hover:text-rose-300">×</button>
            </div>}
          </li>
        ))}
      </ul>
    </section>
  );
}
