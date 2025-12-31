import type { Academic } from '@/tools/types/Academic'

function AcademicCard({ item }: { item: Academic }) {
  return (
    <div className="timeline-glass p-6 rounded-xl border border-white/5 flex flex-col hover:bg-white/5 transition-colors relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-6xl">{item.icon}</span>
      </div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
          {item.dateLabel}
        </span>

        {item.badge ? (
          <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
            {item.badge}
          </span>
        ) : null}
      </div>

      <h4 className="text-lg font-bold text-white mb-1 relative z-10">
        {item.degree}
      </h4>
      <p className="text-slate-400 text-sm mb-4 relative z-10">{item.school}</p>

      {item.note ? (
        <div className="mt-auto relative z-10">
          <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full" />
            {item.note}
          </p>
        </div>
      ) : null}
    </div>
  )
}
export default AcademicCard
