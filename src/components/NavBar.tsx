const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">terminal</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            John<span className="text-primary">Doe</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            href="#experiences"
          >
            Experience
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-primary/20"
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <button className="md:hidden text-white p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
