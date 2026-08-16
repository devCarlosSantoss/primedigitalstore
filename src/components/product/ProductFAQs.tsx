"use client"

import { Product } from "@/types"
import { ProductFAQ } from "../sections/ProductFAQ"
import { Icon } from "../ui/Icon"
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

          <div className="mt-8 rounded-2xl border border-dashed border-dark-200 bg-white p-6 xs:p-8 text-center">
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <Icon name="MessageCircle" size={24} />
            </span>
            <h3 className="text-lg font-bold text-dark-900">
              {t.productFAQs.contactTitle}
            </h3>
            <p className="mt-1 text-sm text-dark-500">
              {t.productFAQs.contactText}
            </p>
            <a
              href="mailto:suporte@primedigitalstore.com.br"
              className="btn-secondary mt-4"
            >
              <Icon name="Mail" size={18} />
              {t.productFAQs.contactButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}