import type { Experience } from '@/tools/types/Experience'
import type { Academic } from '@/tools/types/Academic'
import { SectionTitle, TimelineRail } from './Uihelpers'
import ExperienceCard from './ExperienceCard'
import AcademicCard from './AcademicCard'

const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    dateLabel: '2022 – Present',
    title: 'Senior Software Engineer',
    company: 'TechGlobal Inc.',
    roleType: 'Full-time',
    keyImpactIcon: 'rocket_launch',
    keyImpactTone: 'primary',
    keyImpact: (
      <>
        Reduced server costs by{' '}
        <span className="text-white font-bold">30%</span> while scaling
        infrastructure to support{' '}
        <span className="text-white font-bold">1M+</span> daily active users.
      </>
    ),
    groups: [
      {
        icon: 'architecture',
        title: 'Architecture & Performance',
        bullets: [
          'Led migration of legacy monolith to microservices using Node.js & Docker.',
          'Optimized system latency by 40% via strategic Redis caching implementation.',
        ],
      },
      {
        icon: 'group',
        title: 'Leadership',
        bullets: [
          'Mentored 3 junior developers and established code review standards.',
        ],
      },
    ],
  },
  {
    id: 'exp-2',
    dateLabel: '2020 – 2022',
    title: 'Full Stack Developer',
    company: 'Creative Solutions Agency',
    roleType: 'Full-time',
    keyImpactIcon: 'bolt',
    keyImpactTone: 'blue',
    keyImpact: (
      <>
        Delivered <span className="text-white font-bold">15+</span>{' '}
        high-performance client projects with a{' '}
        <span className="text-white font-bold">100%</span> on-time delivery
        rate.
      </>
    ),
    groups: [
      {
        icon: 'code',
        title: 'Development',
        bullets: [
          'Built responsive websites using React, Next.js, and headless CMS.',
          'Translated Figma prototypes into pixel-perfect interactive UI components.',
        ],
      },
    ],
  },
  {
    id: 'exp-3',
    dateLabel: 'Summer 2019',
    title: 'Junior Developer Intern',
    company: 'StartUp X',
    roleType: 'Internship',
    keyImpactIcon: 'trending_up',
    keyImpactTone: 'muted',
    keyImpact: (
      <>
        Accelerated feature deployment cycles by{' '}
        <span className="text-white font-bold">20%</span> through automated
        testing scripts.
      </>
    ),
    bullets: [
      'Assisted in building RESTful APIs using Python Flask.',
      'Wrote unit tests achieving 85% code coverage.',
    ],
  },
]

const ACADEMIC: Academic[] = [
  {
    id: 'edu-1',
    dateLabel: '2020 - 2022',
    badge: 'Parallel to Internship',
    degree: 'M.S. Computer Science',
    school: 'Stanford University',
    note: 'Specialization in AI & Distributed Systems',
    icon: 'school',
  },
  {
    id: 'edu-2',
    dateLabel: '2016 - 2020',
    degree: 'B.S. Software Engineering',
    school: 'University of Technology',
    note: 'Graduated with Honors',
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
