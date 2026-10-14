import Link from "next/link";

const members = [
  { name: "Nightwarden", className: "Вартовий", role: "Танк", rank: "Офіцер", initials: "NW", color: "text-sky-300 bg-sky-300/10" },
  { name: "Lunaria", className: "Оракул", role: "Хілер", rank: "Ветеран", initials: "LU", color: "text-violet-300 bg-violet-300/10" },
  { name: "Ashbringer", className: "Мисливець", role: "ДПС", rank: "Ветеран", initials: "AB", color: "text-rose-300 bg-rose-300/10" },
  { name: "Thornshield", className: "Захисник", role: "Танк", rank: "Еліта", initials: "TS", color: "text-sky-300 bg-sky-300/10" },
  { name: "Starweaver", className: "Жрець", role: "Хілер", rank: "Учасник", initials: "SW", color: "text-violet-300 bg-violet-300/10" },
  { name: "Voidstriker", className: "Чарівник", role: "ДПС", rank: "Учасник", initials: "VS", color: "text-rose-300 bg-rose-300/10" },
  { name: "Ironhowl", className: "Берсерк", role: "ДПС", rank: "Новобранець", initials: "IH", color: "text-rose-300 bg-rose-300/10" },
];

const roles = ["Усі ролі", "Танк", "Хілер", "ДПС"];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#0b1013] px-4 py-6 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Shadow Vanguard</p>
            <h1 className="mt-1 text-2xl font-bold">Склад гільдії</h1>
          </div>
          <nav aria-label="Навігація" className="flex gap-3 text-sm">
            <Link href="/" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Головна</Link>
            <Link href="/events" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">Розклад подій</Link>
          </nav>
        </header>
        <section className="py-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Учасники та їхні ролі в бойовому загоні</p>
              <h2 className="mt-2 text-3xl font-bold">Наші герої <span className="text-lg font-medium text-slate-500">42 учасники</span></h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Фільтр за роллю">
              {roles.map((role, index) => (
                <button key={role} type="button" aria-pressed={index === 0} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${index === 0 ? "border-amber-300 bg-amber-300 text-slate-950" : "border-white/10 text-slate-300 hover:border-amber-300/50 hover:text-white"}`}>
                  {role}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#11191d]">
            <div className="hidden grid-cols-[2fr_1.2fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:grid">
              <span>Учасник</span><span>Клас</span><span>Роль</span><span>Ранг</span>
            </div>
            <ul className="divide-y divide-white/5">
              {members.map((member) => (
                <li key={member.name} className="grid gap-3 px-5 py-4 sm:grid-cols-[2fr_1.2fr_1fr_1fr] sm:items-center sm:gap-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${member.color}`}>{member.initials}</span>
                    <span>
                      <span className="block font-semibold">{member.name}</span>
                      <span className="text-xs text-slate-500">Рівень 60</span>
                    </span>
                  </div>
                  <span className="text-sm text-slate-300">{member.className}</span>
                  <span className="w-fit rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{member.role}</span>
                  <span className="text-sm text-amber-200">{member.rank}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
