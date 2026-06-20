'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavStore } from '@/lib/store'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title: string
  description?: string
  buttonText?: string
  variant?: 'default' | 'compact' | 'band'
  className?: string
}

export function CTASection({
  title,
  description,
  buttonText = 'Start your project',
  variant = 'default',
  className,
}: CTASectionProps) {
  const { setPage } = useNavStore()

  if (variant === 'band') {
    return (
      <section className={cn('border-y border-border bg-primary text-primary-foreground', className)}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl text-balance">
              {title}
            </h2>
            {description && (
              <p className="max-w-xl text-primary-foreground/80 text-pretty">{description}</p>
            )}
          </div>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setPage('contact')}
            className="shrink-0"
          >
            {buttonText}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg text-pretty">
              {description}
            </p>
          )}
          <Button size="lg" onClick={() => setPage('contact')} className="mt-4">
            {buttonText}
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
