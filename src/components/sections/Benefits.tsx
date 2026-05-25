"use client"

import { benefits } from "@/data/products"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"
import { localeText } from "@/data/products"

export function Benefits() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-12 xs:py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-50/50 to-transparent" />
      <div className="container-wide relative">
        <div className="text-center mb-12">
          <span className="badge-primary mb-4">{t.benefits.badge}</span>
          <h2 className="section-title text-dark-900">
            {t.benefits.title}{" "}
            <span className="gradient-text">{t.benefits.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.icon}
              className="card-hover p-5 xs:p-6 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 mb-5">
                <Icon name={benefit.icon} size={24} />
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-2">
                {localeText(benefit.title, locale)}
              </h3>
              <p className="text-sm text-dark-500 leading-relaxed">
                {localeText(benefit.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
