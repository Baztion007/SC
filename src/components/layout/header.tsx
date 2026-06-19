'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Logo } from '@/components/logo'
import { useNavStore } from '@/lib/store'
import { NAV_ITEMS } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Header() {
  const { currentPage, setPage, mobileMenuOpen, setMobileMenuOpen } = useNavStore()
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // next-themes requires mounted state to avoid hydration mismatch
    // when rendering the theme toggle button. This is the documented pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (page: typeof NAV_ITEMS[number]['id']) => setPage(page)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-background/0'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20">
        <button
          onClick={() => go('home')}
          aria-label="Spruce Construction - Home"
          className="transition-opacity hover:opacity-80"
        >
          <Logo />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                'relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                currentPage === item.id ? 'text-primary' : 'text-foreground/70'
              )}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="hidden md:inline-flex"
            >
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          )}
          <Button
            size="sm"
            onClick={() => go('contact')}
            className="hidden md:inline-flex"
          >
            Start your project
          </Button>

          {/* Mobile menu trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {/* Mobile sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-full max-w-sm p-0">
          <SheetHeader className="border-b border-border p-6">
            <div className="flex items-center justify-between">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </Button>
            </div>
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <SheetDescription className="sr-only">
              Choose a page to navigate to.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-1 p-6">
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i + 0.05 }}
                onClick={() => go(item.id)}
                className={cn(
                  'flex items-center justify-between border-b border-border/50 py-4 text-left font-serif text-2xl font-medium transition-colors',
                  currentPage === item.id ? 'text-primary' : 'text-foreground hover:text-primary'
                )}
              >
                {item.label}
                <span className="text-xs font-sans font-normal text-muted-foreground">
                  0{i + 1}
                </span>
              </motion.button>
            ))}

            <div className="mt-6 flex items-center gap-2">
              {mounted && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
              )}
              <Button
                className="flex-1"
                onClick={() => go('contact')}
              >
                Start your project
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
