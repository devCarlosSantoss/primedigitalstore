export type Locale = "pt" | "en"

export interface Dictionary {
  header: {
    logo: string
    subtitle: string
    nav: {
      home: string
      categories: string
      bestSellers: string
      faq: string
      menu: string
    }
    categoryCount: string
  }
  hero: {
    badge: string
    title1: string
    titleHighlight1: string
    title2: string
    titleHighlight2: string
    subtitle: string
    cta: string
    ctaSecondary: string
    rating: string
    customers: string
    stats: string
    trustText: string
  }
  categories: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    productCount: string
  }
  featured: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
  }
  bestSellers: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    updateText: string
  }
  benefits: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
  }
  testimonials: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
  }
  faq: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    helpTitle: string
    helpText: string
  }
  newsletter: {
    title: string
    titleHighlight: string
    subtitle: string
    subscribedTitle: string
    subscribedText: string
    placeholder: string
    button: string
    privacy: string
  }
  productCard: {
    bestSeller: string
    viewMore: string
    sold: string
  }
  productHeader: {
    backToStore: string
    percentOff: string
    reviews: string
    sold: string
    savings: string
    buyNow: string
    viewContent: string
    delivery: string
    securePayment: string
    lifetimeAccess: string
    guarantee: string
    trustCustomers: string
    orInstallments: string
  }
  productContent: {
    badge: string
    title: string
    benefitsTitle: string
    whatYouGet: string
    testimonialTitle: string
  }
  productBonus: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    totalValue: string
    bonusLabel: string
    worth: string
    free: string
  }
  productCTA: {
    title: string
    subtitle: string
    savings: string
    limitedOffer: string
    buyNow: string
    securePayment: string
    delivery: string
    lifetimeAccess: string
    guarantee: string
    guaranteeText: string
    creditCard: string
    bankSlip: string
    pix: string
    protectedPurchase: string
  }
  productFAQs: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    contactTitle: string
    contactText: string
    contactButton: string
  }
  countdown: {
    title: string
    days: string
    hours: string
    minutes: string
    seconds: string
  }
  productRelated: {
    badge: string
    title: string
    subtitle: string
  }
  footer: {
    subtitle: string
    description: string
    categories: string
    helpSection: string
    helpLinks: {
      helpCenter: string
      faq: string
      privacy: string
      terms: string
      refund: string
    }
    contact: string
    rights: string
    securePayment: string
    protectedData: string
  }
}
