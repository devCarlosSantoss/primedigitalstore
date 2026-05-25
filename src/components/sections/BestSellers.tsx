"use client"

import { products } from "@/data/products"
import { ProductCard } from "../ui/ProductCard"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"

export function BestSellers() {
  const { t } = useLanguage()
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4)

  return (
    <section id="mais-vendidos" className="py-12 xs:py-16 sm:py-24 bg-dark-50">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="lg:w-1/3">
            <span className="badge-secondary mb-4">{t.bestSellers.badge}</span>
            <h2 className="section-title text-dark-900">
              {t.bestSellers.title}{" "}
              <span className="gradient-text">{t.bestSellers.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-dark-500 leading-relaxed">
              {t.bestSellers.subtitle}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-dark-400">
              <Icon name="TrendingUp" size={16} className="text-accent-500" />
              <span>{t.bestSellers.updateText}</span>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
