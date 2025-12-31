const Projects = () => {
  return (
    <section className="py-32 bg-surface-dark/20" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary text-2xl font-mono">04.</span>
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="group relative bg-surface-lighter rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all z-10"></div>
              <img
                alt="Dashboard analytics interface showing charts and graphs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3UPLqepXltZVwt2ygor-YtefLCL-CPDH11ImdliyGCbW5NmUNiBUvuh8jNefp7YIKzKrXEZ2b_GhUhjXsqyjbmTEg-ZO3gE6gV6O5N4JWYb5wyywXTf9eYfVfAAlrfqSxWRCIY8onQMUfneIVOiBh-2-Osv73xlK_N8zFPOfDvVZXU7P7BoZCgBVG1cshu93kGp8CBJQJ7Sr5tLpQ1z9ttV9sGwOEiHZ1j3OQqTehL2kabq0Q1yDKyBF2hsjf0kxJutHM3AjFHI4"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-md border border-white/10">
                  Analytics Platform
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  OmniDash
                </h3>
                <div className="flex gap-4">
                  <a
                    className="text-slate-400 hover:text-white transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">code</span>
                  </a>
                  <a
                    className="text-slate-400 hover:text-white transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="text-slate-400">
                  Role:{' '}
                  <span className="text-slate-200 font-medium">
                    Lead Frontend Engineer
                  </span>
                </span>
                <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                <span className="text-slate-400 italic">
                  Event-Driven Architecture
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                A real-time analytics dashboard designed for high-volume
                e-commerce data. It processes 10k+ events/sec and provides
                actionable insights through dynamic visualizations.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20">
                    React
                  </span>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20">
                    D3.js
                  </span>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20">
                    Firebase
                  </span>
                </div>
                <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:border-primary/30 group-hover:text-primary">
                  View Case Study{' '}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="group relative bg-surface-lighter rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all z-10"></div>
              <img
                alt="E-commerce shopping cart interface on mobile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQXkz1GGX5Dc1fsqwADRt0NUtp5IXdbK8Sehk3Y9bUVV5uXlQNdG0oPvLla4XvtoHCbGzmSzt4P009baZMzF_675UE-uXA1YxRP_SSDgZ2b09tAF6A_JZfUkaHVP_aWXjkVDyGAnYxRVfc636gNn0uNVCw50S95gDRGO7LusysdKies_eEDMu5DaXHRD-oWJiDEaB9C2LAbZ-ZBDdSIEUhjxtVW7Y0mPA5BWrnMI-b3fmDoL5w8WutSn2uROWK_slYxYE3oRPsJ2s"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-md border border-white/10">
                  API Infrastructure
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  ShopFlow API
                </h3>
                <div className="flex gap-4">
                  <a
                    className="text-slate-400 hover:text-white transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">code</span>
                  </a>
                  <a
                    className="text-slate-400 hover:text-white transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="text-slate-400">
                  Role:{' '}
                  <span className="text-slate-200 font-medium">
                    Backend Architect
                  </span>
                </span>
                <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                <span className="text-slate-400 italic">
                  Headless Architecture
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                A robust, headless e-commerce API built for massive scalability.
                Features include multi-tenant support, automated inventory
                syncing, and secure payment processing.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20">
                    Node.js
                  </span>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20">
                    PostgreSQL
                  </span>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20">
                    Docker
                  </span>
                </div>
                <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:border-primary/30 group-hover:text-primary">
                  View Architecture{' '}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="group relative bg-surface-lighter/50 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 flex items-center p-4 gap-6 hover:bg-surface-lighter">
            <div className="w-32 h-24 shrink-0 rounded-lg overflow-hidden relative hidden sm:block">
              <img
                alt="Social media app interface showing user feed"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3AyLyangAwt9BjD_h-Wp51ARKCo4Pv6fL5nVC_09SbUmoMykXU0iLAkwGa-uTlF1Cuw_bkzktmxfZVF5CoksTQzzD64Uo3quS6MsyCJCXzaGkw-qXG09pcISsH6xUFP7wJNrAwKheKZML35SH5IQRgCyaEcWWVOkiz1pVsyCZqirqnQDrIMlksXVotKPC7hXnjAYXtvHFTP3zPX2pMAIfg01h-jzlQ7H2xn79oBlb1jwxFJsX1CxZM8gIet22AfE3pwxBIoAr_nE"
              />
            </div>
            <div className="row">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-white group-hover:text-primary">
                  Connectify
                </h3>
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-slate-500">
                    Vue.js
                  </span>
                  <span className="text-xs font-mono text-slate-500">AWS</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-1 mb-2 line-clamp-1">
                Professional social networking graph with real-time features.
              </p>
              <a
                className="text-xs text-primary hover:text-white font-bold flex items-center gap-1"
                href="#"
              >
                View Project{' '}
                <span className="material-symbols-outlined text-[10px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
