import { LEVEL_META, type SkillLevel } from '@/tools/types/skill'

function LevelBars({ level, pulse }: { level: SkillLevel; pulse?: boolean }) {
  const meta = LEVEL_META[level]
  return (
    <div className="flex flex-col items-end gap-1">
      <span
        className={`text-[10px] uppercase font-bold tracking-wider ${meta.labelClass}`}
      >
        {level}
      </span>

      <div
        className={`flex gap-1 ${pulse || meta.pulse ? 'animate-pulse' : ''}`}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-4 rounded-sm ${
              i < meta.filled ? 'bg-primary' : 'bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
export default LevelBars
