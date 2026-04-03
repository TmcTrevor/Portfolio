import type { Experience } from '@/tools/types/Experience'
import type { Academic } from '@/tools/types/Academic'
import { SectionTitle, TimelineRail } from './Uihelpers'
import ExperienceCard from './ExperienceCard'
import AcademicCard from './AcademicCard'

const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    dateLabel: 'Nov 2022 – Dec 2025',
    title: 'Senior Software Engineer & Product Owner',
    company: 'TickTickTrader',
    roleType: 'Full-time',
    keyImpactIcon: 'rocket_launch',
    keyImpactTone: 'primary',
    keyImpact: (
      <>
        Designed and shipped a real-time payments API from scratch, handling
        webhook processing, queue-based architecture, and live data streams for
        fintech clients.
      </>
    ),
    groups: [
      {
        icon: 'architecture',
        title: 'Product & Architecture',
        bullets: [
          'Led product design and development of a real-time API with webhook integrations, Redis queues, and WebSocket support.',
          'Architected scalable system using Node.js, PostgreSQL, and event-driven patterns for payment processing.',
          'Implemented Server-Sent Events (SSE) and Bull queues for reliable, asynchronous transaction handling.',
        ],
      },
      {
        icon: 'code',
        title: 'Full-Stack Development (First 2 Years)',
        bullets: [
          'Built and deployed trading dashboards and internal APIs serving multiple client requirements.',
          'Developed responsive frontend interfaces paired with robust backend APIs for real-time data visualization.',
        ],
      },
    ],
  },
  {
    id: 'exp-2',
    dateLabel: '2019 – 2021',
    title: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    roleType: 'Freelance',
    keyImpactIcon: 'bolt',
    keyImpactTone: 'blue',
    keyImpact: (
      <>
        Built client websites and Discord bots with external API integrations,
        managing end-to-end development and deployment.
      </>
    ),
    bullets: [
      'Developed responsive websites and custom Discord bots using Node.js and PostgreSQL.',
      'Integrated external APIs and built automation tools for client-specific workflows.',
      'Managed full project lifecycle from requirement gathering to deployment and support.',
    ],
  },
]

const ACADEMIC: Academic[] = [
  {
    id: 'edu-1',
    dateLabel: '2019 – 2025',
    badge: 'Parallel to Work',
    degree: 'Advanced Computer Science Training',
    school: '1337 School (42 Network)',
    note: 'Common Core + Phase 2 Curriculum',
    icon: 'school',
  },
  {
    id: 'edu-2',
    dateLabel: 'Sept 2017 – July 2021',
    degree: 'B.S. Mathematics & Computer Science',
    school: 'Hassan II University',
    note: 'Casablanca, Morocco',
    icon: 'book',
  },
]

/* --------------------------
   Main Component
-------------------------- */

export default function Experiences() {
  return (
    <section
      className="py-32 bg-linear-to-b from-surface-dark/10 to-surface-dark/40 relative"
      id="experiences"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <TimelineRail />
        <SectionTitle step="03." title="Professional Experience" />

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isActive={idx === 0}
              dateTone={idx === 0 ? 'primary' : 'muted'}
              position={idx % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-white/5">
          <h3 className="text-xl font-bold mb-10 flex items-center gap-3 text-slate-200">
            <span className="material-symbols-outlined text-primary">
              school
            </span>
            Academic Background
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {ACADEMIC.map((a) => (
              <AcademicCard key={a.id} item={a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
