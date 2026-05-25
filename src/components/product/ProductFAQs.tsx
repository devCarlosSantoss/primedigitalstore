"use client"

import { Product } from "@/types"
import { ProductFAQ } from "../sections/ProductFAQ"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductFAQsProps {
  product: Product
}

export function ProductFAQs({ product }: ProductFAQsProps) {
  const { t } = useLanguage()

  if (!product.faq || product.faq.length === 0) return null

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-dark-50">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="badge-primary mb-4">{t.productFAQs.badge}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
              {t.productFAQs.title}{" "}
              <span className="gradient-text">{t.productFAQs.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-dark-500">
              {t.productFAQs.subtitle}
            </p>
          </div>

          <ProductFAQ faqs={product.faq} />
        </div>
      </div>
    </section>
  )
}
