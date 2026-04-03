const AboutMe = () => {
  return (
    <section
      className="py-24 bg-linear-to-b text-left from-background-dark to-surface-dark/30 relative"
      id="about"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary text-2xl font-mono">01.</span>
          About Me
        </h2>
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>
              Hello, I’m Mohamed. I’m a{' '}
              <span className="text-slate-200 font-medium border-b border-primary/50">
                Full-Stack Engineer
              </span>{' '}
              with 3+ years building production systems at TickTickTrader, a
              fintech company. I specialize in backend architecture, distributed
              systems, and real-time data pipelines.
            </p>
            <p>
              At TickTickTrader, I worked across the stack — building React
              frontends, architecting{' '}
              <span className="text-slate-200 font-medium border-b border-primary/50">
                Node.js APIs
              </span>
              , designing data pipelines, and managing{' '}
              <span className="text-slate-200 font-medium border-b border-primary/50">
                real-time systems.
              </span>{' '}
              I learned that great backend engineering means obsessing over
              performance, reliability, and scalability. I care deeply about
              code quality and systems that don’t break at 2 AM.
            </p>
            <p>
              I’ve also worked as a freelancer building Discord bots with
              external API integrations, trained at{' '}
              <span className="text-slate-200 font-medium border-b border-primary/50">
                1337 School (42 Network)
              </span>
              , and completed coursework in system design and distributed
              systems. Each experience reinforced one thing: shipping reliable
              code beats perfect code.
            </p>
            <p>
              My engineering philosophy is simple:{' '}
              <strong className="text-white">
                Build it right, keep it simple.
              </strong>{' '}
              I write code that scales, code that’s readable six months later,
              and code that doesn’t wake me up at 2 AM with an outage.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="w-full aspect-square rounded-lg overflow-hidden border border-white/10 bg-surface-dark">
              <img
                alt="Close up workspace with code on monitor"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2raKM_2uaCqYyUS4niueOAEmxgUFuFzzsaRaQBHuPHpp_eJOvC8efAnFQJcr9DQekFYM-5HzsHuUfirYuZIrHnHPvv9OpYyL3btYOcUV4PGcldJWdb_yIQv3OJndgyjSgRFm7IxKaT2kwDMCqNlspATJdhxi4bqi7CuR1dfzt9uRct4-LTsKpZvoH5pq-H619oibTKnfp3g1Vul5px2J28MEZP-ukaC_8FO10R8oPDKIupwI0g4ZLk4-NAh2mfOJLPijyvCHf8wY"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
