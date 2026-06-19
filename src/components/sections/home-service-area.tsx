'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { CONTACT_INFO } from '@/lib/content'

const areas = ['Richmond', 'Northern Neck', 'Manakin Sabot', 'Surrounding VA communities']

export function HomeServiceArea() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-border/60">
              <Image
                src="/images/scenes/service-area.jpg"
                alt="Virginia countryside near Richmond and the Northern Neck"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Where we build"
              title="Two regions, one standard of care"
              description="From the historic neighborhoods of Richmond to the river-lined communities of the Northern Neck, we build across Virginia with the same attention to place."
            />

            <ul className="mt-6 flex flex-wrap gap-2">
              {areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80"
                >
                  <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>

            {/* Boscobel Trace card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/5 to-background p-6 sm:p-7"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold tracking-tight">
                    Boscobel Trace
                  </h3>
                  <p className="max-w-md text-sm text-muted-foreground text-pretty">
                    For the latest information on our timeless custom community in Manakin Sabot,
                    exclusively built by Spruce, visit Boscobel Trace.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0"
                >
                  <a
                    href={CONTACT_INFO.boscobelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Boscobel Trace
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
