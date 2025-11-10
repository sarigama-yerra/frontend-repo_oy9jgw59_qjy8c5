import { useEffect, useRef } from 'react'

export default function BackgroundFX() {
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    let raf
    let t = 0
    const animate = () => {
      t += 0.002
      el.style.backgroundPosition = `${Math.sin(t) * 20}px ${Math.cos(t) * 20}px`
      raf = requestAnimationFrame(animate)
    }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced) raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-0">
      <div ref={gridRef} className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #6ee7b7 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />
      <div className="absolute inset-0 mix-blend-screen opacity-[0.05] crt-scan"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,0,0,0.05),transparent_60%)]"/>
    </div>
  )
}
