export type Locale = "pt" | "en"

export interface LocalizedString {
  pt: string
  en: string
}

export interface Product {
  id: string
  slug: string
  name: string
  subtitle: string
  tagline: string
  description: string
  fullDescription: string
  price: number
  originalPrice?: number
  image: string
  category: Category["id"]
  rating: number
  reviewCount: number
  salesCount: number
  benefits: string[]
  whatYouGet: string[]
  bonus: Bonus[]
  faq: FAQItem[]
  testimonials: Testimonial[]
  featured: boolean
  bestSeller: boolean
  tags: string[]
}

export interface Category {
  id: string
  name: LocalizedString
  description: LocalizedString
  icon: string
  slug: string
  productCount: number
}

export interface Bonus {
  title: string
  description: string
  value: string
}

export interface FAQItem {
  question: LocalizedString
  answer: LocalizedString
}

export interface Testimonial {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

export interface Benefit {
  icon: string
  title: LocalizedString
  description: LocalizedString
}
