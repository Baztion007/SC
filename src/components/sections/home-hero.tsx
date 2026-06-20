'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavStore } from '@/lib/store'

export function HomeHero() {
  const { setPage } = useNavStore()
  const ref = useRef<HTMLDivElement>(null)

  // Parallax: as the user scrolls, the background image translates slower than
  // the foreground text, creating a depth effect. The image scales slightly to
  // avoid revealing edges during the parallax translation.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Background moves up to 18% of its height slower than scroll, with a slight scale-up
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25])
  // Foreground text drifts up and fades as you scroll past the hero
  const contentY = useTransform(scrollYProgress, [0, 0.8], ['0%', '12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background image with parallax (matches sprucerva.com style + depth) */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/spruce-hero-original.jpg"
          alt="A custom home built by Spruce Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Subtle gradient overlay only at top and bottom for header/footer legibility.
          The middle stays clear so the image is visible — matching the real Spruce site. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,28,24,0.45) 0%, rgba(20,28,24,0.15) 30%, rgba(20,28,24,0.15) 70%, rgba(20,28,24,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Centered text overlay — matches sprucerva.com hero treatment */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
          Richmond &amp; Northern Neck, Virginia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl text-balance"
        >
          Custom residential homebuilder in{' '}
          <span className="text-emerald-200">Richmond &amp; Virginia&rsquo;s Northern Neck</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base font-medium text-white drop-shadow sm:text-lg text-pretty"
        >
          Specializing in bespoke, built-to-last new builds and whole-home renovations.
          Professionalism, craftsmanship, and excellence at every step in the process define
          the Spruce experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => setPage('contact')}
            className="group bg-primary text-primary-foreground shadow-xl ring-1 ring-white/20 hover:bg-primary/90"
          >
            Start your project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <button
            onClick={() => setPage('portfolio')}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/50 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25 hover:text-white"
          >
            View portfolio
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle scroll cue — fades out with the content as you scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs uppercase tracking-[0.18em]">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="size-1.5 rounded-full bg-white/80"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
