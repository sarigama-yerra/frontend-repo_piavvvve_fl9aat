import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/services', label: 'Services' },
  { to: '/memberships', label: 'Memberships' },
  { to: '/health-benefits', label: 'Health Benefits' },
  { to: '/about', label: 'About' },
  { to: '/booking', label: 'Booking' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold">S</div>
          <div className="leading-tight">
            <p className="font-semibold text-emerald-900">Scandia Sauna</p>
            <p className="text-xs text-emerald-700/70">Relax. Rejuvenate. Restore.</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-emerald-900">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({isActive}) => `hover:text-emerald-700 transition ${isActive ? 'text-emerald-700' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/booking" className="ml-2 inline-flex items-center rounded-full bg-emerald-700 text-white px-4 py-2 hover:bg-emerald-800 transition">Book Now</Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-emerald-900" /> : <Menu className="h-6 w-6 text-emerald-900" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 border-t border-emerald-900/10">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-2 text-emerald-900">
                {item.label}
              </NavLink>
            ))}
            <Link to="/booking" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-emerald-700 text-white px-4 py-2">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}
