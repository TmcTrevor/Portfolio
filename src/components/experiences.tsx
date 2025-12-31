const Experiences = () => {
  return (
    <section
      className="py-32 bg-linear-to-b from-surface-dark/10 to-surface-dark/40 relative"
      id="experiences"
    >
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/20 to-transparent transform md:-translate-x-1/2 hidden md:block"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-20 flex items-center gap-4">
          <span className="text-primary text-2xl font-mono">03.</span>
          Professional Experience
        </h2>
        <div className="space-y-16">
          <div className="relative group md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
            <div className="hidden md:flex justify-end pt-2">
              <span className="font-mono text-sm text-primary font-medium px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(43,140,238,0.2)]">
                2022 – Present
              </span>
            </div>
            <div className="absolute left-6 top-8 md:relative md:left-0 md:top-2 flex justify-center items-center">
              <div className="w-4 h-4 rounded-full bg-background-dark border-[3px] border-primary shadow-[0_0_10px_rgba(43,140,238,0.6)] z-20 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse-slow z-10"></div>
            </div>
            <div className="ml-12 md:ml-0 timeline-glass rounded-2xl p-6 md:p-8 border-l-4 border-l-primary hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group-hover:bg-surface-lighter/60">
              <div className="md:hidden mb-4">
                <span className="font-mono text-xs text-primary font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  2022 – Present
                </span>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      Senior Software Engineer
                    </h3>
                    <p className="text-lg text-slate-300 font-medium mt-1">
                      TechGlobal Inc.
                    </p>
                  </div>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-white/10 rounded bg-white/5">
                    Full-time
                  </span>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-white/5 relative">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-xl">
                    rocket_launch
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary uppercase tracking-wide mb-1">
                      Key Impact
                    </p>
                    <p className="text-slate-200 font-medium leading-relaxed">
                      Reduced server costs by{' '}
                      <span className="text-white font-bold">30%</span> while
                      scaling infrastructure to support{' '}
                      <span className="text-white font-bold">1M+</span> daily
                      active users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-slate-500 text-sm">
                      architecture
                    </span>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Architecture &amp; Performance
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                      <span>
                        Led migration of legacy monolith to microservices using
                        Node.js &amp; Docker.
                      </span>
                    </li>
                    <li className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                      <span>
                        Optimized system latency by 40% via strategic Redis
                        caching implementation.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-slate-500 text-sm">
                      group
                    </span>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Leadership
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                      <span>
                        Mentored 3 junior developers and established code review
                        standards.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
            <div className="hidden md:flex justify-end pt-2">
              <span className="font-mono text-sm text-slate-400 px-3 py-1">
                2020 – 2022
              </span>
            </div>
            <div className="absolute left-6 top-8 md:relative md:left-0 md:top-2 flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-background-dark border-2 border-slate-500 group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-20"></div>
            </div>
            <div className="ml-12 md:ml-0 timeline-glass rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 group-hover:bg-surface-lighter/60">
              <div className="md:hidden mb-4">
                <span className="font-mono text-xs text-slate-400 font-medium px-3 py-1 rounded-full bg-white/5">
                  2020 – 2022
                </span>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      Full Stack Developer
                    </h3>
                    <p className="text-base text-slate-300 font-medium mt-1">
                      Creative Solutions Agency
                    </p>
                  </div>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-white/10 rounded bg-white/5">
                    Full-time
                  </span>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-white/5 relative">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-blue-400 mt-0.5 text-xl">
                    bolt
                  </span>
                  <div>
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-1">
                      Key Impact
                    </p>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Delivered <span className="text-white">15+</span>{' '}
                      high-performance client projects with a{' '}
                      <span className="text-white">100%</span> on-time delivery
                      rate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-slate-500 text-sm">
                      code
                    </span>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Development
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                      <span>
                        Built responsive websites using React, Next.js, and
                        headless CMS.
                      </span>
                    </li>
                    <li className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                      <span>
                        Translated Figma prototypes into pixel-perfect
                        interactive UI components.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
            <div className="hidden md:flex justify-end pt-2">
              <span className="font-mono text-sm text-slate-500 px-3 py-1">
                Summer 2019
              </span>
            </div>
            <div className="absolute left-6 top-8 md:relative md:left-0 md:top-2 flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-background-dark border-2 border-slate-600 group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-20"></div>
            </div>
            <div className="ml-12 md:ml-0 timeline-glass rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 group-hover:bg-surface-lighter/60">
              <div className="md:hidden mb-4">
                <span className="font-mono text-xs text-slate-500 font-medium px-3 py-1 rounded-full bg-white/5">
                  Summer 2019
                </span>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      Junior Developer Intern
                    </h3>
                    <p className="text-sm text-slate-300 font-medium mt-1">
                      StartUp X
                    </p>
                  </div>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-white/10 rounded bg-white/5">
                    Internship
                  </span>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-white/5 relative">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-slate-400 mt-0.5 text-xl">
                    trending_up
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">
                      Key Impact
                    </p>
                    <p className="text-slate-400 font-medium leading-relaxed">
                      Accelerated feature deployment cycles by{' '}
                      <span className="text-white">20%</span> through automated
                      testing scripts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                    <span>
                      Assisted in building RESTful APIs using Python Flask.
                    </span>
                  </li>
                  <li className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                    <span>Wrote unit tests achieving 85% code coverage.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-white/5">
          <h3 className="text-xl font-bold mb-10 flex items-center gap-3 text-slate-200">
            <span className="material-symbols-outlined text-primary">
              school
            </span>
            Academic Background
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="timeline-glass p-6 rounded-xl border border-white/5 flex flex-col hover:bg-white/5 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">
                  school
                </span>
              </div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                  2020 - 2022
                </span>
                <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                  Parallel to Internship
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1 relative z-10">
                M.S. Computer Science
              </h4>
              <p className="text-slate-400 text-sm mb-4 relative z-10">
                Stanford University
              </p>
              <div className="mt-auto relative z-10">
                <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Specialization in AI &amp; Distributed Systems
                </p>
              </div>
            </div>
            <div className="timeline-glass p-6 rounded-xl border border-white/5 flex flex-col hover:bg-white/5 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">book</span>
              </div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                  2016 - 2020
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1 relative z-10">
                B.S. Software Engineering
              </h4>
              <p className="text-slate-400 text-sm mb-4 relative z-10">
                University of Technology
              </p>
              <div className="mt-auto relative z-10">
                <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Graduated with Honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experiences
