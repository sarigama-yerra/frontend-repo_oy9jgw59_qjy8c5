import Navbar from '../Navbar'

const assets = [
  { name: 'AO-Brandmark.svg', desc: 'Vector logomark' },
  { name: 'AO-PressKit.pdf', desc: 'Press PDF (redacted)' },
  { name: 'AO-Globe.glb', desc: 'Low-poly network globe (placeholder)' },
  { name: 'AO-TerminalBG.png', desc: 'Ambient terminal background' }
]

export default function Media(){
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">Media / Dossier</h1>
        <p className="text-gray-400 mt-2">Mock assets for editorial use. No exploit content.</p>
        <ul className="mt-6 divide-y divide-white/10 rounded-lg border border-white/10 overflow-hidden">
          {assets.map((a)=> (
            <li key={a.name} className="flex items-center justify-between bg-white/5 px-4 py-3">
              <div>
                <div className="font-mono text-emerald-300">{a.name}</div>
                <div className="text-xs text-gray-400">{a.desc}</div>
              </div>
              <button className="text-sm text-cyan-300 hover:text-cyan-200">Download</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
