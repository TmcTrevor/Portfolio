import type { Category } from '@/tools/types/skillCategory'
import SkillRow from './SkillRow'

function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="glass-card rounded-2xl p-1 bg-linear-to-br from-white/5 to-transparent hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
      <div className="bg-surface-lighter/60 backdrop-blur-md rounded-xl p-6 md:p-8 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <span className="material-symbols-outlined text-2xl">
              {category.headerIcon}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-wide">
            {category.title}
          </h3>
        </div>

        <div className="space-y-5 grow">
          {category.skills.map((s) => (
            <SkillRow key={s.name} skill={s} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default CategoryCard
