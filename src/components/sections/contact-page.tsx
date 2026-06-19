'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ExternalLink, ArrowUpRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/sections/contact-form'
import { CONTACT_INFO } from '@/lib/content'

export function ContactPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-background pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build a relationship."
            description="Tell us about your home, your vision, and what you're hoping to build. We'll be in touch shortly to start the conversation."
            as="h1"
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* Two-column */}
      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <h2 className="mb-5 font-serif text-2xl font-semibold tracking-tight">
                Tell us about your project
              </h2>
              <ContactForm />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact info */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold tracking-tight">Contact</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 text-foreground/80 transition-colors hover:text-primary"
                    >
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{CONTACT_INFO.addressShort}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-primary"
                    >
                      <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {CONTACT_INFO.email}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Philosophy quote */}
              <div className="rounded-xl border border-border bg-secondary/30 p-6">
                <Quote className="size-7 text-primary/40" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-lg font-semibold tracking-tight">
                  How we think about home
                </h3>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85 text-pretty">
                  We delight in houses. We feel a responsibility to future generations. Our goal
                  is to leave every home and every neighborhood better than we found it.
                </blockquote>
              </div>

              {/* Boscobel card */}
              <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-background p-6">
                <h3 className="font-serif text-lg font-semibold tracking-tight">
                  Boscobel Trace
                </h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  For the latest information on our timeless custom community in Manakin Sabot,
                  exclusively built by Spruce, visit Boscobel Trace.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-4"
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
      </section>

      {/* Map */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            <span>526 N. Arthur Ashe Blvd., Richmond, Virginia 23220</span>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 text-primary hover:underline"
            >
              Open in Maps
              <ExternalLink className="size-3" />
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <iframe
                title="Map showing Spruce Construction office in Richmond, VA"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-77.487%2C37.555%2C-77.467%2C37.565&layer=mapnik&marker=37.5605%2C-77.477"
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
