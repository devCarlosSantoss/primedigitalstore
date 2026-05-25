"use client"

import { Product } from "@/types"
import { Icon } from "../ui/Icon"
import { formatPrice } from "@/lib/utils"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductBonusProps {
  product: Product
}

export function ProductBonus({ product }: ProductBonusProps) {
  const { t } = useLanguage()

  if (!product.bonus || product.bonus.length === 0) return null

  const totalBonusValue = product.bonus.reduce(
    (acc, b) => acc + parseFloat(b.value.replace("R$ ", "").replace("/mês", "").trim()),
    0
  )

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-dark-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <span className="badge-secondary mb-4">{t.productBonus.badge}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
            {t.productBonus.title}{" "}
            <span className="gradient-text">{t.productBonus.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-dark-500 max-w-xl mx-auto">
            {t.productBonus.subtitle}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-sm font-semibold text-accent-800">
            <Icon name="Gift" size={16} />
            {t.productBonus.totalValue} {formatPrice(totalBonusValue)}
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 max-w-4xl mx-auto">
          {product.bonus.map((bonus, i) => (
            <div
              key={i}
              className="card-hover p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-bl from-secondary-500 to-secondary-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                  {t.productBonus.bonusLabel}
                </div>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100 text-secondary-600">
                <Icon name="Gift" size={24} />
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-2">
                {bonus.title}
              </h3>
              <p className="text-sm text-dark-500 mb-4">
                {bonus.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary-600 bg-secondary-50 rounded-full px-3 py-1">
                <Icon name="Tag" size={12} />
                {t.productBonus.worth} {bonus.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
