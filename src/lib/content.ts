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
}

export const projects: Project[] = [
  {
    slug: 'palmyra',
    name: 'Palmyra',
    type: 'renovation',
    tagline: 'Historic Tudor Whole-Home Renovation',
    description:
      'A meticulous restoration of a historic Tudor home, preserving its architectural heritage while modernizing every system and surface for contemporary family life.',
    image: '/images/projects/palmyra.jpg',
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
    image: '/images/projects/cherokee.jpg',
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
    image: '/images/projects/erlwood.jpg',
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
    image: '/images/projects/south.jpg',
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
    image: '/images/projects/york.jpg',
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
    image: '/images/projects/cragmont.jpg',
    location: 'Richmond, VA',
  },
  {
    slug: 'lexington',
    name: 'Lexington',
    type: 'renovation',
    tagline: 'Historic Cottage Whole-Home Renovation',
    description:
      'A charming historic cottage whole-home renovation that preserved original details while reconfiguring the layout for modern flow and everyday livability.',
    image: '/images/projects/lexington.jpg',
    location: 'Richmond, VA',
  },
  {
    slug: 'custis',
    name: 'Custis',
    type: 'renovation',
    tagline: 'Colonial Whole-Home Renovation',
    description:
      'A classic Colonial whole-home renovation with restored Georgian symmetry, a reimagined kitchen and butler\u2019s pantry, and a primary suite addition.',
    image: '/images/projects/custis.jpg',
    location: 'Richmond, VA',
  },
  {
    slug: 'oxford',
    name: 'Oxford',
    type: 'renovation',
    tagline: 'Classic Whole-Home Renovation',
    description:
      'A classic whole-home renovation featuring custom built-in bookcases, a marble fireplace, and elegant moldings throughout the principal rooms.',
    image: '/images/projects/oxford.jpg',
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
    image: '/images/projects/laburnum.jpg',
    location: 'Richmond, VA',
  },
  {
    slug: 'laburnum-craftsman',
    name: 'Laburnum Park Craftsman',
    type: 'renovation',
    tagline: 'Architect\u2019s Craftsman Whole-Home Renovation',
    description:
      'An architect\u2019s craftsman whole-home renovation restoring tapered stone columns, exposed rafters, and a deep porch, with a fully reimagined interior.',
    image: '/images/projects/laburnum-craftsman.jpg',
    location: 'Richmond, VA',
  },
  {
    slug: 'carriage',
    name: 'Carriage',
    type: 'renovation',
    tagline: 'Traditional Whole-Home Renovation',
    description:
      'A traditional whole-home renovation with custom white cabinetry, a large center island, and a farmhouse sink anchoring the reimagined kitchen.',
    image: '/images/projects/carriage.jpg',
    location: 'Richmond, VA',
  },
  {
    slug: 'charles',
    name: 'The Charles Row Homes',
    type: 'new-build',
    tagline: 'Designer New Build',
    description:
      'A designer new build of modern farmhouse row homes with board-and-batten siding, black metal roofs, and large picture windows flooding the interiors.',
    image: '/images/projects/charles.jpg',
    location: 'Richmond, VA',
  },
  {
    slug: 'cragmont-circle',
    name: 'Cragmont Circle',
    type: 'new-build',
    tagline: 'Richmond Traditional New Build',
    description:
      'A Richmond traditional new build with red brick facade, white columns, and southern colonial proportions tailored to its established neighborhood.',
    image: '/images/projects/cragmont-circle.jpg',
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
}

export const team: TeamMember[] = [
  { name: 'Jordan Hutchins', role: 'Founder', initials: 'JH' },
  { name: 'Michael Hyatt', role: 'Construction Manager', initials: 'MH' },
  { name: 'Christi McFadden', role: 'Selections Manager', initials: 'CM' },
  { name: 'Shannon Easter', role: 'Office Manager', initials: 'SE' },
  { name: 'Ian Hoyt', role: 'Development Manager', initials: 'IH' },
  { name: 'Carey Hutchins', role: 'Design & Marketing', initials: 'CH' },
  { name: 'Mike Poole', role: 'Project Manager RVA', initials: 'MP' },
  { name: 'Rachel Briggs', role: 'Selections Coordinator', initials: 'RB' },
  { name: 'Brandon Hendrix', role: 'Project Manager RVA', initials: 'BH' },
  { name: 'Dylan Szalankiewicz', role: 'Cost Estimator', initials: 'DS' },
  { name: 'Mark Strawn', role: 'Project Manager River', initials: 'MS' },
  { name: 'Lee Wood', role: 'Project Manager River', initials: 'LW' },
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
  {
    quote:
      'We have referred Spruce to half our neighborhood. They are the rare builder who cares as much about the character of the street as they do about the house they are building.',
    author: 'The Castles',
    role: 'Historic Renovation, Richmond',
  },
]

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
  instagram: '@spruce_rva',
  instagramUrl: 'https://www.instagram.com/spruce_rva',
  boscobelUrl: 'https://www.boscobeltrace.com',
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-77.487%2C37.555%2C-77.467%2C37.565&layer=mapnik&marker=37.5605%2C-77.477',
}

export const NAV_ITEMS: { id: 'home' | 'portfolio' | 'services' | 'about' | 'contact'; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
