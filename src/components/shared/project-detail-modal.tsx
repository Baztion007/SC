'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, MapPin, ExternalLink } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useNavStore } from '@/lib/store'
import { projects, CONTACT_INFO } from '@/lib/content'

export function ProjectDetailModal() {
  const { selectedProject, setSelectProject, setPage } = useNavStore()
  const selectedId = selectedProject.selectedProjectId
  const project = projects.find((p) => p.slug === selectedId)

  return (
    <Dialog
      open={Boolean(project)}
      onOpenChange={(open) => {
        if (!open) setSelectProject(null)
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-background p-0 sm:max-w-3xl">
        <DialogTitle className="sr-only">
          {project ? `${project.name} — ${project.tagline}` : 'Project details'}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Project details and description for {project?.name}.
        </DialogDescription>

        <AnimatePresence>
          {project && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted sm:aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={`${project.name} - ${project.tagline}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-3 top-3 size-9 rounded-full shadow-md"
                  onClick={() => setSelectProject(null)}
                  aria-label="Close"
                >
                  <X className="size-4" />
                </Button>
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  {project.type === 'new-build' ? 'New Build' : 'Whole-Home Renovation'}
                </span>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="space-y-1">
                  <h2 id="project-modal-name" className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.name}
                  </h2>
                  <p className="text-base text-muted-foreground">{project.tagline}</p>
                </div>

                {project.location && (
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary" />
                    {project.location}
                  </p>
                )}

                <p className="text-base leading-relaxed text-foreground/90 text-pretty">
                  {project.description}
                </p>

                {project.press && project.press.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.press.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        <ExternalLink className="size-3" />
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    Inspired by what you see?
                  </p>
                  <Button
                    onClick={() => {
                      setSelectProject(null)
                      setPage('contact')
                    }}
                  >
                    Start your project
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
