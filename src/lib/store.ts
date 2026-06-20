'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type PageId = 'home' | 'portfolio' | 'services' | 'about' | 'contact'

export type ProjectFilter = 'all' | 'new-build' | 'renovation'

interface ProjectIdState {
  selectedProjectId: string | null
  setSelectedProjectId: (id: string | null) => void
}

interface NavState {
  currentPage: PageId
  setPage: (page: PageId) => void
  // for project detail modal
  selectedProject: ProjectIdState
  // portfolio filter
  filter: ProjectFilter
  setFilter: (filter: ProjectFilter) => void
  // mobile menu
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  // for tracking scroll restoration
  setSelectProject: (id: string | null) => void
}

export const useNavStore = create<NavState>()(
  persist(
    (set) => ({
      currentPage: 'home',
      setPage: (page) => {
        set({ currentPage: page, mobileMenuOpen: false })
        // Scroll to top on page change
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      },
      selectedProject: { selectedProjectId: null, setSelectedProjectId: () => {} },
      filter: 'all',
      setFilter: (filter) => set({ filter }),
      mobileMenuOpen: false,
      setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
      setSelectProject: (id) =>
        set((state) => ({
          selectedProject: {
            ...state.selectedProject,
            selectedProjectId: id,
          },
        })),
    }),
    {
      name: 'spruce-nav',
      // only persist theme-relevant bits; page resets to home on reload
      partialize: (state) => ({ filter: state.filter }),
    }
  )
)
