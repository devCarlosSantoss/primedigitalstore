"use client"

import { useState } from "react"
import type { FAQItem } from "@/types"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"
import { localeText } from "@/data/products"

export function ProductFAQ({ faqs }: { faqs: FAQItem[] }) {
  const { locale } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
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
  )
}
