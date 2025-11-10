import Navbar from '../Navbar'
import Hero from '../components/Hero'
import BackgroundFX from '../components/BackgroundFX'

export default function Home(){
  return (
    <div className="bg-[#05060a] text-gray-100 min-h-screen">
      <Navbar/>
      <main>
        <Hero/>
        <section className="relative py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            <Card title="Our Portfolio" to="/portfolio" desc="Fictional case studies and sanitized tags."/>
            <Card title="Accomplishments" to="/accomplishments" desc="Timeline of simulated, disclosed results."/>
            <Card title="Engage" to="/services" desc="Authorized testing only. Terms required."/>
          </div>
        </section>
      </main>
      <BackgroundFX/>
    </div>
  )
}

function Card({ title, desc, to }){
  return (
    <a href={to} className="group block rounded-lg border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 hover:bg-white/10 transition">
      <div className="text-lg font-semibold text-gray-100">{title}</div>
      <p className="mt-2 text-gray-400">{desc}</p>
      <div className="mt-4 text-cyan-300 text-sm opacity-0 group-hover:opacity-100 transition">Enter →</div>
    </a>
  )
}
