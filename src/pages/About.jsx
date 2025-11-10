import Navbar from '../Navbar'

export default function About(){
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">About / Manifesto</h1>
        <p className="mt-6 text-lg text-gray-200">I breach in silence. I see flaws where others see safety. Silently owning what you think is secure — zero trust, infinite access. In every line of code, I see betrayal. Your code betrays you — I exploit that trust. No trace. No mercy. No logs, no witnesses. Just results. Try to stop me — but the access is already mine. Hack me if you can — but I already own you. Authorized. Controlled. Feared. (Permission granted. Terms of engagement signed.)</p>
        <section className="mt-8">
          <h2 className="font-semibold">Persona</h2>
          <p className="text-gray-300 mt-2">Anonymous Operator is a fictional penetration-testing persona — a mask for lawful theatre. The aim: craft aesthetics of threat without enabling harm.</p>
        </section>
        <section className="mt-6">
          <h2 className="font-semibold">Tools-of-art (conceptual)</h2>
          <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-gray-300 text-sm">
            <li>Signal · Noise · Deception</li>
            <li>Red Team · Purple Team · Blue Team</li>
            <li>Firmware · IoT · Radio (non-operational)</li>
            <li>Web · AppSec · Static Analysis (theatrical)</li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="font-semibold">Ethos</h2>
          <p className="text-gray-300 mt-2">Legal-first. Fictionalized artifacts. No real exploits. Contact for authorized testing only.</p>
        </section>
      </main>
    </div>
  )
}
