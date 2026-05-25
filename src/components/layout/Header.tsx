"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Icon } from "../ui/Icon"
import { categories } from "@/data/products"
import { useLanguage } from "@/i18n/LanguageProvider"
import { localeText } from "@/data/products"
import { X } from "lucide-react"

export function Header() {
  const { t, locale, setLocale } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLocale = () => {
    setLocale(locale === "pt" ? "en" : "pt")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-dark-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logo.png"
              alt="PrimeDigitalStore"
              className={`h-7 sm:h-8 w-auto object-contain transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  : "text-dark-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.header.nav.home}
            </Link>
            <div className="relative group">
              <button className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                scrolled
                  ? "text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  : "text-dark-300 hover:text-white hover:bg-white/10"
              }`}>
                {t.header.nav.categories}
                <Icon name="ChevronDown" size={14} />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-dark-100 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categorias/${cat.slug}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                        <Icon name={cat.icon} size={16} />
                      </span>
                      <div>
                        <p className="font-medium text-dark-800">{localeText(cat.name, locale)}</p>
                        <p className="text-xs text-dark-400">
                          {t.header.categoryCount.replace("{count}", String(cat.productCount))}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/#mais-vendidos"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  : "text-dark-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.header.nav.bestSellers}
            </Link>
            <Link
              href="/#faq"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  : "text-dark-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.header.nav.faq}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                scrolled
                  ? "border border-dark-200 text-dark-600 hover:bg-dark-50"
                  : "border border-white/20 text-dark-300 hover:bg-white/10"
              }`}
              title={locale === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              {locale === "pt" ? "EN" : "PT"}
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                scrolled
                  ? "border border-dark-200 text-dark-600 hover:bg-dark-50"
                  : "border border-white/20 text-dark-300 hover:bg-white/10"
              }`}
              aria-label={t.header.nav.menu}
            >
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-xl animate-slide-down">
            <div className="flex items-center justify-between p-4 border-b border-dark-100">
              <span className="font-bold text-dark-900">{t.header.nav.menu}</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-dark-50 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-64px)]">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <Icon name="ShoppingBag" size={18} />
                {t.header.nav.home}
              </Link>
              <div className="pt-2 pb-1">
                <p className="px-4 text-xs font-semibold uppercase tracking-wider text-dark-400">
                  {t.header.nav.categories}
                </p>
              </div>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categorias/${cat.slug}`}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-dark-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name={cat.icon} size={16} />
                  {localeText(cat.name, locale)}
                </Link>
              ))}
              <div className="pt-4 border-t border-dark-100">
                <button
                  onClick={() => { setLocale(locale === "pt" ? "en" : "pt"); setMobileOpen(false) }}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  <Icon name="Globe" size={18} />
                  {locale === "pt" ? "English" : "Português"}
                </button>
                <Link
                  href="/#mais-vendidos"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name="TrendingUp" size={18} />
                  {t.header.nav.bestSellers}
                </Link>
                <Link
                  href="/#faq"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name="FileText" size={18} />
                  {t.header.nav.faq}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
