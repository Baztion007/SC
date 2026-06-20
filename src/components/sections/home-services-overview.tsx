'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { useNavStore } from '@/lib/store'

const services = [
  {
    id: 'new-builds',
    title: 'New Builds',
    image: '/images/projects/charles.jpg',
    description:
      'Customized at every step. We build new homes using the highest quality materials and craftsmanship for lasting beauty, tailored to your site and your life.',
    points: [
      'Tailored design from concept to completion',
      'Highest quality materials and craftsmanship',
      'Collaboration with architects and designers',
    ],
  },
  {
    id: 'renovations',
    title: 'Whole-Home Renovations',
    image: '/images/projects/erlwood.jpg',
    description:
      'Start with an existing home and a vision. We connect you with trusted architects and designers and bring that vision to life with meticulous craftsmanship.',
    points: [
      'Comprehensive transformations of existing homes',
      'Careful integration with original character',
      'Detailed planning with design partners',
    ],
  },
]

export function HomeServicesOverview() {
  const { setPage } = useNavStore()

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we build"
          title="Two crafts, one standard"
          description="Whether we are raising a new home from the ground up or reimagining a beloved existing one, every Spruce project is held to the same exacting standard."
          align="center"
          className="mx-auto mb-14 max-w-3xl"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md"
            >
              <div className="img-zoom relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="font-serif text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base text-pretty">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-2">
                  <Button
                    variant="link"
                    onClick={() => setPage('services')}
                    className="h-auto p-0 text-primary hover:text-primary/80"
                  >
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
