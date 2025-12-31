import type { Project, ProjectLink } from '@/tools/types/project'

// function cx(...classes: Array<string | false | undefined>) {
//   return classes.filter(Boolean).join(' ')
// }

function IconLink({ kind, href }: { kind: ProjectLink['kind']; href: string }) {
  const icon = kind === 'github' ? 'code' : 'open_in_new'
  const label = kind === 'github' ? 'Source code' : 'Open project'
  return (
    <a
      className="text-slate-400 hover:text-white transition-colors"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </a>
  )
}

function TechPills({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tech.map((t) => (
        <span
          key={t}
          className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded border border-primary/20"
        >
          {t}
        </span>
      ))}
    </div>
  )
}
function FeaturedProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative bg-surface-lighter rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full hover:-translate-y-1">
      {/* image */}
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all z-10"></div>
        <img
          alt={p.image.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          src={p.image.src}
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-md border border-white/10">
            {p.subtitleTag}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
            {p.title}
          </h3>

          {p.links?.length ? (
            <div className="flex gap-4">
              {p.links.map((l) => (
                <IconLink key={l.kind} kind={l.kind} href={l.href} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-3 mb-6 text-sm">
          <span className="text-slate-400">
            Role: <span className="text-slate-200 font-medium">{p.role}</span>
          </span>
          <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
          <span className="text-slate-400 italic">{p.highlight}</span>
        </div>

        <p className="text-slate-400 leading-relaxed mb-6">{p.description}</p>

        <div className="mt-auto pt-6 border-t border-white/5">
          <TechPills tech={p.tech} />

          <a
            href={p.cta.onClickHref ?? '#'}
            className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:border-primary/30 group-hover:text-primary"
          >
            {p.cta.label}{' '}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard
