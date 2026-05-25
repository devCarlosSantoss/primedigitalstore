"use client"

import { Product } from "@/types"
import { products } from "@/data/products"
import { ProductCard } from "../ui/ProductCard"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductRelatedProps {
  product: Product
}

export function ProductRelated({ product }: ProductRelatedProps) {
  const { t } = useLanguage()

  const related = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.slug !== product.slug
    )
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
            {t.productRelated.title}
          </h2>
          <p className="mt-3 text-dark-500">
            {t.productRelated.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 max-w-4xl mx-auto">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
