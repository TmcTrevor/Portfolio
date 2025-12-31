import type { BulletGroup } from '@/tools/types/Experience'

function CategoryBlock({ group }: { group: BulletGroup }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-slate-500 text-sm">
          {group.icon}
        </span>
        <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
          {group.title}
        </h4>
      </div>

      <ul className="space-y-2">
        {group.bullets.map((b, idx) => (
          <li
            key={idx}
            className="flex gap-3 text-slate-400 text-sm leading-relaxed"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CategoryBlock
