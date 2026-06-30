'use client'

import { motion } from 'framer-motion'
import { Quote, Star, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { testimonials, googleRating } from '@/lib/content'

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client stories"
          title="Referred by clients, again and again"
          description="The greatest compliment we receive is when a past client refers us to their friends and family. Here is what a few of them have to say."
          align="center"
          className="mx-auto mb-10 max-w-3xl"
        />

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 flex max-w-md items-center justify-center gap-4 rounded-full border border-border bg-card px-6 py-3 shadow-sm"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-4 ${
                  i < Math.round(googleRating.score)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-muted text-muted'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">
            {googleRating.score.toFixed(1)}
          </span>
          <span className="text-sm text-muted-foreground">
            on Google ({googleRating.reviewCount} reviews)
          </span>
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Read all
            <ExternalLink className="size-3" />
          </a>
        </motion.div>

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
              <div className="flex items-center justify-between">
                <Quote className="size-7 shrink-0 text-primary/40" aria-hidden="true" />
                {t.role.includes('Google') && (
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}
              </div>
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
