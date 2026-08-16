"use client"

import { Product } from "@/types"
import { Icon } from "../ui/Icon"
import { Countdown } from "./Countdown"
import { formatPrice } from "@/lib/utils"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductCTAProps {
  product: Product
}

export function ProductCTA({ product }: ProductCTAProps) {
  const { t } = useLanguage()

  return (
    <section id="comprar" className="relative overflow-hidden bg-dark-950 py-12 xs:py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary-600/30 blur-[120px]" />
      <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-secondary-600/20 blur-[100px]" />

      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-secondary mb-4">{t.productCTA.guarantee}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.productCTA.title}
          </h2>
          <p className="mt-3 text-dark-400 max-w-xl mx-auto">
            {t.productCTA.subtitle}
          </p>

          <div className="mt-8">
            <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-400">
              <Icon name="Flame" size={18} />
              {t.countdown.title}
            </p>
            <Countdown />
          </div>

          <div className="mt-8 rounded-2xl bg-white p-5 xs:p-8 shadow-2xl shadow-primary-500/20">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-4xl xs:text-5xl sm:text-6xl font-bold text-dark-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-dark-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {product.originalPrice && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-sm font-bold text-accent-700">
                <Icon name="Zap" size={14} />
                {t.productCTA.savings} {formatPrice(product.originalPrice - product.price)} —{" "}
                {t.productCTA.limitedOffer}
              </p>
            )}

            <button className="btn-cta mt-6 w-full px-6 sm:px-12 py-4 sm:py-5 text-base sm:text-lg">
              <Icon name="ShoppingBag" size={24} />
              {t.productCTA.buyNow}
            </button>

            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-dark-400">
              <span className="flex items-center gap-1">
                <Icon name="Lock" size={14} /> {t.productCTA.securePayment}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Zap" size={14} /> {t.productCTA.delivery}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="RefreshCw" size={14} /> {t.productCTA.lifetimeAccess}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Award" size={14} /> {t.productCTA.guarantee}
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              { icon: "CreditCard", label: t.productCTA.creditCard },
              { icon: "Banknote", label: t.productCTA.bankSlip },
              { icon: "QrCode", label: t.productCTA.pix },
              { icon: "ShieldCheck", label: t.productCTA.protectedPurchase },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent-400">
                  <Icon name={item.icon} size={20} />
                </div>
                <p className="text-xs font-medium text-dark-200">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-accent-400/30 bg-accent-500/10 px-6 py-5 text-left backdrop-blur">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/40">
              <Icon name="ShieldCheck" size={24} />
            </span>
            <div>
              <p className="font-bold text-white">{t.productCTA.guarantee}</p>
              <p className="mt-0.5 text-sm text-dark-300">{t.productCTA.guaranteeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}