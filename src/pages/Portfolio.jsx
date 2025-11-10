import Navbar from '../Navbar'

const items = [
  { id: 'op-ravenfall', title: 'Operation Ravenfall', date: '2024-03-11', tags: ['Red Team', 'Firmware', 'IoT'], summary: 'Simulated multi-vector assessment across a fictional smart-factory line. All findings redacted.' },
  { id: 'op-ghostline', title: 'Ghostline Intercept', date: '2023-12-02', tags: ['Blue Team', 'Forensics', 'SOC'], summary: 'Adversary emulation with defensive tuning. Only conceptual notes provided.' },
  { id: 'op-sablegrid', title: 'Sablegrid Descent', date: '2023-07-19', tags: ['Web', 'AppSec', 'SAST'], summary: 'Static analysis theatre on a mock monorepo. Decorative code snippets only.' },
  { id: 'op-cinderveil', title: 'Cinderveil Relay', date: '2022-11-05', tags: ['Mobile', 'Reverse', 'ARM'], summary: 'Reverse-engineering performance showcase on a fabricated binary. No actionable data.' }
]

export default function Portfolio(){
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">Our Portfolio</h1>
        <p className="text-gray-400 mt-2">Fictional case studies. No real exploit content.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it)=> (
            <article key={it.id} className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition">
              <div className="aspect-video rounded bg-gradient-to-tr from-cyan-500/20 to-emerald-400/10 mb-4"/>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <div className="text-xs text-gray-400 mt-1">{new Date(it.date).toLocaleDateString()}</div>
              <p className="text-sm text-gray-300 mt-3">{it.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {it.tags.map((t)=> <span key={t} className="text-[11px] px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
