export type SkillLevel =
  | 'Advanced'
  | 'Strong'
  | 'Comfortable'
  | 'Occasional'
  | 'Working Knowl.'

export type Skill = {
  name: string
  level: SkillLevel
  icon: React.ReactNode | string
  pulse?: boolean
}

export const LEVEL_META: Record<
  SkillLevel,
  { labelClass: string; filled: number; pulse?: boolean }
> = {
  Advanced: { labelClass: 'text-primary', filled: 4, pulse: true },
  Strong: { labelClass: 'text-blue-300', filled: 3 },
  Comfortable: { labelClass: 'text-slate-400', filled: 2 },
  Occasional: { labelClass: 'text-slate-500', filled: 1 },
  'Working Knowl.': { labelClass: 'text-slate-500', filled: 1 },
}
