'use client'

import { Mail, MapPin, Instagram, ExternalLink, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useNavStore } from '@/lib/store'
import { CONTACT_INFO, NAV_ITEMS } from '@/lib/content'

export function Footer() {
  const { setPage } = useNavStore()

  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand + tagline */}
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground text-pretty">
              Custom residential homebuilder in Richmond &amp; the Northern Neck of Virginia.
            </p>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <Instagram className="size-4" />
              {CONTACT_INFO.instagram}
              <ArrowUpRight className="size-3" />
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </h2>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setPage(item.id)}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT_INFO.boscobelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Boscobel Trace
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </h2>
            <address className="space-y-2 not-italic">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{CONTACT_INFO.addressShort}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {CONTACT_INFO.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Spruce Construction. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with craftsmanship in Richmond, Virginia.
          </p>
        </div>
      </div>
    </footer>
  )
}
