import type { Skill } from '@/tools/types/skill'

function SecondarySkillTile({ item }: { item: Skill }) {
  return (
    <div className="p-3 rounded-lg bg-surface-lighter/30 border border-white/5 hover:border-white/20 transition-all flex flex-col gap-2 group hover:bg-surface-lighter/50">
      <div className="flex justify-between items-start">
        <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
          {item.icon}
        </span>
      </div>
      <div>
        <div className="text-sm font-medium text-slate-200">{item.name}</div>
        <div className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">
          {item.level}
        </div>
      </div>
    </div>
  )
}

export default SecondarySkillTile
