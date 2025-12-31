import profilePic from '../assets/mokhames.jpg'

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50 z-0"></div>
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              FULL-STACK ENGINEER - AVAILABLE FOR HIRE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl text-left font-bold leading-[1.1] tracking-tight">
            Crafting Robust{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-400">
              Software Solutions
            </span>{' '}
            that Drive Innovation and Impact.
          </h1>
          <p className="text-lg md:text-xl text-left text-slate-400 max-w-xl leading-relaxed">
            I’m a Full-Stack Engineer focused on building scalable architectures
            and intuitive user experiences — turning complex challenges into
            clean, maintainable code.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/25 flex items-center gap-2 hover:-translate-y-1"
              href="#projects"
            >
              View Projects
              <span className="material-symbols-outlined text-sm">
                arrow_downward
              </span>
            </a>
            <a
              className="px-8 py-4 bg-surface-dark border border-white/10 hover:bg-white/5 text-white font-bold rounded-lg transition-all flex items-center gap-2 hover:-translate-y-1"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-72 h-72 md:w-112.5 md:h-112.5">
            <div className="absolute top-0 right-0 w-full h-full border border-white/5 rounded-2xl rotate-6 bg-surface-dark/50 backdrop-blur-sm z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full border border-primary/20 rounded-2xl -rotate-3 z-0"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 z-10 border border-white/10 group">
              <div className="absolute inset-0 bg-linear-to-t from-background-dark/90 via-transparent to-transparent z-10"></div>
              <img
                alt="Portrait of a software engineer smiling in a modern office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-150"
                src={profilePic}
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-white/10 shadow-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined">
                    architecture
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
                    Current Focus
                  </p>
                  <p className="text-sm font-bold text-white">
                    Distributed Systems &amp; Scalability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
