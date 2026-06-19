'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { testimonials } from '@/lib/content'

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client stories"
          title="Referred by clients, again and again"
          description="The greatest compliment we receive is when a past client refers us to their friends and family. Here is what a few of them have to say."
          align="center"
          className="mx-auto mb-14 max-w-3xl"
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 rounded-xl border border-border/60 bg-card p-6 shadow-sm sm:p-7"
            >
              <Quote className="size-7 shrink-0 text-primary/40" aria-hidden="true" />
              <blockquote className="flex-1 text-base leading-relaxed text-foreground/90 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="border-t border-border pt-4">
                <p className="font-serif text-base font-semibold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
