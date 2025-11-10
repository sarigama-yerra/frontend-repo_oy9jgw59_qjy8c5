import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Our Portfolio' },
  { to: '/accomplishments', label: 'What We Accomplished' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Engage' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-[#05060acc]/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-cyan-500 to-emerald-400 shadow-inner"></div>
          <span className="text-sm tracking-widest uppercase text-cyan-300">Anonymous Operator</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({isActive}) => `text-sm text-gray-300 hover:text-cyan-300 transition ${isActive ? 'text-cyan-300' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/legal" className="text-xs text-amber-300/80 hover:text-amber-300">Legal</Link>
        </nav>
        <button className="md:hidden text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#05060a]">
          <div className="px-4 py-3 flex flex-col">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-2 text-sm text-gray-300 hover:text-cyan-300">
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/legal" onClick={() => setOpen(false)} className="py-2 text-xs text-amber-300/80 hover:text-amber-300">Legal</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
