'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavStore } from '@/lib/store'

// Sticky bottom CTA bar visible only on mobile, hidden on contact page
export function MobileCTA() {
  const { currentPage, setPage } = useNavStore()
  const visible = currentPage !== 'contact'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <Button
            className="w-full"
            size="lg"
            onClick={() => setPage('contact')}
          >
            Start your project
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
