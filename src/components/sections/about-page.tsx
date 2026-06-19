'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { CTASection } from '@/components/shared/cta-section'
import { principles, team, CONTACT_INFO } from '@/lib/content'

export function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-background pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="About Spruce Construction"
            description="We are a custom residential homebuilder in Richmond and Virginia's Northern Neck, dedicated to bespoke new builds and whole-home renovations defined by professionalism, craftsmanship, and excellence at every step."
            as="h1"
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* Roots of Spruce */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guiding principles"
            title="The Roots of Spruce"
            description="The Roots of Spruce are our guiding principles and they run deep. They shape every decision we make, from the partners we choose to the details we scrutinize."
            align="center"
            className="mx-auto mb-14 max-w-3xl"
          />

          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
            {principles.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (idx % 2) * 0.06 }}
                className="flex gap-4 rounded-lg border border-border/60 bg-card p-5 sm:p-6"
              >
                <span className="font-serif text-2xl font-semibold text-primary/70 shrink-0" aria-hidden="true">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The people of Spruce */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The team"
            title="The people of Spruce"
            description="Our team is our greatest asset and the reason clients refer us to their friends and family. Meet the craftspeople, managers, and coordinators behind every Spruce project."
            align="center"
            className="mx-auto mb-14 max-w-3xl"
          />

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: Math.min((idx % 4) * 0.06, 0.24) }}
                className="group overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-primary/5 font-serif text-xl font-semibold text-primary">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest work / Instagram */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="See our latest work"
            title="Follow along @spruce_rva"
            description="Follow us on Instagram for current projects, in-progress shots, and inspiration from the homes and neighborhoods we love."
            align="center"
            className="mx-auto mb-12 max-w-3xl"
          />

          {/* Instagram grid - uses our project images as preview tiles */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
            {[
              '/images/projects/palmyra.jpg',
              '/images/projects/erlwood.jpg',
              '/images/projects/york.jpg',
              '/images/projects/south.jpg',
              '/images/projects/charles.jpg',
              '/images/projects/oxford.jpg',
            ].map((src, idx) => (
              <motion.a
                key={src}
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                className="img-zoom group relative aspect-square overflow-hidden rounded-lg ring-1 ring-border/60"
              >
                <Image
                  src={src}
                  alt="Spruce Construction project preview on Instagram"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                  <Instagram className="size-6 text-white" aria-hidden="true" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-4" />
                Follow @spruce_rva
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build together."
        description="If our principles resonate with you, we would love to hear about your project."
        buttonText="Start your project"
      />
    </>
  )
}
