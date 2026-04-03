import type { Project, ProjectLink } from '@/tools/types/project'

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function IconLink({ kind, href, disabled }: { kind: ProjectLink['kind']; href: string; disabled?: boolean }) {
  const icon = kind === 'github' ? 'code' : 'open_in_new'
  const label = kind === 'github' ? 'Source code' : 'Live demo'
  return (
    <a
      className={cx(
        'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all',
        disabled
          ? 'opacity-40 pointer-events-none text-slate-500 border-white/5'
          : 'text-slate-300 border-white/10 hover:text-white hover:border-primary/40 hover:bg-primary/5',
      )}
      href={disabled ? undefined : href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <span className="material-symbols-outlined text-sm">{icon}</span>
      {kind === 'github' ? 'GitHub' : 'Live'}
    </a>
  )
}

function TechTag({ label }: { label: string }) {
  return (
    <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
      {label}
    </span>
  )
}

function FeaturedProjectCard({ p }: { p: Project }) {
  const inProgress = p.status === 'in-progress'

  return (
    <div
      className={cx(
        'group relative rounded-2xl border transition-all duration-300 flex flex-col h-full',
        'bg-surface-lighter/40 backdrop-blur-sm',
        inProgress
          ? 'opacity-60 border-white/5'
          : 'border-white/5 hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10',
      )}
    >
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex justify-between items-start gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3
                className={cx(
                  'text-xl font-bold transition-colors',
                  inProgress
                    ? 'text-slate-400'
                    : 'text-white group-hover:text-primary',
                )}
              >
                {p.title}
              </h3>
              {inProgress && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  In Progress
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500 font-mono">{p.subtitleTag}</p>
          </div>

          {p.links?.length ? (
            <div className="flex gap-2 shrink-0">
              {p.links.map((l) => (
                <IconLink key={l.kind} kind={l.kind} href={l.href} disabled={inProgress} />
              ))}
            </div>
          ) : null}
        </div>

        <p className="text-sm text-primary/80 font-medium italic mb-4">{p.highlight}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.description}</p>
      </div>

      {/* Bullets */}
      {p.bullets?.length ? (
        <div className="px-6 mb-5">
          <ul className="space-y-2">
            {p.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Footer */}
      <div className="mt-auto px-6 pb-6 pt-4 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard
