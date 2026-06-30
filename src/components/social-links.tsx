'use client'

import { Instagram, Facebook, Linkedin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { socialLinks } from '@/lib/content'
import { cn } from '@/lib/utils'

// Houzz doesn't ship with lucide, so we define a clean SVG version.
function Houzz({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.4 2v5.2H9.6V12H4.8v10h4.8v-5.2h4.8V22h4.8V2z" />
    </svg>
  )
}

const iconMap: Record<string, LucideIcon | typeof Houzz> = {
  Instagram,
  Facebook,
  Linkedin,
  Houzz,
}

interface SocialLinksProps {
  variant?: 'icons' | 'inline'
  className?: string
  iconClassName?: string
}

/**
 * Renders the Spruce social links.
 * - `icons` variant: a row of circular icon buttons (footer)
 * - `inline` variant: text link with the @handle (compact)
 */
export function SocialLinks({
  variant = 'icons',
  className,
  iconClassName,
}: SocialLinksProps) {
  if (variant === 'inline') {
    return (
      <a
        href={socialLinks[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        <Instagram className="size-4" />
        @spruce_rva
      </a>
    )
  }

  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon]
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={cn(
                'inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground',
                iconClassName
              )}
            >
              <Icon className="size-4" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
