export function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function SectionTitle({ step, title }: { step: string; title: string }) {
  return (
    <h2 className="text-3xl font-bold mb-20 flex items-center gap-4">
      <span className="text-primary text-2xl font-mono">{step}</span>
      {title}
    </h2>
  )
}

export function TimelineRail() {
  return (
    <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/20 to-transparent hidden md:block" />
  )
}

export function DatePill({
  label,
  tone = 'primary',
  mobile = false,
}: {
  label: string
  tone?: 'primary' | 'muted'
  mobile?: boolean
}) {
  const base = 'font-mono font-medium rounded-full'
  const desktop = 'text-sm px-4 py-1.5'
  const mobileCls = 'text-xs px-3 py-1'

  const toneCls =
    tone === 'primary'
      ? 'text-primary bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(43,140,238,0.2)]'
      : 'text-slate-400 bg-white/5'

  return (
    <span className={cx(base, mobile ? mobileCls : desktop, toneCls)}>
      {label}
    </span>
  )
}

export function TimelineNode({ variant }: { variant: 'active' | 'normal' }) {
  if (variant === 'active') {
    return (
      <div className="absolute left-6 top-8 md:relative md:left-0 md:top-2 flex justify-center items-center">
        <div className="w-4 h-4 rounded-full bg-background-dark border-[3px] border-primary shadow-[0_0_10px_rgba(43,140,238,0.6)] z-20 group-hover:scale-125 transition-transform duration-300" />
        <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse-slow z-10" />
      </div>
    )
  }

  return (
    <div className="absolute left-6 top-8 md:relative md:left-0 md:top-2 flex justify-center items-center">
      <div className="w-3 h-3 rounded-full bg-background-dark border-2 border-slate-600 group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-20" />
    </div>
  )
}

export function ImpactCallout({
  icon,
  tone,
  children,
}: {
  icon: string
  tone: 'primary' | 'blue' | 'muted'
  children: React.ReactNode
}) {
  const toneIcon =
    tone === 'primary'
      ? 'text-primary'
      : tone === 'blue'
        ? 'text-blue-400'
        : 'text-slate-400'

  const toneLabel =
    tone === 'primary'
      ? 'text-primary'
      : tone === 'blue'
        ? 'text-blue-400'
        : 'text-slate-400'

  return (
    <div className="mb-6 pb-6 border-b border-white/5 relative">
      <div className="flex gap-3 items-start">
        <span
          className={cx('material-symbols-outlined mt-0.5 text-xl', toneIcon)}
        >
          {icon}
        </span>
        <div>
          <p
            className={cx(
              'text-sm font-bold uppercase tracking-wide mb-1',
              toneLabel,
            )}
          >
            Key Impact
          </p>
          <div className="text-slate-200 font-medium leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
