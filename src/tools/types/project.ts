type ProjectLink = {
  kind: 'github' | 'live'
  href: string
}

type Project = {
  id: string
  type: 'featured' | 'compact'
  status?: 'completed' | 'in-progress'
  title: string
  subtitleTag: string
  role?: string
  highlight: string
  description: string
  image?: {
    src: string
    alt: string
  }
  tech: string[]
  bullets?: string[]
  cta: {
    label: string
    onClickHref?: string
  }
  links?: ProjectLink[]
}
export type { Project, ProjectLink }
