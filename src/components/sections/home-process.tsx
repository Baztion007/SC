'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/content'

export function HomeProcess() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Spruce experience"
          title="A process built on listening"
          description="We delight in houses and feel a responsibility to future generations. Our process is designed to leave every home and neighborhood better than we found it."
          align="center"
          className="mx-auto mb-16 max-w-3xl"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* connector line on desktop */}
              {idx < processSteps.length - 1 && (
                <span
                  className="absolute left-[calc(100%-1rem)] top-8 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-border to-transparent lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-6">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 font-serif text-lg font-semibold text-primary">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
