'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavStore } from '@/lib/store'

export function HomeHero() {
  const { setPage } = useNavStore()

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="bg-grain absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Text */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Richmond &amp; Northern Neck, Virginia
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance"
            >
              Custom residential homebuilder in{' '}
              <span className="text-primary">Richmond &amp; Virginia&rsquo;s Northern Neck</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg text-pretty"
            >
              Specializing in bespoke, built-to-last new builds and whole-home renovations,
              defined by professionalism, craftsmanship, and excellence at every step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" onClick={() => setPage('contact')} className="group">
                Start your project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setPage('portfolio')}
                className="group"
              >
                View portfolio
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-border/60 sm:aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/hero.jpg"
                alt="Custom luxury home built by Spruce Construction at golden hour"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/90 px-4 py-3 backdrop-blur-md">
                <p className="font-serif text-sm font-semibold">Craftsmanship that lasts</p>
                <p className="text-xs text-muted-foreground">A Spruce-built home in Richmond, VA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
