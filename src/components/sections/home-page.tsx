'use client'

import { HomeHero } from '@/components/sections/home-hero'
import { HomeServicesOverview } from '@/components/sections/home-services-overview'
import { StatsBand } from '@/components/sections/stats-band'
import { HomeFeaturedProjects } from '@/components/sections/home-featured-projects'
import { HomeProcess } from '@/components/sections/home-process'
import { Testimonials } from '@/components/sections/testimonials'
import { HomeAboutPreview } from '@/components/sections/home-about-preview'
import { HomeServiceArea } from '@/components/sections/home-service-area'
import { CTASection } from '@/components/shared/cta-section'

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServicesOverview />
      <StatsBand />
      <HomeFeaturedProjects />
      <HomeProcess />
      <Testimonials />
      <HomeAboutPreview />
      <HomeServiceArea />
      <CTASection
        variant="band"
        title="Ready to build your dream home?"
        description="Every Spruce project starts with a conversation. Tell us about your vision and we'll help you shape it."
        buttonText="Start your project"
      />
    </>
  )
}
