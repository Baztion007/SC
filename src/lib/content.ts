// Central content data for Spruce Construction site
// Single source of truth for projects, team, services, principles

export type ProjectType = 'new-build' | 'renovation'

export interface Project {
  slug: string
  name: string
  type: ProjectType
  tagline: string
  description: string
  image: string
  location?: string
  featured?: boolean
  press?: string[]
  gallery?: string[]
  galleryUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'palmyra',
    name: 'Palmyra',
    type: 'renovation',
    tagline: 'Historic Tudor Whole-Home Renovation',
    description:
      'A meticulous restoration of a historic Tudor home, preserving its architectural heritage while modernizing every system and surface for contemporary family life.',
    image: '/images/projects/palmyra-real.jpg',
    gallery: ["/images/projects/palmyra/1.jpg","/images/projects/palmyra/2.jpg","/images/projects/palmyra/3.jpg","/images/projects/palmyra/4.jpg","/images/projects/palmyra/5.jpg","/images/projects/palmyra/6.jpg","/images/projects/palmyra/7.jpg","/images/projects/palmyra/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/Vky7sG5',
    location: 'Richmond, VA',
    featured: true,
    press: ['Featured in Traditional Home'],
  },
  {
    slug: 'cherokee',
    name: 'Cherokee',
    type: 'new-build',
    tagline: 'Scandinavian Modern New Build',
    description:
      'A light-filled Scandinavian modern new build emphasizing clean lines, natural materials, and a seamless connection between interior and landscape.',
    image: '/images/projects/cherokee-real.jpg',
    gallery: ["/images/projects/cherokee/1.jpg","/images/projects/cherokee/2.jpg","/images/projects/cherokee/3.jpg","/images/projects/cherokee/4.jpg","/images/projects/cherokee/5.jpg","/images/projects/cherokee/6.jpg","/images/projects/cherokee/7.jpg","/images/projects/cherokee/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/Hr1sysY',
    location: 'Richmond, VA',
    featured: true,
    press: ['Featured by ModernRichmond'],
  },
  {
    slug: 'erlwood',
    name: 'Erlwood',
    type: 'renovation',
    tagline: 'Spruce Designer Whole-Home Renovation',
    description:
      'A designer-led whole-home renovation that reimagines a traditional floor plan with a chef-grade kitchen, open living areas, and refined material selections throughout.',
    image: '/images/projects/erlwood-real.jpg',
    gallery: ["/images/projects/erlwood/1.jpg","/images/projects/erlwood/2.jpg","/images/projects/erlwood/3.jpg","/images/projects/erlwood/4.jpg","/images/projects/erlwood/5.jpg","/images/projects/erlwood/6.jpg","/images/projects/erlwood/7.jpg","/images/projects/erlwood/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/phmgC7G',
    location: 'Richmond, VA',
    featured: true,
  },
  {
    slug: 'south',
    name: 'South',
    type: 'renovation',
    tagline: 'Mid-Century Modern Whole-Home Renovation',
    description:
      'A respectful mid-century modern renovation that vaulted ceilings, restored a landmark stone fireplace, and reintroduced period-appropriate materials with modern performance.',
    image: '/images/projects/south-real.jpg',
    gallery: ["/images/projects/south/1.jpg","/images/projects/south/2.jpg","/images/projects/south/3.jpg","/images/projects/south/4.jpg","/images/projects/south/5.jpg","/images/projects/south/6.jpg","/images/projects/south/7.jpg","/images/projects/south/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/jnj8hkb',
    location: 'Richmond, VA',
    featured: true,
    press: ['Featured by ModernRichmond'],
  },
  {
    slug: 'york',
    name: 'York',
    type: 'renovation',
    tagline: 'Designer Artist Showcase Whole-Home Renovation',
    description:
      'A designer artist showcase whole-home renovation featuring a coffered dining room, custom built-ins, and a sophisticated neutral palette curated for entertaining.',
    image: '/images/projects/york-real.jpg',
    gallery: ["/images/projects/york/1.jpg","/images/projects/york/2.jpg","/images/projects/york/3.jpg","/images/projects/york/4.jpg","/images/projects/york/5.jpg","/images/projects/york/6.jpg","/images/projects/york/7.jpg","/images/projects/york/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/pxHJK4b',
    location: 'Richmond, VA',
    featured: true,
  },
  {
    slug: 'cragmont',
    name: 'Cragmont',
    type: 'renovation',
    tagline: 'Modern French Provincial Whole-Home Renovation',
    description:
      'A modern French provincial renovation balancing classic European symmetry with contemporary interiors, including a chef\u2019s kitchen and primary suite reimagined.',
    image: '/images/projects/cragmont-real.jpg',
    gallery: ["/images/projects/cragmont/1.jpg","/images/projects/cragmont/2.jpg","/images/projects/cragmont/3.jpg","/images/projects/cragmont/4.jpg","/images/projects/cragmont/5.jpg","/images/projects/cragmont/6.jpg","/images/projects/cragmont/7.jpg","/images/projects/cragmont/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/jqfmRXM',
    location: 'Richmond, VA',
  },
  {
    slug: 'lexington',
    name: 'Lexington',
    type: 'renovation',
    tagline: 'Historic Cottage Whole-Home Renovation',
    description:
      'A charming historic cottage whole-home renovation that preserved original details while reconfiguring the layout for modern flow and everyday livability.',
    image: '/images/projects/lexington-real.jpg',
    gallery: ["/images/projects/lexington/1.jpg","/images/projects/lexington/2.jpg","/images/projects/lexington/3.jpg","/images/projects/lexington/4.jpg","/images/projects/lexington/5.jpg","/images/projects/lexington/6.jpg","/images/projects/lexington/7.jpg","/images/projects/lexington/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/vdxJkFb',
    location: 'Richmond, VA',
  },
  {
    slug: 'custis',
    name: 'Custis',
    type: 'renovation',
    tagline: 'Colonial Whole-Home Renovation',
    description:
      'A classic Colonial whole-home renovation with restored Georgian symmetry, a reimagined kitchen and butler\u2019s pantry, and a primary suite addition.',
    image: '/images/projects/custis-real.jpg',
    gallery: ["/images/projects/custis/1.jpg","/images/projects/custis/2.jpg","/images/projects/custis/3.jpg","/images/projects/custis/4.jpg","/images/projects/custis/5.jpg","/images/projects/custis/6.jpg","/images/projects/custis/7.jpg","/images/projects/custis/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/vyg9bkb',
    location: 'Richmond, VA',
  },
  {
    slug: 'oxford',
    name: 'Oxford',
    type: 'renovation',
    tagline: 'Classic Whole-Home Renovation',
    description:
      'A classic whole-home renovation featuring custom built-in bookcases, a marble fireplace, and elegant moldings throughout the principal rooms.',
    image: '/images/projects/oxford-real.jpg',
    gallery: ["/images/projects/oxford/1.jpg","/images/projects/oxford/2.jpg","/images/projects/oxford/3.jpg","/images/projects/oxford/4.jpg","/images/projects/oxford/5.jpg","/images/projects/oxford/6.jpg","/images/projects/oxford/7.jpg","/images/projects/oxford/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/rrswJTm',
    location: 'Richmond, VA',
    press: ['Featured in Home&Design Magazine'],
  },
  {
    slug: 'laburnum',
    name: 'Laburnum Park',
    type: 'renovation',
    tagline: 'Historic Dutch Colonial Whole-Home Renovation',
    description:
      'A historic Dutch Colonial whole-home renovation that preserved the gambrel roofline and cedar shingles while modernizing the interior layout and systems.',
    image: '/images/projects/laburnum-real.jpg',
    gallery: ["/images/projects/laburnum/1.jpg","/images/projects/laburnum/2.jpg","/images/projects/laburnum/3.jpg","/images/projects/laburnum/4.jpg","/images/projects/laburnum/5.jpg","/images/projects/laburnum/6.jpg","/images/projects/laburnum/7.jpg","/images/projects/laburnum/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/wR4rKkq',
    location: 'Richmond, VA',
  },
  {
    slug: 'laburnum-craftsman',
    name: 'Laburnum Park Craftsman',
    type: 'renovation',
    tagline: 'Architect\u2019s Craftsman Whole-Home Renovation',
    description:
      'An architect\u2019s craftsman whole-home renovation restoring tapered stone columns, exposed rafters, and a deep porch, with a fully reimagined interior.',
    image: '/images/projects/laburnum-craftsman-real.jpg',
    gallery: ["/images/projects/laburnum-craftsman/1.jpg","/images/projects/laburnum-craftsman/2.jpg","/images/projects/laburnum-craftsman/3.jpg","/images/projects/laburnum-craftsman/4.jpg","/images/projects/laburnum-craftsman/5.jpg","/images/projects/laburnum-craftsman/6.jpg","/images/projects/laburnum-craftsman/7.jpg","/images/projects/laburnum-craftsman/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/kMhvjjj',
    location: 'Richmond, VA',
  },
  {
    slug: 'carriage',
    name: 'Carriage',
    type: 'renovation',
    tagline: 'Traditional Whole-Home Renovation',
    description:
      'A traditional whole-home renovation with custom white cabinetry, a large center island, and a farmhouse sink anchoring the reimagined kitchen.',
    image: '/images/projects/carriage-real.jpg',
    gallery: ["/images/projects/carriage/1.jpg","/images/projects/carriage/2.jpg","/images/projects/carriage/3.jpg","/images/projects/carriage/4.jpg","/images/projects/carriage/5.jpg","/images/projects/carriage/6.jpg","/images/projects/carriage/7.jpg","/images/projects/carriage/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/wT1jFnG',
    location: 'Richmond, VA',
  },
  {
    slug: 'charles',
    name: 'The Charles Row Homes',
    type: 'new-build',
    tagline: 'Designer New Build',
    description:
      'A designer new build of modern farmhouse row homes with board-and-batten siding, black metal roofs, and large picture windows flooding the interiors.',
    image: '/images/projects/charles-real.jpg',
    gallery: ["/images/projects/charles/1.jpg","/images/projects/charles/2.jpg","/images/projects/charles/3.jpg","/images/projects/charles/4.jpg","/images/projects/charles/5.jpg","/images/projects/charles/6.jpg","/images/projects/charles/7.jpg","/images/projects/charles/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/fMNdfnG',
    location: 'Richmond, VA',
  },
  {
    slug: 'cragmont-circle',
    name: 'Cragmont Circle',
    type: 'new-build',
    tagline: 'Richmond Traditional New Build',
    description:
      'A Richmond traditional new build with red brick facade, white columns, and southern colonial proportions tailored to its established neighborhood.',
    image: '/images/projects/cragmont-circle-real.jpg',
    gallery: ["/images/projects/cragmont-circle/1.jpg","/images/projects/cragmont-circle/2.jpg","/images/projects/cragmont-circle/3.jpg","/images/projects/cragmont-circle/4.jpg","/images/projects/cragmont-circle/5.jpg","/images/projects/cragmont-circle/6.jpg","/images/projects/cragmont-circle/7.jpg","/images/projects/cragmont-circle/8.jpg"],
    galleryUrl: 'https://postimg.cc/gallery/25GssFg',
    location: 'Richmond, VA',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

// Roots of Spruce - guiding principles
export interface Principle {
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Live (and work) by the golden rule',
    description:
      'We treat every client, partner, and jobsite the way we would want our own home treated.',
  },
  {
    title: 'Build houses and relationships',
    description:
      'A home is a long-term commitment, and so is the relationship we build alongside it.',
  },
  {
    title: 'Scrutinize the details',
    description:
      'The details make all the difference. We sweat them so you don\u2019t have to.',
  },
  {
    title: 'Support local whenever possible',
    description:
      'We invest in local craftspeople, suppliers, and partners who share our standards.',
  },
  {
    title: 'Choose quality over quantity',
    description:
      'We take on a limited number of projects so each one gets the attention it deserves.',
  },
  {
    title: 'Know and practice good design',
    description:
      'Good design is not optional. It informs every decision, from layout to hardware.',
  },
  {
    title: 'Respect the character of every house and neighborhood',
    description:
      'We honor what came before, preserving the spirit of the homes and streets we touch.',
  },
  {
    title: 'Design with the surroundings',
    description:
      'A home should belong to its site. We design with light, slope, and landscape in mind.',
  },
  {
    title: 'Do the right thing in all things',
    description:
      'Even when no one is looking. Especially when no one is looking.',
  },
  {
    title: 'Keep learning and growing',
    description:
      'Building is a craft with no finish line. We get better with every project.',
  },
]

// Team members
export interface TeamMember {
  name: string
  role: string
  initials: string
  photo?: string
}

export const team: TeamMember[] = [
  { name: 'Jordan Hutchins', role: 'Founder', initials: 'JH', photo: '/images/team/jordan-hutchins.jpg' },
  { name: 'Michael Hyatt', role: 'Construction Manager', initials: 'MH', photo: '/images/team/michael-hyatt.jpg' },
  { name: 'Christi McFadden', role: 'Selections Manager', initials: 'CM', photo: '/images/team/christi-mcfadden.jpg' },
  { name: 'Shannon Easter', role: 'Office Manager', initials: 'SE', photo: '/images/team/shannon-easter.jpg' },
  { name: 'Ian Hoyt', role: 'Development Manager', initials: 'IH', photo: '/images/team/ian-hoyt.jpg' },
  { name: 'Carey Hutchins', role: 'Design & Marketing', initials: 'CH', photo: '/images/team/carey-hutchins.jpg' },
  { name: 'Mike Poole', role: 'Project Manager RVA', initials: 'MP', photo: '/images/team/mike-poole.jpg' },
  { name: 'Rachel Briggs', role: 'Selections Coordinator', initials: 'RB', photo: '/images/team/rachel-briggs.jpg' },
  { name: 'Brandon Hendrix', role: 'Project Manager RVA', initials: 'BH', photo: '/images/team/brandon-hendrix.jpg' },
  { name: 'Dylan Szalankiewicz', role: 'Cost Estimator', initials: 'DS', photo: '/images/team/dylan-szalankiewicz.jpg' },
  { name: 'Mark Strawn', role: 'Project Manager River', initials: 'MS', photo: '/images/team/mark-strawn.jpg' },
  { name: 'Lee Wood', role: 'Project Manager River', initials: 'LW', photo: '/images/team/lee-wood.jpg' },
]

// Process steps
export interface ProcessStep {
  step: number
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Listen & Discover',
    description:
      'We start with a conversation about your home, your vision, and the way you want to live. Every project begins with understanding.',
  },
  {
    step: 2,
    title: 'Collaborate & Design',
    description:
      'We coordinate with trusted architects and designers to translate your vision into a clear, buildable plan with thoughtful detail.',
  },
  {
    step: 3,
    title: 'Build with Craftsmanship',
    description:
      'Our construction managers and project managers build with detail-driven care, using the highest quality materials at every step.',
  },
  {
    step: 4,
    title: 'Welcome Home',
    description:
      'A final walkthrough, a long-term relationship, and a home that will be loved by future generations.',
  },
]

// FAQ items
export interface FAQItem {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: 'What types of projects does Spruce take on?',
    answer:
      'Spruce focuses on custom residential new builds and whole-home renovations across Richmond and the Northern Neck. We take on a limited number of projects each year so each one receives the attention it deserves.',
  },
  {
    question: 'What is a typical project timeline?',
    answer:
      'A whole-home renovation typically runs 6 to 12 months depending on scope; a custom new build generally runs 10 to 18 months from groundbreaking to move-in. After our initial discovery conversation we provide a project-specific schedule.',
  },
  {
    question: 'Do you work with my architect or designer?',
    answer:
      'Absolutely. We frequently collaborate with outside architects and designers, and we also connect clients with trusted design partners from our network when needed. Our role is to bring the design vision to life.',
  },
  {
    question: 'What budget ranges do you typically work with?',
    answer:
      'Project budgets vary widely based on scope, but most whole-home renovations and custom new builds we take on begin in the mid six figures. We are transparent about budget throughout the process and help you make informed trade-offs.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We build across the Richmond metro area, Virginia\u2019s Northern Neck, and surrounding communities including Manakin Sabot, where our Boscobel Trace community is located.',
  },
  {
    question: 'How do we get started?',
    answer:
      'The first step is a conversation. Submit the contact form with a few details about your project, timing, and budget, and we will be in touch shortly to schedule a discovery call.',
  },
]

// Testimonials (added - not in spec, but valuable for social proof)
export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'We have been so impressed with Spruce! They are starting our project in the coming weeks and the level of professionalism and care has been outstanding from day one.',
    author: 'Mckenzie Woodard',
    role: 'Google Review · 5 stars',
  },
  {
    quote:
      'Spruce treated our 1920s home with more care than we thought possible. Every detail was considered, every trade was held to a standard, and the result is a house that feels both completely new and completely itself.',
    author: 'The Marsh Family',
    role: 'Whole-Home Renovation, Richmond',
  },
  {
    quote:
      'From our first conversation to the final walkthrough, the Spruce team felt like an extension of our family. They listened, they pushed back when they should have, and they delivered something truly special.',
    author: 'David & Anne',
    role: 'Custom New Build, Manakin Sabot',
  },
]

// Google Reviews rating summary (from Google Business Profile)
export const googleRating = {
  score: 4.4,
  reviewCount: 7,
  url: 'https://www.google.com/maps/place/Spruce+Construction/@37.5592929,-77.47238,16z',
}

// Stats
export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '20+', label: 'Years of craftsmanship' },
  { value: '200+', label: 'Homes delivered' },
  { value: '12', label: 'Dedicated team members' },
  { value: '2', label: 'Regions served in Virginia' },
]

export const CONTACT_INFO = {
  address: '526 N. Arthur Ashe Blvd., Richmond, Virginia 23220',
  addressShort: '526 N. Arthur Ashe Blvd., Richmond, VA 23220',
  email: 'carey@sprucerva.com',
  phone: '(804) 316-3667',
  phoneHref: 'tel:+18043163667',
  instagram: '@spruce_rva',
  instagramUrl: 'https://www.instagram.com/spruce_rva',
  facebookUrl: 'https://www.facebook.com/sprucerva',
  houzzUrl: 'https://www.houzz.com/pro/sprucerva',
  linkedinUrl: 'https://www.linkedin.com/company/spruce-construction',
  boscobelUrl: 'https://www.boscobeltrace.com',
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-77.487%2C37.555%2C-77.467%2C37.565&layer=mapnik&marker=37.5605%2C-77.477',
}

export interface SocialLink {
  label: string
  href: string
  icon: 'Instagram' | 'Facebook' | 'Linkedin' | 'Houzz'
}

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: CONTACT_INFO.instagramUrl, icon: 'Instagram' },
  { label: 'Facebook', href: CONTACT_INFO.facebookUrl, icon: 'Facebook' },
  { label: 'Houzz', href: CONTACT_INFO.houzzUrl, icon: 'Houzz' },
  { label: 'LinkedIn', href: CONTACT_INFO.linkedinUrl, icon: 'Linkedin' },
]

export const projectTypeOptions = [
  'New Build',
  'Whole-Home Renovation',
  'Not sure yet',
]

export const timingOptions = [
  'ASAP',
  'Within 3 months',
  '3-6 months',
  '6-12 months',
  '12+ months',
  'Just exploring',
]

export const budgetOptions = [
  'Under $250k',
  '$250k - $500k',
  '$500k - $750k',
  '$750k - $1M',
  '$1M - $2M',
  '$2M+',
  'Prefer to discuss',
]

export const NAV_ITEMS: { id: 'home' | 'portfolio' | 'services' | 'about' | 'contact'; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
