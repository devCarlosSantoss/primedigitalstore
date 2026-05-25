"use client"

import { Product } from "@/types"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"

interface ProductContentProps {
  product: Product
}

export function ProductContent({ product }: ProductContentProps) {
  const { t } = useLanguage()

  return (
    <section id="beneficios" className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <span className="badge-primary mb-3">{t.productContent.badge}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
                {t.productContent.title}
              </h2>
            </div>

            <div className="prose prose-dark max-w-none">
              {product.fullDescription.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-dark-500 leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-dark-900 text-lg">
                {t.productContent.benefitsTitle}
              </h3>
              <div className="grid gap-3">
                {product.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white shrink-0 mt-0.5">
                      <Icon name="Check" size={14} />
                    </span>
                    <p className="text-sm text-dark-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-dark-100 bg-white shadow-sm p-5 xs:p-6 sm:p-8">
              <h3 className="font-bold text-dark-900 text-lg mb-6 flex items-center gap-2">
                <Icon name="Download" size={20} className="text-primary-600" />
                {t.productContent.whatYouGet}
              </h3>
              <ul className="space-y-3">
                {product.whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-100 text-accent-700 shrink-0 mt-0.5">
                      <Icon name="Check" size={14} />
                    </span>
                    <span className="text-dark-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.testimonials.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-bold text-dark-900 text-lg flex items-center gap-2">
                  <Icon name="Quote" size={20} className="text-primary-600" />
                  {t.productContent.testimonialTitle}
                </h3>
                {product.testimonials.map((t_item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-dark-100 bg-white p-5"
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t_item.rating }).map((_, j) => (
                        <Icon
                          key={j}
                          name="Star"
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-dark-500 leading-relaxed mb-4">
                      &ldquo;{t_item.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={t_item.avatar}
                        alt={t_item.name}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-dark-900">
                          {t_item.name}
                        </p>
                        <p className="text-xs text-dark-400">{t_item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
