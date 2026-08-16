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
    <section id="beneficios" className="py-12 xs:py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <span className="badge-primary mb-3">{t.productContent.badge}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
                {t.productContent.title}
              </h2>
            </div>

            <div className="relative">
              <Icon
                name="Quote"
                size={80}
                className="absolute -top-6 -left-6 text-primary-100"
              />
              <div className="relative space-y-5">
                {product.fullDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-dark-500">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-dark-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <Icon name="BadgeCheck" size={18} />
                </span>
                {t.productContent.benefitsTitle}
              </h3>
              <div className="grid gap-3">
                {product.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 rounded-xl border border-primary-100 bg-primary-50 p-4 transition-all hover:border-primary-300 hover:shadow-md"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white transition-transform group-hover:scale-110">
                      <Icon name="Check" size={14} />
                    </span>
                    <p className="text-sm font-medium text-dark-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-dark-100 bg-gradient-to-b from-white to-dark-50 shadow-sm">
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-800 px-5 py-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                  <Icon name="Package" size={18} />
                </span>
                <h3 className="text-lg font-bold text-white">
                  {t.productContent.whatYouGet}
                </h3>
              </div>
              <ul className="grid gap-2.5 p-5 xs:p-6">
                {product.whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                      <Icon name="Check" size={14} />
                    </span>
                    <span className="text-dark-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.testimonials.length > 0 && (
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-dark-900">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-600 text-white">
                    <Icon name="Quote" size={18} />
                  </span>
                  {t.productContent.testimonialTitle}
                </h3>
                <div className="grid gap-4">
                  {product.testimonials.map((t_item, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl border border-dark-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <Icon
                        name="Quote"
                        size={28}
                        className="absolute top-4 right-4 text-secondary-200"
                      />
                      <div className="mb-3 flex items-center gap-1">
                        {Array.from({ length: t_item.rating }).map((_, j) => (
                          <Icon
                            key={j}
                            name="Star"
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="mb-4 pr-8 text-sm leading-relaxed text-dark-500">
                        &ldquo;{t_item.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={t_item.avatar}
                          alt={t_item.name}
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-secondary-100"
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
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}