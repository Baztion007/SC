'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavStore } from '@/lib/store'
import { principles } from '@/lib/content'

export function HomeAboutPreview() {
  const { setPage } = useNavStore()
  const previewPrinciples = principles.slice(0, 4)

  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
              Rooted in principles
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance">
              The Roots of Spruce run deep.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg text-pretty">
              Our guiding principles shape every decision, from the partners we choose to the
              details we scrutinize. They are why clients refer us to their friends and family.
            </p>

            <ul className="mt-6 space-y-2.5">
              {previewPrinciples.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/90 sm:text-base">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              onClick={() => setPage('about')}
              className="mt-8 group"
            >
              Learn about Spruce
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-border/60 sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/scenes/about-craftsman.jpg"
                alt="A Spruce craftsman at work on custom home trim"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
