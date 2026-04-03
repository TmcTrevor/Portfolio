import type { Experience } from '@/tools/types/Experience'
import { cx, DatePill, ImpactCallout, TimelineNode } from './Uihelpers'
import CategoryBlock from './CategoryBlock'

function ExperienceCard({
  exp,
  isActive,
  dateTone,
  position = 'right',
}: {
  exp: Experience
  isActive: boolean
  dateTone: 'primary' | 'muted'
  position?: 'left' | 'right'
}) {
  const cardInner = (
    <div
      className={cx(
        'timeline-glass rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 group-hover:bg-surface-lighter/60',
        isActive &&
          'border-l-4 border-l-primary hover:shadow-2xl hover:shadow-primary/10',
      )}
    >
      <div className="mb-4">
        <DatePill label={exp.dateLabel} tone={dateTone} />
      </div>

      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3
              className={cx(
                'font-bold text-white group-hover:text-primary transition-colors',
                isActive
                  ? 'text-2xl'
                  : exp.roleType === 'Internship'
                    ? 'text-lg'
                    : 'text-xl',
              )}
            >
              {exp.title}
            </h3>
            <p
              className={cx(
                'text-slate-300 font-medium mt-1',
                isActive
                  ? 'text-lg'
                  : exp.roleType === 'Internship'
                    ? 'text-sm'
                    : 'text-base',
              )}
            >
              {exp.company}
            </p>
          </div>

          <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-white/10 rounded bg-white/5">
            {exp.roleType}
          </span>
        </div>
      </div>

      <ImpactCallout icon={exp.keyImpactIcon} tone={exp.keyImpactTone}>
        {exp.keyImpact}
      </ImpactCallout>

      <div className="space-y-4">
        {exp.groups?.map((g) => (
          <CategoryBlock key={g.title} group={g} />
        ))}

        {exp.bullets?.length ? (
          <ul className="space-y-2">
            {exp.bullets.map((b, idx) => (
              <li
                key={idx}
                className="flex gap-3 text-slate-400 text-sm leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )

  return (
    <div className="relative group">
      {/* Mobile: stacked with left rail */}
      <div className="md:hidden">
        <TimelineNode variant={isActive ? 'active' : 'normal'} />
        <div className="ml-12">{cardInner}</div>
      </div>

      {/* Desktop: zigzag grid */}
      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:items-start md:gap-4">
        {position === 'left' ? (
          <>
            {cardInner}
            <div className="flex justify-center pt-6">
              <TimelineNode variant={isActive ? 'active' : 'normal'} />
            </div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="flex justify-center pt-6">
              <TimelineNode variant={isActive ? 'active' : 'normal'} />
            </div>
            {cardInner}
          </>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
