type ProjectLink = {
  kind: 'github' | 'live'
  href: string
}

type Project = {
  id: string
  type: 'featured' | 'compact'
  title: string
  subtitleTag: string // e.g. "Analytics Platform"
  role: string // e.g. "Lead Frontend Engineer"
  highlight: string // italic line e.g. "Event-Driven Architecture"
  description: string
  image: {
    src: string
    alt: string
  }
  tech: string[]
  cta: {
    label: string
    onClickHref?: string // keep as href for now (later can become route)
  }
  links?: ProjectLink[]
}
export type { Project, ProjectLink }
