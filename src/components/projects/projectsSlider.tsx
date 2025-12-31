import { useState } from 'react'
import type { Project } from '@/tools/types/project'
import FeaturedProjectCard from './ProjectCard'

const CARD_WIDTH = 420 // px (matches your card visually)
const GAP = 32 // px
const STEP = CARD_WIDTH + GAP

function FeaturedProjectsSlider({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0)

  const total = projects.length

  function prev() {
    setIndex((i) => (i - 1 + total) % total)
  }

  function next() {
    setIndex((i) => (i + 1) % total)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Controls */}
      <button
        onClick={prev}
        // disabled={!canPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white disabled:opacity-30"
      >
        ‹
      </button>

      <button
        onClick={next}
        // disabled={!canNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white disabled:opacity-30"
      >
        ›
      </button>

      {/* Viewport */}
      <div className="relative w-full overflow-hidden">
        {/* Track */}
        <div
          className="flex items-center gap-8 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50% - ${STEP}px - ${index * STEP}px))`,
          }}
        >
          {index === 0 && (
            <div
              key={`${projects[total - 1].id}-clone`}
              className={`shrink-0 transition-all duration-500 ease-out opacity-40 scale-95 pointer-events-none`}
              style={{ width: CARD_WIDTH }}
            >
              <FeaturedProjectCard p={projects[total - 1]} />
            </div>
          )}
          {projects.map((project, i) => {
            // offset in [0..total-1]
            const offset = (i - index + total) % total
            // rel in ...,-2,-1,0,1,2,... (wrap around)
            const rel = offset > total / 2 ? offset - total : offset

            let styles = 'opacity-0 scale-90 pointer-events-none'

            // left preview
            if (rel === -1) {
              styles = 'opacity-40 scale-95'
            }

            // center cards
            if (rel === 0 || rel === 1) {
              styles = 'opacity-100 scale-100'
            }

            // right preview
            if (rel === 2) {
              styles = 'opacity-40 scale-95'
            }

            return (
              <div
                key={`${project.id}-${i}`}
                className={`shrink-0 transition-all duration-500 ease-out ${styles}`}
                style={{ width: CARD_WIDTH }}
              >
                <FeaturedProjectCard p={project} />
              </div>
            )
          })}
          {index === total - 1 && (
            <div
              key={`${projects[0].id}-clone`}
              className={`shrink-0 transition-all duration-500 ease-out opacity-40 scale-95 pointer-events-none`}
              style={{ width: CARD_WIDTH }}
            >
              <FeaturedProjectCard p={projects[0]} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectsSlider
