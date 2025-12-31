const TechSkill = () => {
  return (
    <section className="py-32 bg-surface-dark/20 relative" id="skills">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary text-2xl font-mono">02.</span>
          Technical Arsenal
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-1 bg-linear-to-br from-white/5 to-transparent hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
            <div className="bg-surface-lighter/60 backdrop-blur-md rounded-xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    web
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Frontend Engineering
                </h3>
              </div>
              <div className="space-y-5 grow">
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path
                          d="M12 21.364l-1.636-2.545h-2.182v-1.636l-2.545-1.636v-2.182l-2.545-1.636 2.545-1.636v-2.182l2.545-1.636v-1.636h2.182l1.636-2.545 1.636 2.545h2.182v1.636l2.545 1.636v2.182l2.545 1.636-2.545 1.636v2.182l-2.545 1.636v1.636h-2.182l-1.636 2.545zm0-8.182c.901 0 1.636-.735 1.636-1.636s-.735-1.636-1.636-1.636-1.636.735-1.636 1.636.735 1.636 1.636 1.636z"
                          opacity="0.8"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      React
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider">
                      Advanced
                    </span>
                    <div className="flex gap-1 animate-pulse">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M2 2h20v20h-20v-20zm16.5 15v-4.5h-1.5v4.5h-1.5v-6h4.5v1.5h-1.5v4.5h-1.5zm-5.5 0v-6h3v1.5h-1.5v4.5h-1.5z"></path>
                      </svg>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">
                      Strong
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <span className="font-bold text-xs">N</span>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      Next.js
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">
                      Strong
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 6c3.313 0 6-2.687 6-6 0 2.227-1.215 4.16-3.006 5.201-1.637 2.053-4.148 3.447-6.994 3.754.965 2.126 3.111 3.614 5.617 3.614 3.313 0 6-2.687 6-6 0 2.227-1.215 4.16-3.006 5.201-1.637 2.053-4.148 3.447-6.994 3.754.965 2.126 3.111 3.614 5.617 3.614 2.502 0 4.646-1.481 5.613-3.603z"></path>
                      </svg>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider">
                      Advanced
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-1 bg-linear-to-br from-white/5 to-transparent hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
            <div className="bg-surface-lighter/60 backdrop-blur-md rounded-xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    dns
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Backend &amp; APIs
                </h3>
              </div>
              <div className="space-y-5 grow">
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l-10 5.5v11l10 5.5 10-5.5v-11l-10-5.5zm0 2.268l7.5 4.125-7.5 4.125-7.5-4.125 7.5-4.125zm-8.5 6.096l7.5 4.125v8.253l-7.5-4.125v-8.253zm17 0v8.253l-7.5 4.125v-8.253l7.5-4.125z"></path>
                      </svg>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      Node.js
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">
                      Strong
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                          opacity="0.6"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      Python
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Comfortable
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <span className="material-symbols-outlined text-lg">
                        api
                      </span>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      REST APIs
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider">
                      Advanced
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <span className="material-symbols-outlined text-lg">
                        hub
                      </span>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      GraphQL
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Comfortable
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-1 bg-linear-to-br from-white/5 to-transparent hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
            <div className="bg-surface-lighter/60 backdrop-blur-md rounded-xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    database
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Databases &amp; Data
                </h3>
              </div>
              <div className="space-y-5 grow">
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <span className="material-symbols-outlined text-lg">
                        table_chart
                      </span>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">
                      Strong
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <span className="material-symbols-outlined text-lg">
                        description
                      </span>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">
                      Strong
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <span className="material-symbols-outlined text-lg">
                        bolt
                      </span>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      Redis
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Comfortable
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-1 bg-linear-to-br from-white/5 to-transparent hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
            <div className="bg-surface-lighter/60 backdrop-blur-md rounded-xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    cloud
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Cloud &amp; Infrastructure
                </h3>
              </div>
              <div className="space-y-5 grow">
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l-10 6 10 6 10-6-10-6zm0 2.2l7.5 4.5-7.5 4.5-7.5-4.5 7.5-4.5zM2 10l10 6 10-6v4l-10 6-10-6v-4z"></path>
                      </svg>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      AWS
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">
                      Strong
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M2 10h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8 4h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-12 4h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3z"></path>
                      </svg>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      Docker
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">
                      Strong
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
                      <span className="material-symbols-outlined text-lg">
                        settings_suggest
                      </span>
                    </div>
                    <span className="font-mono text-slate-200 text-sm font-medium">
                      CI/CD
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Comfortable
                    </span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                      <div className="h-1.5 w-4 rounded-sm bg-primary/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">widgets</span>{' '}
              Secondary Skills
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 rounded-lg bg-surface-lighter/30 border border-white/5 hover:border-white/20 transition-all flex flex-col gap-2 group hover:bg-surface-lighter/50">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                    code
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Vue.js
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">
                    Working Knowl.
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-surface-lighter/30 border border-white/5 hover:border-white/20 transition-all flex flex-col gap-2 group hover:bg-surface-lighter/50">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                    data_object
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Firebase
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">
                    Comfortable
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-surface-lighter/30 border border-white/5 hover:border-white/20 transition-all flex flex-col gap-2 group hover:bg-surface-lighter/50">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                    terminal
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Shell
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">
                    Comfortable
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-surface-lighter/30 border border-white/5 hover:border-white/20 transition-all flex flex-col gap-2 group hover:bg-surface-lighter/50">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                    palette
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Figma
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">
                    Occasional
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Currently Learning &amp; Exploring
            </h4>
            <div className="p-6 h-[calc(100%-2rem)] rounded-xl border border-dashed border-white/10 bg-white/2 relative overflow-hidden flex flex-col justify-center hover:border-primary/20 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-8xl">
                  school
                </span>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="px-3 py-1.5 rounded bg-surface-lighter/50 text-slate-300 text-xs font-mono border border-white/5 hover:border-primary/40 hover:text-white transition-colors cursor-default">
                  System Design
                </span>
                <span className="px-3 py-1.5 rounded bg-surface-lighter/50 text-slate-300 text-xs font-mono border border-white/5 hover:border-primary/40 hover:text-white transition-colors cursor-default">
                  Distributed Systems
                </span>
                <span className="px-3 py-1.5 rounded bg-surface-lighter/50 text-slate-300 text-xs font-mono border border-white/5 hover:border-primary/40 hover:text-white transition-colors cursor-default">
                  Rust
                </span>
                <span className="px-3 py-1.5 rounded bg-surface-lighter/50 text-slate-300 text-xs font-mono border border-white/5 hover:border-primary/40 hover:text-white transition-colors cursor-default">
                  AI/ML Models
                </span>
              </div>
              <p className="mt-4 text-slate-500 text-xs italic">
                "Expanding my horizons to understand the full stack of modern
                computing."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSkill
