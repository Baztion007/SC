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
  // the foreground text, creating a depth effect. useScroll target the hero ref.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Background moves slower (parallax), text fades out as you scroll past
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-foreground"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Multi-stop overlay for legible text on any image.
            Darker at left/bottom for text contrast, lighter at right to keep image visible. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(20,28,24,0.85) 0%, rgba(20,28,24,0.55) 45%, rgba(20,28,24,0.25) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Subtle bottom gradient to blend into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              'linear-gradient(to top, var(--background), transparent)',
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
            Richmond &amp; Northern Neck, Virginia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            Custom residential homebuilder in{' '}
            <span className="text-emerald-200">Richmond &amp; Virginia&rsquo;s Northern Neck</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base text-white/85 sm:text-lg text-pretty"
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
            <Button
              size="lg"
              onClick={() => setPage('contact')}
              className="group bg-white text-foreground hover:bg-white/90"
            >
              Start your project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <button
              onClick={() => setPage('portfolio')}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/40 bg-transparent px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15 hover:text-white"
            >
              View portfolio
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-[0.18em]">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
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
