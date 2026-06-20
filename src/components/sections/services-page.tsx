'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CTASection } from '@/components/shared/cta-section'
import { useNavStore } from '@/lib/store'
import { processSteps, faqs } from '@/lib/content'

const newBuildPoints = [
  'Tailored design from concept to completion',
  'Highest quality materials and craftsmanship',
  'Collaboration with architects and designers',
  'Respect for neighborhood character and surroundings',
]

const renovationPoints = [
  'Comprehensive transformations of existing homes',
  'Careful integration with original character',
  'Detailed planning and coordination with design partners',
  'Focus on longevity and daily livability',
]

const idealForNewBuild = [
  'You have a site (or are looking for one) and want a home tailored to it',
  'You want to be involved in every material and finish decision',
  'You are working with an architect or want an introduction to one',
]

export function ServicesPage() {
  const { setPage, setFilter } = useNavStore()

  const viewProjects = (filter: 'new-build' | 'renovation') => {
    setFilter(filter)
    setPage('portfolio')
  }

  return (
    <>
      {/* Intro */}
      <section className="bg-background pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Services"
            description="Spruce Construction is a custom residential homebuilder specializing in bespoke, built-to-last new builds and whole-home renovations. Every project is defined by professionalism, craftsmanship, and excellence at every step."
            as="h1"
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* New Builds */}
      <section id="new-builds" className="scroll-mt-24 bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
                New Builds
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                Customized at every step, built to last.
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg text-pretty">
                New builds are customized at every step. We use the highest quality materials
                and craftsmanship for lasting beauty, working hand-in-hand with architects and
                designers to bring your vision to life.
              </p>

              <ul className="mt-6 space-y-2.5">
                {newBuildPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-foreground/90 sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg border border-border/60 bg-secondary/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Ideal for you if&hellip;
                </p>
                <ul className="mt-3 space-y-2">
                  {idealForNewBuild.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                onClick={() => viewProjects('new-build')}
                className="mt-8 group"
              >
                See new build projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-border/60">
                <Image
                  src="/images/projects/cherokee.jpg"
                  alt="Scandinavian modern new build by Spruce Construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Whole-Home Renovations */}
      <section id="renovations" className="scroll-mt-24 bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-border/60">
                <Image
                  src="/images/projects/erlwood.jpg"
                  alt="Designer whole-home renovation by Spruce Construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
                Whole-Home Renovations
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                Start with an existing home and a vision.
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg text-pretty">
                Begin with an existing home and a vision for what it could be. Spruce connects
                clients with trusted architects and designers and brings the vision to life with
                careful planning and meticulous craftsmanship.
              </p>

              <ul className="mt-6 space-y-2.5">
                {renovationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-foreground/90 sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                onClick={() => viewProjects('renovation')}
                className="mt-8 group"
              >
                See renovation projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A clear path from vision to keys"
            description="Our process is collaborative and transparent at every stage, designed to keep you informed and confident from the first conversation to long after move-in."
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

      {/* FAQ */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Answers to common questions"
            align="center"
            className="mx-auto mb-12"
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-serif text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground text-pretty">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        variant="band"
        title="Ready to start?"
        description="Tell us about your project and we will be in touch shortly to schedule a discovery call."
        buttonText="Contact us"
      />
    </>
  )
}
