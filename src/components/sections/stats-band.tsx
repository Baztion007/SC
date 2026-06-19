'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/content'

export function StatsBand() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-primary-foreground/10 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex flex-col gap-1 px-4 py-8 md:py-12"
          >
            <span className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm text-primary-foreground/80">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
