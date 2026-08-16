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

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  const installment = product.price / 3

  return (
    <section className="bg-dark-950 relative overflow-hidden pt-20 sm:pt-28">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
      <div className="absolute -top-20 -right-40 h-[480px] w-[480px] rounded-full bg-secondary-600/20 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/70 to-dark-950" />

      <div className="container-wide relative pb-12 sm:pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors mb-6"
        >
          <Icon name="ChevronRight" size={16} className="rotate-180" />
          {t.productHeader.backToStore}
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative lg:sticky lg:top-28">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-500/30 via-secondary-500/20 to-transparent blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent" />
            </div>

            {product.originalPrice && (
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 animate-float">
                <span className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-secondary-500/40">
                  <Icon name="Zap" size={16} />
                  -{discount}% {t.productHeader.percentOff}
                </span>
              </div>
            )}

            {product.bestSeller && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-accent-500/30">
                  <Icon name="TrendingUp" size={13} />
                  {t.productCard.bestSeller}
                </span>
              </div>
            )}

            <div className="absolute -bottom-5 -left-2 sm:-left-4 animate-float rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-xl backdrop-blur [animation-delay:2s]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {product.testimonials.slice(0, 3).map((t_item) => (
                    <img
                      key={t_item.name}
                      src={t_item.avatar}
                      alt={t_item.name}
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-dark-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-dark-700">
                    {t.productHeader.trustCustomers.replace("{count}", `${product.salesCount}+`)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="badge-primary text-[11px] uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="mt-3 text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-dark-400">{product.subtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-dark-600"
                    }
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

            <div className="rounded-2xl bg-white p-5 xs:p-7 shadow-2xl shadow-primary-500/10">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-4xl xs:text-5xl font-bold text-dark-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-dark-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {product.originalPrice && (
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-3 py-1 font-bold text-accent-700">
                    {t.productHeader.savings} {formatPrice(product.originalPrice - product.price)}
                  </span>
                  <span className="text-dark-400">
                    {t.productHeader.orInstallments.replace("{price}", formatPrice(installment))}
                  </span>
                </div>
              )}

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="#comprar" className="btn-cta flex-1 text-base">
                  <Icon name="ShoppingBag" size={20} />
                  {t.productHeader.buyNow}
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-dark-200 bg-white px-6 py-3.5 text-base font-semibold text-dark-600 transition-all duration-300 hover:border-primary-600 hover:text-primary-600 active:scale-[0.98]"
                >
                  <Icon name="Eye" size={20} />
                  {t.productHeader.viewContent}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-dark-400 sm:grid-cols-4">
              {[
                { icon: "Zap", label: t.productHeader.delivery },
                { icon: "ShieldCheck", label: t.productHeader.securePayment },
                { icon: "RefreshCw", label: t.productHeader.lifetimeAccess },
                { icon: "Award", label: t.productHeader.guarantee },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                >
                  <Icon name={item.icon} size={16} className="shrink-0 text-accent-400" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <p className="border-l-2 border-primary-500/50 pl-4 text-sm leading-relaxed text-dark-500">
              {product.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}