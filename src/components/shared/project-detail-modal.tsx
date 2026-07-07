'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, MapPin, ExternalLink, ChevronLeft, ChevronRight, Images, ArrowUpRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useNavStore } from '@/lib/store'
import { projects } from '@/lib/content'

export function ProjectDetailModal() {
  const { selectedProject, setSelectProject, setPage } = useNavStore()
  const selectedProjectId = selectedProject.selectedProjectId
  const project = projects.find((p) => p.slug === selectedProjectId)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Build the gallery array from the project's gallery (excludes cover)
  const allImages = project
    ? (project.gallery && project.gallery.length > 0
        ? project.gallery
        : [project.image])
    : []
  const imageCount = allImages.length

  // Reset to first image when project changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveImageIdx(0)
    setLightboxOpen(false)
  }, [selectedProjectId])

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen || imageCount === 0) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setActiveImageIdx((i) => (i + 1) % imageCount)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveImageIdx((i) => (i - 1 + imageCount) % imageCount)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, imageCount])

  return (
    <>
      {/* Project detail modal */}
      <Dialog
        open={Boolean(project)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectProject(null)
            setLightboxOpen(false)
          }
        }}
      >
        <DialogContent className="max-h-[92vh] overflow-y-auto border-border bg-background p-0 sm:max-w-4xl">
          <DialogTitle className="sr-only">
            {project ? `${project.name} — ${project.tagline}` : 'Project details'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Project gallery and details for {project?.name}.
          </DialogDescription>

          <AnimatePresence>
            {project && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Main image viewer with prev/next arrows */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted sm:aspect-[16/9]">
                  <Image
                    src={allImages[activeImageIdx] || project.image}
                    alt={`${project.name} - photo ${activeImageIdx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
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

                  {/* Image counter */}
                  {imageCount > 1 && (
                    <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {activeImageIdx + 1} / {imageCount}
                    </span>
                  )}

                  {/* Prev/next arrows on main image */}
                  {imageCount > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImageIdx((i) => (i - 1 + imageCount) % imageCount)}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        onClick={() => setActiveImageIdx((i) => (i + 1) % imageCount)}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail strip — shows all images except the currently-active one */}
                {imageCount > 1 && (
                  <div className="flex gap-2 overflow-x-auto border-b border-border bg-secondary/30 p-3">
                    {allImages.map((img, idx) => (
                      idx === activeImageIdx ? null : (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIdx(idx)}
                          className="relative size-16 shrink-0 overflow-hidden rounded-md ring-2 ring-transparent opacity-60 transition-all hover:opacity-100 hover:ring-primary"
                          aria-label={`View image ${idx + 1}`}
                        >
                          <Image
                            src={img}
                            alt={`${project.name} thumbnail ${idx + 1}`}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </button>
                      )
                    ))}
                  </div>
                )}

                {/* Project details */}
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

                  {/* Full gallery link + lightbox button */}
                  {(project.galleryUrl || imageCount > 1) && (
                    <div className="flex flex-wrap gap-3">
                      {imageCount > 1 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setLightboxOpen(true)}
                          className="gap-2"
                        >
                          <Images className="size-4" />
                          View {imageCount} photos
                        </Button>
                      )}
                      {project.galleryUrl && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                        >
                          <a
                            href={project.galleryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <ExternalLink className="size-4" />
                            Full gallery on postimg.cc
                            <ArrowUpRight className="size-3" />
                          </a>
                        </Button>
                      )}
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

      {/* Fullscreen lightbox — uses a second Radix Dialog that stacks on top of the project modal */}
      <Dialog
        open={lightboxOpen && Boolean(project)}
        onOpenChange={(open) => {
          if (!open) setLightboxOpen(false)
        }}
      >
        <DialogContent
          className="max-h-screen border-0 bg-black/95 p-0 sm:max-w-none [&>button]:hidden"
          style={{ width: '100vw', height: '100vh', maxWidth: '100vw', borderRadius: 0 }}
        >
          <DialogTitle className="sr-only">
            {project ? `${project.name} — Fullscreen photo viewer` : 'Photo viewer'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Use arrow keys to navigate. Press Escape to close.
          </DialogDescription>

          {project && imageCount > 0 && (
            <div className="relative flex h-screen w-screen items-center justify-center">
              {/* Close button */}
              <button
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
                className="absolute right-4 top-4 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
              >
                <X className="size-6" />
              </button>

              {/* Main lightbox image */}
              <div className="relative h-[85vh] w-[90vw] max-w-6xl">
                <Image
                  src={allImages[activeImageIdx] || project.image}
                  alt={`${project.name} - photo ${activeImageIdx + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              {/* Prev/next arrows */}
              {imageCount > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((i) => (i - 1 + imageCount) % imageCount)}
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 z-10 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <ChevronLeft className="size-7" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((i) => (i + 1) % imageCount)}
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 z-10 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <ChevronRight className="size-7" />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                {activeImageIdx + 1} / {imageCount} — {project.name}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
