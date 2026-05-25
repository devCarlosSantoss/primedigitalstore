"use client"

import { products } from "@/data/products"
import { ProductCard } from "../ui/ProductCard"
import { useLanguage } from "@/i18n/LanguageProvider"

export function FeaturedProducts() {
  const { t } = useLanguage()
  const featured = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section id="produtos" className="py-12 xs:py-16 sm:py-24 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="badge-primary mb-4">{t.featured.badge}</span>
          <h2 className="section-title text-dark-900">
            {t.featured.title}{" "}
            <span className="gradient-text">{t.featured.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.featured.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
