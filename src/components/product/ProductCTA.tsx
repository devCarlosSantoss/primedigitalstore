"use client"

import { Product } from "@/types"
import { Icon } from "../ui/Icon"
import { formatPrice } from "@/lib/utils"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductCTAProps {
  product: Product
}

export function ProductCTA({ product }: ProductCTAProps) {
  const { t } = useLanguage()

  return (
    <section id="comprar" className="py-12 xs:py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-50/50 to-transparent" />
      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-dark-100 bg-white shadow-xl shadow-primary-500/5 p-5 xs:p-8 sm:p-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100">
              <Icon name="ShoppingBag" size={32} className="text-primary-600" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
              {t.productCTA.title}
            </h2>
            <p className="mt-3 text-dark-500 max-w-lg mx-auto">
              {t.productCTA.subtitle}
            </p>

            <div className="mt-8 flex items-baseline justify-center gap-3">
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
              <p className="mt-2 text-sm text-accent-600 font-semibold">
                {t.productCTA.savings} {formatPrice(product.originalPrice - product.price)} — {t.productCTA.limitedOffer}
              </p>
            )}

            <button className="btn-cta mt-6 sm:mt-8 w-full sm:w-auto text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-5">
              <Icon name="ShoppingBag" size={24} />
              {t.productCTA.buyNow}
            </button>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-dark-400">
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

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: "CreditCard", label: t.productCTA.creditCard },
              { icon: "Banknote", label: t.productCTA.bankSlip },
              { icon: "QrCode", label: t.productCTA.pix },
              { icon: "ShieldCheck", label: t.productCTA.protectedPurchase },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-dark-100 p-4"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-dark-50 text-dark-600">
                  <Icon name="Check" size={20} />
                </div>
                <p className="text-xs font-medium text-dark-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
