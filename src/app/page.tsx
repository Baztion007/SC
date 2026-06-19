'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { BackToTop } from '@/components/layout/back-to-top'
import { MobileCTA } from '@/components/layout/mobile-cta'
import { PageTransition } from '@/components/layout/page-transition'
import { ProjectDetailModal } from '@/components/shared/project-detail-modal'
import { HomePage } from '@/components/sections/home-page'
import { PortfolioPage } from '@/components/sections/portfolio-page'
import { ServicesPage } from '@/components/sections/services-page'
import { AboutPage } from '@/components/sections/about-page'
import { ContactPage } from '@/components/sections/contact-page'
import { useNavStore } from '@/lib/store'

export default function Home() {
  const currentPage = useNavStore((s) => s.currentPage)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <PageTransition>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'portfolio' && <PortfolioPage />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'contact' && <ContactPage />}
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
      <MobileCTA />
      <ProjectDetailModal />
    </div>
  )
}
