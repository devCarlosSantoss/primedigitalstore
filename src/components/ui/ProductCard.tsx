"use client"

import Link from "next/link"
import { Product } from "@/types"
import { Icon } from "./Icon"
import { formatPrice, formatSalesCount } from "@/lib/utils"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const { t } = useLanguage()

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className={`group card-hover flex flex-col overflow-hidden ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "lg:w-2/5" : "aspect-[4/3]"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {product.originalPrice && (
          <div className="absolute top-3 left-3">
            <span className="badge-secondary">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          </div>
        )}
        {product.bestSeller && !featured && (
          <div className="absolute top-3 right-3">
            <span className="badge-sales flex items-center gap-1">
              <Icon name="TrendingUp" size={12} />
              {t.productCard.bestSeller}
            </span>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-4 xs:p-5 ${featured ? "lg:w-3/5 lg:p-6" : ""}`}>
        <div className="mb-1 flex items-center gap-2">
          <span className="badge-primary text-[11px] uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        <h3 className="text-base xs:text-lg font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-dark-500 line-clamp-2">
          {product.subtitle}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-dark-400">
          <span className="flex items-center gap-1">
            <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-dark-700">{product.rating}</span>
            <span>({product.reviewCount})</span>
          </span>
          <span className="flex items-center gap-1">
            <Icon name="ShoppingBag" size={14} />
            {formatSalesCount(product.salesCount)} {t.productCard.sold}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 xs:pt-4">
          <div className="flex items-baseline gap-1 xs:gap-2">
            <span className="text-xl xs:text-2xl font-bold text-dark-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-dark-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
            {t.productCard.viewMore}
            <Icon name="ArrowRight" size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}
