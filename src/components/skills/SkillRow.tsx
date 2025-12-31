import type { Skill } from '@/tools/types/skill'
import LevelBars from './levelBars'

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center justify-between group/skill">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-surface-dark border border-white/5 flex items-center justify-center text-slate-300 skill-icon-container transition-transform duration-300">
          {skill.icon}
        </div>
        <span className="font-mono text-slate-200 text-sm font-medium">
          {skill.name}
        </span>
      </div>

      <LevelBars level={skill.level} pulse={skill.pulse} />
    </div>
  )
}

export default SkillRow
