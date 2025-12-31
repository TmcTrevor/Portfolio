import type { Project } from '@/tools/types/project'
// import FeaturedProjectCard from './ProjectCard'
import CompactProjectRow from './compactProject'
import FeaturedProjectsSlider from './projectsSlider'

const PROJECTS: Project[] = [
  {
    id: 'omnidash',
    type: 'featured',
    title: 'OmniDash',
    subtitleTag: 'Analytics Platform',
    role: 'Lead Frontend Engineer',
    highlight: 'Event-Driven Architecture',
    description:
      'A real-time analytics dashboard designed for high-volume e-commerce data. It processes 10k+ events/sec and provides actionable insights through dynamic visualizations.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3UPLqepXltZVwt2ygor-YtefLCL-CPDH11ImdliyGCbW5NmUNiBUvuh8jNefp7YIKzKrXEZ2b_GhUhjXsqyjbmTEg-ZO3gE6gV6O5N4JWYb5wyywXTf9eYfVfAAlrfqSxWRCIY8onQMUfneIVOiBh-2-Osv73xlK_N8zFPOfDvVZXU7P7BoZCgBVG1cshu93kGp8CBJQJ7Sr5tLpQ1z9ttV9sGwOEiHZ1j3OQqTehL2kabq0Q1yDKyBF2hsjf0kxJutHM3AjFHI4',
      alt: 'Dashboard analytics interface showing charts and graphs',
    },
    tech: ['React', 'D3.js', 'Firebase'],
    cta: { label: 'View Case Study', onClickHref: '#' },
    links: [
      { kind: 'github', href: '#' },
      { kind: 'live', href: '#' },
    ],
  },
  {
    id: 'omnidash',
    type: 'featured',
    title: 'OmniDash',
    subtitleTag: 'Analytics Platform',
    role: 'Lead Frontend Engineer',
    highlight: 'Event-Driven Architecture',
    description:
      'A real-time analytics dashboard designed for high-volume e-commerce data. It processes 10k+ events/sec and provides actionable insights through dynamic visualizations.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3UPLqepXltZVwt2ygor-YtefLCL-CPDH11ImdliyGCbW5NmUNiBUvuh8jNefp7YIKzKrXEZ2b_GhUhjXsqyjbmTEg-ZO3gE6gV6O5N4JWYb5wyywXTf9eYfVfAAlrfqSxWRCIY8onQMUfneIVOiBh-2-Osv73xlK_N8zFPOfDvVZXU7P7BoZCgBVG1cshu93kGp8CBJQJ7Sr5tLpQ1z9ttV9sGwOEiHZ1j3OQqTehL2kabq0Q1yDKyBF2hsjf0kxJutHM3AjFHI4',
      alt: 'Dashboard analytics interface showing charts and graphs',
    },
    tech: ['React', 'D3.js', 'Firebase'],
    cta: { label: 'View Case Study', onClickHref: '#' },
    links: [
      { kind: 'github', href: '#' },
      { kind: 'live', href: '#' },
    ],
  },
  {
    id: 'omnidash',
    type: 'featured',
    title: 'OmniDash',
    subtitleTag: 'Analytics Platform',
    role: 'Lead Frontend Engineer',
    highlight: 'Event-Driven Architecture',
    description:
      'A real-time analytics dashboard designed for high-volume e-commerce data. It processes 10k+ events/sec and provides actionable insights through dynamic visualizations.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3UPLqepXltZVwt2ygor-YtefLCL-CPDH11ImdliyGCbW5NmUNiBUvuh8jNefp7YIKzKrXEZ2b_GhUhjXsqyjbmTEg-ZO3gE6gV6O5N4JWYb5wyywXTf9eYfVfAAlrfqSxWRCIY8onQMUfneIVOiBh-2-Osv73xlK_N8zFPOfDvVZXU7P7BoZCgBVG1cshu93kGp8CBJQJ7Sr5tLpQ1z9ttV9sGwOEiHZ1j3OQqTehL2kabq0Q1yDKyBF2hsjf0kxJutHM3AjFHI4',
      alt: 'Dashboard analytics interface showing charts and graphs',
    },
    tech: ['React', 'D3.js', 'Firebase'],
    cta: { label: 'View Case Study', onClickHref: '#' },
    links: [
      { kind: 'github', href: '#' },
      { kind: 'live', href: '#' },
    ],
  },
  {
    id: 'omnidash',
    type: 'featured',
    title: 'OmniDash',
    subtitleTag: 'Analytics Platform',
    role: 'Lead Frontend Engineer',
    highlight: 'Event-Driven Architecture',
    description:
      'A real-time analytics dashboard designed for high-volume e-commerce data. It processes 10k+ events/sec and provides actionable insights through dynamic visualizations.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3UPLqepXltZVwt2ygor-YtefLCL-CPDH11ImdliyGCbW5NmUNiBUvuh8jNefp7YIKzKrXEZ2b_GhUhjXsqyjbmTEg-ZO3gE6gV6O5N4JWYb5wyywXTf9eYfVfAAlrfqSxWRCIY8onQMUfneIVOiBh-2-Osv73xlK_N8zFPOfDvVZXU7P7BoZCgBVG1cshu93kGp8CBJQJ7Sr5tLpQ1z9ttV9sGwOEiHZ1j3OQqTehL2kabq0Q1yDKyBF2hsjf0kxJutHM3AjFHI4',
      alt: 'Dashboard analytics interface showing charts and graphs',
    },
    tech: ['React', 'D3.js', 'Firebase'],
    cta: { label: 'View Case Study', onClickHref: '#' },
    links: [
      { kind: 'github', href: '#' },
      { kind: 'live', href: '#' },
    ],
  },
  {
    id: 'shopflow',
    type: 'featured',
    title: 'ShopFlow API',
    subtitleTag: 'API Infrastructure',
    role: 'Backend Architect',
    highlight: 'Headless Architecture',
    description:
      'A robust, headless e-commerce API built for massive scalability. Features include multi-tenant support, automated inventory syncing, and secure payment processing.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQXkz1GGX5Dc1fsqwADRt0NUtp5IXdbK8Sehk3Y9bUVV5uXlQNdG0oPvLla4XvtoHCbGzmSzt4P009baZMzF_675UE-uXA1YxRP_SSDgZ2b09tAF6A_JZfUkaHVP_aWXjkVDyGAnYxRVfc636gNn0uNVCw50S95gDRGO7LusysdKies_eEDMu5DaXHRD-oWJiDEaB9C2LAbZ-ZBDdSIEUhjxtVW7Y0mPA5BWrnMI-b3fmDoL5w8WutSn2uROWK_slYxYE3oRPsJ2s',
      alt: 'E-commerce shopping cart interface on mobile',
    },
    tech: ['Node.js', 'PostgreSQL', 'Docker'],
    cta: { label: 'View Architecture', onClickHref: '#' },
    links: [
      { kind: 'github', href: '#' },
      { kind: 'live', href: '#' },
    ],
  },
  {
    id: 'connectify',
    type: 'compact',
    title: 'Connectify',
    subtitleTag: 'Side Project',
    role: 'Full Stack Developer',
    highlight: 'Realtime Features',
    description:
      'Professional social networking graph with real-time features.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3AyLyangAwt9BjD_h-Wp51ARKCo4Pv6fL5nVC_09SbUmoMykXU0iLAkwGa-uTlF1Cuw_bkzktmxfZVF5CoksTQzzD64Uo3quS6MsyCJCXzaGkw-qXG09pcISsH6xUFP7wJNrAwKheKZML35SH5IQRgCyaEcWWVOkiz1pVsyCZqirqnQDrIMlksXVotKPC7hXnjAYXtvHFTP3zPX2pMAIfg01h-jzlQ7H2xn79oBlb1jwxFJsX1CxZM8gIet22AfE3pwxBIoAr_nE',
      alt: 'Social media app interface showing user feed',
    },
    tech: ['Vue.js', 'AWS'],
    cta: { label: 'View Project', onClickHref: '#' },
  },
]

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.type === 'featured')
  const compact = PROJECTS.filter((p) => p.type === 'compact')

  return (
    <section className="py-32 bg-surface-dark/20" id="projects">
      <div className=" mx-auto px-6">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl  font-bold mb-16 flex items-center gap-4">
            <span className="text-primary text-2xl font-mono">04.</span>
            Featured Projects
          </h2>
        </div>

        {/* 🔥 SLIDER INSTEAD OF GRID */}
        <FeaturedProjectsSlider projects={featured} />

        {/* Compact projects unchanged */}
        {compact.length ? (
          <div className="mt-16 max-w-2xl mx-auto space-y-4">
            {compact.map((p) => (
              <CompactProjectRow key={p.id} p={p} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
