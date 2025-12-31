import type { Skill } from './skill'

export type Category = {
  title: string
  headerIcon: string // material-symbols-outlined name
  skills: Skill[]
}
