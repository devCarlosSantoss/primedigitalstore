"use client"

import { useState } from "react"
import { siteFAQs } from "@/data/products"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"
import { localeText } from "@/data/products"

export function FAQ() {
  const { t, locale } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 xs:py-16 sm:py-24 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge-primary mb-4">{t.faq.badge}</span>
            <h2 className="section-title text-dark-900">
              {t.faq.title}{" "}
              <span className="gradient-text">{t.faq.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-dark-500 leading-relaxed max-w-md">
              {t.faq.subtitle}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-primary-50 border border-primary-100">
              <p className="text-sm text-primary-800">
                <strong>{t.faq.helpTitle}</strong> {t.faq.helpText}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {siteFAQs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === i
                    ? "border-primary-200 bg-primary-50/50 shadow-sm"
                    : "border-dark-100 bg-white hover:border-dark-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-dark-900 pr-4">
                    {localeText(faq.question, locale)}
                  </span>
                  <Icon
                    name={openIndex === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className={`shrink-0 transition-colors ${
                      openIndex === i ? "text-primary-600" : "text-dark-400"
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4 animate-slide-down">
                    <p className="text-sm text-dark-500 leading-relaxed">
                      {localeText(faq.answer, locale)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
