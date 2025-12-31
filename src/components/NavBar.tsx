import * as React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

const navItems = [
  { label: 'Home', hash: 'home' },
  { label: 'About', hash: 'about' },
  { label: 'Skills', hash: 'skills' },
  { label: 'Experience', hash: 'experiences' },
  { label: 'Projects', hash: 'projects' },
] as const

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  // TanStack Router current location (works with file-based routing)
  const location = useRouterState({ select: (s) => s.location })
  const activeHash = (location.hash || '').replace('#', '')

  // Close mobile menu on navigation (including hash changes)
  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // ESC to close
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Prevent background scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-0 w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          hash="home"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-md"
        >
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">terminal</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Mohamed <span className="text-primary">Khames</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              activeHash === item.hash || (!activeHash && item.hash === 'home')
            return (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className={cx(
                  'text-sm font-medium transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-slate-300 hover:text-primary',
                )}
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            to="/"
            hash="contact"
            className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden text-white p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cx(
          'md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        {/* Overlay */}
        <div
          className={cx(
            'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          id="mobile-menu"
          className={cx(
            'fixed top-16 left-0 right-0 z-50 mx-4 rounded-xl border border-white/10 bg-surface-dark/95',
            'transition-all duration-200',
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
          )}
          role="dialog"
          aria-modal="true"
        >
          <div className="p-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                activeHash === item.hash ||
                (!activeHash && item.hash === 'home')
              return (
                <Link
                  key={item.hash}
                  to="/"
                  hash={item.hash}
                  className={cx(
                    'px-3 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-white/5 text-primary'
                      : 'text-slate-200 hover:bg-white/5 hover:text-primary',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              to="/"
              hash="contact"
              className="mt-2 px-4 py-3 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
