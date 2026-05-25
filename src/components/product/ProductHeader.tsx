"use client"

import Link from "next/link"
import { Icon } from "../ui/Icon"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/types"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductHeaderProps {
  product: Product
}

export function ProductHeader({ product }: ProductHeaderProps) {
  const { t } = useLanguage()

  return (
    <section className="bg-dark-950 relative overflow-hidden pt-20 sm:pt-28">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-hero-glow" />

      <div className="container-wide relative pb-12 sm:pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors mb-6"
        >
          <Icon name="ChevronRight" size={16} className="rotate-180" />
          {t.productHeader.backToStore}
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            {product.originalPrice && (
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                <span className="inline-flex items-center gap-1 rounded-lg sm:rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-lg shadow-secondary-500/30">
                  <Icon name="Zap" size={16} />
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}% {t.productHeader.percentOff}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <span className="badge-primary text-[11px] uppercase tracking-wider mb-3">
                {product.category}
              </span>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mt-2">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-dark-400">
                {product.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-dark-600"}
                  />
                ))}
                <span className="ml-1 text-dark-300">
                  {product.rating} ({product.reviewCount} {t.productHeader.reviews})
                </span>
              </div>
              <span className="flex items-center gap-1 text-dark-400">
                <Icon name="ShoppingBag" size={16} />
                {product.salesCount}+ {t.productHeader.sold}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-dark-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-xs sm:text-sm text-accent-400 font-semibold w-full xs:w-auto">
                {t.productHeader.savings} {formatPrice(product.originalPrice! - product.price)}
              </span>
            </div>

            <p className="text-dark-400 leading-relaxed">
              {product.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#comprar"
                className="btn-cta text-base flex-1"
              >
                <Icon name="ShoppingBag" size={20} />
                {t.productHeader.buyNow}
              </a>
              <a
                href="#beneficios"
                className="btn-secondary border-white/10 text-dark-300 hover:bg-white/10 hover:text-white flex-1"
              >
                <Icon name="Eye" size={20} />
                {t.productHeader.viewContent}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-dark-500">
              <span className="flex items-center gap-1">
                <Icon name="Zap" size={14} className="text-accent-400" /> {t.productHeader.delivery}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="ShieldCheck" size={14} className="text-accent-400" /> {t.productHeader.securePayment}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="RefreshCw" size={14} className="text-accent-400" /> {t.productHeader.lifetimeAccess}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Award" size={14} className="text-accent-400" /> {t.productHeader.guarantee}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
