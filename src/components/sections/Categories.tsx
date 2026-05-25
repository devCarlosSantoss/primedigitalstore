"use client"

import Link from "next/link"
import { categories } from "@/data/products"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"
import { localeText } from "@/data/products"

export function Categories() {
  const { t, locale } = useLanguage()

  return (
    <section id="categorias" className="py-16 sm:py-24 bg-dark-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="badge-primary mb-4">{t.categories.badge}</span>
          <h2 className="section-title text-dark-900">
            {t.categories.title}{" "}
            <span className="gradient-text">{t.categories.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.categories.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className="group card-hover p-4 xs:p-6 sm:p-8 text-center"
            >
              <div className="mx-auto mb-3 xs:mb-4 flex h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary-600/20">
                <Icon name={cat.icon} size={24} />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                {localeText(cat.name, locale)}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-dark-500 line-clamp-2">
                {localeText(cat.description, locale)}
              </p>
              <p className="mt-3 text-xs font-medium text-primary-600">
                {t.categories.productCount.replace("{count}", String(cat.productCount))}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
