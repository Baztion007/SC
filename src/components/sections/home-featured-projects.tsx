'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/shared/project-card'
import { useNavStore } from '@/lib/store'
import { featuredProjects } from '@/lib/content'

export function HomeFeaturedProjects() {
  const { setPage } = useNavStore()
  const projects = featuredProjects.slice(0, 6)

  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured projects"
            title="A selection of recent work"
            description="A curated look at homes across Richmond and the Northern Neck \u2014 from historic whole-home renovations to ground-up custom new builds."
            className="max-w-2xl"
          />
          <Button
            variant="outline"
            onClick={() => setPage('portfolio')}
            className="shrink-0"
          >
            View all projects
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              priority={idx < 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
