'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

// Spruce Construction wordmark with a stylized spruce tree icon.
// Avoids blue/indigo; uses the brand spruce green.
export function Logo({ className, variant = 'default' }: LogoProps) {
  const textColor = variant === 'light' ? '#fafaf7' : 'var(--foreground)'
  const iconColor = variant === 'light' ? '#fafaf7' : 'var(--spruce-green)'

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Stylized spruce tree */}
        <path
          d="M16 3 L9 13 L12.5 13 L7 21 L11 21 L5 29 L27 29 L21 21 L25 21 L19.5 13 L23 13 Z"
          fill={iconColor}
        />
        <rect x="14.5" y="29" width="3" height="3" fill={iconColor} />
      </svg>
      <span
        className="font-serif text-xl font-semibold tracking-tight"
        style={{ color: textColor }}
      >
        Spruce
      </span>
    </span>
  )
}
