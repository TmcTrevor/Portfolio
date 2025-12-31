import type { Project } from '@/tools/types/project'

function CompactProjectRow({ p }: { p: Project }) {
  return (
    <div className="group relative bg-surface-lighter/50 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 flex items-center p-4 gap-6 hover:bg-surface-lighter">
      <div className="w-32 h-24 shrink-0 rounded-lg overflow-hidden relative hidden sm:block">
        <img
          alt={p.image.alt}
          className="w-full h-full object-cover"
          src={p.image.src}
        />
      </div>

      <div className="grow">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-white group-hover:text-primary">
            {p.title}
          </h3>
          <div className="flex gap-2">
            {p.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-mono text-slate-500">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-slate-400 text-sm mt-1 mb-2 line-clamp-1">
          {p.description}
        </p>

        <a
          className="text-xs text-primary hover:text-white font-bold flex items-center gap-1"
          href={p.cta.onClickHref ?? '#'}
        >
          {p.cta.label}{' '}
          <span className="material-symbols-outlined text-[10px]">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  )
}

export default CompactProjectRow
