export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { label: 'Обо мне', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'Контакты', id: 'contacts' },
  ]

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-20 bg-[#000000] border-t border-[#222222]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-xl text-white tracking-wider">
            VIBE
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#222222] text-center">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Vibe. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
