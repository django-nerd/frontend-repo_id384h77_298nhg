import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'}`

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white font-bold tracking-tight">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 mr-1 animate-pulse" aria-hidden />
            Bitwap
          </Link>
          <div className="hidden sm:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/download" className={navLinkClass}>Download</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/privacy" className={navLinkClass}>Privacy</NavLink>
            <NavLink to="/terms" className={navLinkClass}>Terms</NavLink>
          </div>
          <div className="sm:hidden">
            <a href="/download" className="px-3 py-1.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-semibold">Get Bitwap</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
