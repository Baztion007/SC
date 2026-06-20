'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/shared/project-card'
import { CTASection } from '@/components/shared/cta-section'
import { useNavStore } from '@/lib/store'
import { projects, type ProjectFilter } from '@/lib/content'
import { cn } from '@/lib/utils'

const filters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'new-build', label: 'New Builds' },
  { id: 'renovation', label: 'Whole-Home Renovations' },
]

export function PortfolioPage() {
  const { filter, setFilter } = useNavStore()

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.type === filter)
  }, [filter])

  return (
    <>
      <section className="bg-background pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Portfolio"
            description="A curated selection of new builds and whole-home renovations across Richmond and the Northern Neck. Each project reflects our commitment to craftsmanship, character, and care."
            as="h1"
            className="max-w-3xl"
          />

          {/* Filters */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                  filter === f.id
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary'
                )}
                aria-pressed={filter === f.id}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        variant="band"
        title="Imagine what we can build together."
        description="Whether a new build from the ground up or a whole-home renovation, every Spruce project starts with a conversation."
        buttonText="Start your project"
      />
    </>
  )
}
