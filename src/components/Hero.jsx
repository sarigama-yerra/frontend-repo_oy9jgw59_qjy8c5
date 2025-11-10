import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#05060a] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-cyan-300/80 mb-4">Anonymous Operator</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-100">
          I breach in silence. I see flaws where others see safety. Silently owning what you think is secure — zero trust, infinite access. In every line of code, I see betrayal. Your code betrays you — I exploit that trust. No trace. No mercy. No logs, no witnesses. Just results. Try to stop me — but the access is already mine. Hack me if you can — but I already own you. Authorized. Controlled. Feared. (Permission granted. Terms of engagement signed.)
        </h1>
        <p className="mt-6 text-gray-300/80 max-w-2xl mx-auto">
          Fictional penetration testing portfolio — cinematic, high-tech, and legally focused.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/portfolio" className="px-5 py-3 rounded-md bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-500/30 transition">View Portfolio</Link>
          <Link to="/services" className="px-5 py-3 rounded-md bg-amber-500/20 text-amber-200 border border-amber-400/30 hover:bg-amber-500/30 transition">Engage</Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05060a]/30 to-[#05060a]" />
      </div>
    </section>
  )
}
