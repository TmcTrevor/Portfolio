import type { Skill } from '@/tools/types/skill'
import type { Category } from '@/tools/types/skillCategory'
import CategoryCard from './CategoryCard'
import SecondarySkillTile from './secondarySkill'
import LearningExploring from './learningExploring'

const CATEGORIES: Category[] = [
  {
    title: 'Frontend Engineering',
    headerIcon: 'web',
    skills: [
      {
        name: 'React',
        level: 'Advanced',
        pulse: true,
        icon: (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 21.364l-1.636-2.545h-2.182v-1.636l-2.545-1.636v-2.182l-2.545-1.636 2.545-1.636v-2.182l2.545-1.636v-1.636h2.182l1.636-2.545 1.636 2.545h2.182v1.636l2.545 1.636v2.182l2.545 1.636-2.545 1.636v2.182l-2.545 1.636v1.636h-2.182l-1.636 2.545zm0-8.182c.901 0 1.636-.735 1.636-1.636s-.735-1.636-1.636-1.636-1.636.735-1.636 1.636.735 1.636 1.636 1.636z"
              opacity="0.8"
            />
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        level: 'Strong',
        icon: (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M2 2h20v20h-20v-20zm16.5 15v-4.5h-1.5v4.5h-1.5v-6h4.5v1.5h-1.5v4.5h-1.5zm-5.5 0v-6h3v1.5h-1.5v4.5h-1.5z" />
          </svg>
        ),
      },
      {
        name: 'Next.js',
        level: 'Strong',
        icon: <span className="font-bold text-xs">N</span>,
      },
      {
        name: 'Tailwind CSS',
        level: 'Advanced',
        icon: (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 6c3.313 0 6-2.687 6-6 0 2.227-1.215 4.16-3.006 5.201-1.637 2.053-4.148 3.447-6.994 3.754.965 2.126 3.111 3.614 5.617 3.614 3.313 0 6-2.687 6-6 0 2.227-1.215 4.16-3.006 5.201-1.637 2.053-4.148 3.447-6.994 3.754.965 2.126 3.111 3.614 5.617 3.614 2.502 0 4.646-1.481 5.613-3.603z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Backend & APIs',
    headerIcon: 'dns',
    skills: [
      {
        name: 'Node.js',
        level: 'Strong',
        icon: (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l-10 5.5v11l10 5.5 10-5.5v-11l-10-5.5zm0 2.268l7.5 4.125-7.5 4.125-7.5-4.125 7.5-4.125zm-8.5 6.096l7.5 4.125v8.253l-7.5-4.125v-8.253zm17 0v8.253l-7.5 4.125v-8.253l7.5-4.125z" />
          </svg>
        ),
      },
      {
        name: 'Python',
        level: 'Comfortable',
        icon: (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
              opacity="0.6"
            />
          </svg>
        ),
      },
      {
        name: 'REST APIs',
        level: 'Advanced',
        icon: <span className="material-symbols-outlined text-lg">api</span>,
      },
      {
        name: 'GraphQL',
        level: 'Comfortable',
        icon: <span className="material-symbols-outlined text-lg">hub</span>,
      },
    ],
  },
  {
    title: 'Databases & Data',
    headerIcon: 'database',
    skills: [
      {
        name: 'PostgreSQL',
        level: 'Strong',
        icon: (
          <span className="material-symbols-outlined text-lg">table_chart</span>
        ),
      },
      {
        name: 'MongoDB',
        level: 'Strong',
        icon: (
          <span className="material-symbols-outlined text-lg">description</span>
        ),
      },
      {
        name: 'Redis',
        level: 'Comfortable',
        icon: <span className="material-symbols-outlined text-lg">bolt</span>,
      },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    headerIcon: 'cloud',
    skills: [
      {
        name: 'AWS',
        level: 'Strong',
        icon: (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l-10 6 10 6 10-6-10-6zm0 2.2l7.5 4.5-7.5 4.5-7.5-4.5 7.5-4.5zM2 10l10 6 10-6v4l-10 6-10-6v-4z" />
          </svg>
        ),
      },
      {
        name: 'Docker',
        level: 'Strong',
        icon: (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M2 10h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8 4h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-12 4h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3z" />
          </svg>
        ),
      },
      {
        name: 'CI/CD',
        level: 'Comfortable',
        icon: (
          <span className="material-symbols-outlined text-lg">
            settings_suggest
          </span>
        ),
      },
    ],
  },
]

const SECONDARY: Skill[] = [
  { name: 'Vue.js', level: 'Working Knowl.', icon: 'code' },
  { name: 'Firebase', level: 'Comfortable', icon: 'data_object' },
  { name: 'Shell', level: 'Comfortable', icon: 'terminal' },
  { name: 'Figma', level: 'Occasional', icon: 'palette' },
]

const LEARNING = [
  'System Design',
  'Distributed Systems',
  'Rust',
  'AI/ML Models',
]

export default function TechSkill() {
  return (
    <section className="py-32 bg-surface-dark/20 relative" id="skills">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary text-2xl font-mono">02.</span>
          Technical Arsenal
        </h2>

        {/* Core categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.title} category={c} />
          ))}
        </div>

        {/* Secondary + Learning */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">widgets</span>{' '}
              Secondary Skills
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SECONDARY.map((s) => (
                <SecondarySkillTile key={s.name} item={s} />
              ))}
            </div>
          </div>

          <LearningExploring items={LEARNING} />
        </div>
      </div>
    </section>
  )
}
