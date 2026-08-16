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
    <section className="relative overflow-hidden bg-dark-50 py-12 xs:py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="container-wide relative">
        <div className="text-center mb-10">
          <span className="badge-secondary mb-4">{t.productBonus.badge}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
            {t.productBonus.title}{" "}
            <span className="gradient-text">{t.productBonus.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-dark-500 max-w-xl mx-auto">
            {t.productBonus.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-700 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-secondary-500/30">
            <Icon name="Gift" size={16} />
            {t.productBonus.totalValue} {formatPrice(totalBonusValue)}
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 max-w-4xl mx-auto">
          {product.bonus.map((bonus, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-gradient-to-br from-secondary-200 via-transparent to-secondary-200 p-[1px] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-white p-6 sm:p-7">
                <div className="absolute top-0 right-0">
                  <div className="flex items-center gap-1 rounded-bl-xl bg-gradient-to-bl from-secondary-500 to-secondary-700 px-3 py-1 text-[10px] font-bold text-white">
                    <Icon name="Gift" size={12} />
                    {t.productBonus.bonusLabel}
                  </div>
                </div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 text-white shadow-lg shadow-secondary-500/30 transition-transform group-hover:scale-110">
                  <Icon name="Gift" size={24} />
                </div>

                <h3 className="text-lg font-bold text-dark-900 mb-2">
                  {bonus.title}
                </h3>
                <p className="text-sm text-dark-500 mb-5 flex-1">
                  {bonus.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-dashed border-dark-200 pt-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary-50 px-3 py-1 text-xs font-semibold text-secondary-600">
                    <Icon name="Tag" size={12} />
                    {t.productBonus.worth} {bonus.value}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">
                    <Icon name="Check" size={12} />
                    {t.productBonus.free}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}