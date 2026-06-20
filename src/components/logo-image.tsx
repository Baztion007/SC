'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

const HEADER_LOGO_URL = 'https://i.postimg.cc/gJM2sK3f/Spruce-Main-Header-Logo.png'
const FOOTER_LOGO_URL = 'https://i.postimg.cc/SsZxdGW0/SCLogo-Text.png'

interface LogoProps {
  variant?: 'header' | 'footer'
  className?: string
  // Useful for accessibility — the header logo is dark text, footer may differ
  priority?: boolean
}

/**
 * Spruce Construction brand logo.
 * Uses the official Spruce logo assets hosted on postimg.cc.
 * - `header` variant: horizontal logo with tree icon + "Spruce" wordmark (dark)
 * - `footer` variant: stacked logo with tree icon + "Spruce Construction" text
 */
export function LogoImage({ variant = 'header', className, priority }: LogoProps) {
  const isHeader = variant === 'header'
  const src = isHeader ? HEADER_LOGO_URL : FOOTER_LOGO_URL

  return (
    <Image
      src={src}
      alt="Spruce Construction"
      width={isHeader ? 140 : 180}
      height={isHeader ? 40 : 70}
      priority={priority}
      sizes="(max-width: 768px) 120px, 180px"
      className={cn(
        'h-auto w-auto object-contain',
        isHeader ? 'max-h-[36px] md:max-h-[42px]' : 'max-h-[72px]',
        className
      )}
      unoptimized
    />
  )
}
