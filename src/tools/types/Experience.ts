export type RoleType = 'Full-time' | 'Internship' | 'Part-time'

export type BulletGroup = {
  icon: string // material-symbols-outlined
  title: string
  bullets: string[]
}

export type Experience = {
  id: string
  dateLabel: string
  title: string
  company: string
  roleType: RoleType
  keyImpactIcon: string
  keyImpactTone: 'primary' | 'blue' | 'muted'
  keyImpact: React.ReactNode
  groups?: BulletGroup[]
  bullets?: string[] // simple list variant (intern)
}
