import type { Project } from '@/tools/types/project'
import FeaturedProjectCard from './ProjectCard'

const PROJECTS: Project[] = [
  {
    id: 'microshop',
    type: 'featured',
    status: 'completed',
    title: 'Microshop',
    subtitleTag: 'Microservices E-Commerce Platform',
    highlight: '9-Service Microservices Architecture',
    description:
      'A fully distributed e-commerce backend built with 9 independent Micronaut services, each handling a dedicated domain — products, orders, payments, auth, notifications, and more.',
    tech: ['Micronaut', 'Java', 'Oracle DB', 'Docker', 'Reactive', 'JWT', 'REST APIs', 'Testing'],
    bullets: [
      'Designed service boundaries and inter-service communication using REST and messaging.',
      'Implemented JWT-based authentication and authorization across all services.',
      'Used reactive programming (RxJava) for non-blocking I/O and high-throughput endpoints.',
      'Containerized all services with Docker and orchestrated with Docker Compose.',
      'Integrated Oracle DB with optimized schema design per service domain.',
      'Covered core flows with unit and integration tests for reliability.',
    ],
    cta: { label: 'View on GitHub', onClickHref: 'https://github.com/mokhames/microshop' },
    links: [{ kind: 'github', href: 'https://github.com/mokhames/microshop' }],
  },
  {
    id: 'ft_transcendence',
    type: 'featured',
    status: 'completed',
    title: 'ft_transcendence',
    subtitleTag: 'Full-Stack Web Application',
    highlight: 'Real-Time Multiplayer + WebSockets',
    description:
      'Complete full-stack web application built as part of the 1337 School (42 Network) curriculum. Delivered as a group project with real-time features and modern authentication.',
    tech: ['Web Dev', 'Full-Stack', 'WebSockets', 'MVC', 'Authentication', 'Real-time'],
    bullets: [
      'Developed both frontend and backend layers within a collaborative team environment.',
      'Implemented real-time game and chat features using WebSockets.',
      'Built user authentication with OAuth2 and JWT session handling.',
      'Designed responsive UI with a focus on accessibility and UX.',
      'Followed MVC architecture with clean separation of concerns.',
    ],
    cta: { label: 'View on GitHub', onClickHref: 'https://github.com/mokhames/ft_transcendence' },
    links: [{ kind: 'github', href: 'https://github.com/mokhames/ft_transcendence' }],
  },
  {
    id: 'webserv',
    type: 'featured',
    status: 'completed',
    title: 'webserv',
    subtitleTag: 'Custom HTTP Server Implementation',
    highlight: 'Built from Scratch in C++',
    description:
      'A fully functional HTTP/1.1 server implemented in C++ from scratch — no external HTTP libraries. Handles multiple concurrent clients, CGI execution, and static file serving.',
    tech: ['C++', 'HTTP', 'Sockets', 'Network', 'System Programming'],
    bullets: [
      'Implemented the HTTP/1.1 protocol including GET, POST, and DELETE methods.',
      'Used non-blocking I/O with select() for concurrent multi-client handling.',
      'Supported CGI execution for dynamic content generation.',
      'Handled MIME types, error pages, and chunked transfer encoding.',
      'Parsed nginx-style configuration files for flexible server setup.',
    ],
    cta: { label: 'View on GitHub', onClickHref: '#' },
    links: [{ kind: 'github', href: '#' }],
  },
  {
    id: 'discord-bot',
    type: 'featured',
    status: 'completed',
    title: 'Discord Moderation Bot',
    subtitleTag: 'Multi-Feature Bot with Slash Commands',
    highlight: 'Moderation + Giveaway System',
    description:
      'A feature-rich Discord bot combining server moderation and giveaway management in a single deployment. Built for real client servers with external API integrations.',
    tech: ['Node.js', 'Discord.js', 'Slash Commands', 'APIs', 'Cron Jobs'],
    bullets: [
      'Implemented slash commands for moderation actions: ban, kick, mute, warn, and logs.',
      'Built anti-spam detection with configurable thresholds and auto-moderation.',
      'Created a giveaway system with cron-based scheduling and winner selection.',
      'Integrated external APIs for enriched bot responses and data lookups.',
      'Deployed with persistent storage for user infraction history.',
    ],
    cta: { label: 'View on GitHub', onClickHref: '#' },
    links: [{ kind: 'github', href: '#' }],
  },
  {
    id: 'portfolio-crm',
    type: 'featured',
    status: 'in-progress',
    title: 'Portfolio CRM',
    subtitleTag: 'Full-Stack CRM Application',
    highlight: 'FastAPI Backend — API-Driven Architecture',
    description:
      'A CRM application powering this portfolio with dynamic data management. Currently transitioning to a fully API-driven architecture with a FastAPI backend.',
    tech: ['FastAPI', 'Python', 'REST APIs', 'Database', 'Full-Stack'],
    bullets: [
      'Designing a RESTful API with FastAPI for portfolio content management.',
      'Implementing database schema for projects, experiences, and contact submissions.',
      'Building authentication for secure admin access to the CRM dashboard.',
      'Transitioning frontend to consume dynamic data from the API layer.',
    ],
    cta: { label: 'View on GitHub', onClickHref: 'https://github.com/mokhames/portfolio-crm' },
    links: [{ kind: 'github', href: 'https://github.com/mokhames/portfolio-crm' }],
  },
]

export default function Projects() {
  return (
    <section className="py-32 bg-surface-dark/20" id="projects">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary text-2xl font-mono">04.</span>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <FeaturedProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
