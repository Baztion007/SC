'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/content'
import { useNavStore } from '@/lib/store'

interface ProjectCardProps {
  project: Project
  index?: number
  className?: string
  priority?: boolean
}

export function ProjectCard({ project, index = 0, className, priority }: ProjectCardProps) {
  const { setSelectProject } = useNavStore()

  return (
    <motion.button
      type="button"
      onClick={() => setSelectProject(project.slug)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative block w-full overflow-hidden rounded-lg bg-card text-left shadow-sm ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-border',
        className
      )}
    >
      <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.name} - ${project.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          View project
          <ArrowUpRight className="size-3" />
        </span>
        <span className="absolute left-3 top-3 inline-flex rounded-full bg-primary/95 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-primary-foreground">
          {project.type === 'new-build' ? 'New Build' : 'Renovation'}
        </span>
      </div>

      <div className="space-y-1.5 p-5">
        <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground text-pretty">{project.tagline}</p>
        {project.location && (
          <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
            {project.location}
          </p>
        )}
      </div>
    </motion.button>
  )
}
