'use client'

import { motion } from 'framer-motion'
import { useNavStore } from '@/lib/store'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const currentPage = useNavStore((s) => s.currentPage)

  return (
    <motion.div
      key={currentPage}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
