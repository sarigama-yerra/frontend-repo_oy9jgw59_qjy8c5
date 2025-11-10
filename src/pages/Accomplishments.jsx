import Navbar from '../Navbar'

const milestones = [
  { date: '2024', text: '30 simulated breaches — disclosed responsibly.' },
  { date: '2023', text: '15 adversary emulations with purple-team reviews.' },
  { date: '2022', text: 'Launched cinematic red team showcase with legal-only pipeline.' },
]

export default function Accomplishments(){
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">What We Accomplished</h1>
        <p className="text-gray-400 mt-2">All figures are fictional and illustrative.</p>
        <ol className="mt-8 relative border-l border-white/10">
          {milestones.map((m) => (
            <li key={m.date} className="ml-6 mb-8">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-emerald-400"/>
              <time className="text-xs text-gray-400">{m.date}</time>
              <p className="mt-1">{m.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <Metric kpi="0" label="Real exploits"/>
          <Metric kpi="100%" label="Ethical intent"/>
          <Metric kpi="∞" label="Aesthetic threat"/>
        </div>
      </main>
    </div>
  )
}

function Metric({ kpi, label }){
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-bold text-cyan-300">{kpi}</div>
      <div className="text-gray-400 mt-1 text-sm">{label}</div>
    </div>
  )
}
