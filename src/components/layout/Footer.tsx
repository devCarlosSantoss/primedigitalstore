"use client"

import Link from "next/link"
import { Icon } from "../ui/Icon"
import { categories } from "@/data/products"
import { useLanguage } from "@/i18n/LanguageProvider"
import { localeText } from "@/data/products"

export function Footer() {
  const { t, locale } = useLanguage()

  return (
    <footer className="bg-dark-950 text-dark-300">
      <div className="container-wide">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 py-12 xs:py-16 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center group mb-4 p-2 rounded-lg bg-white/10 backdrop-blur-sm">
              <img
                src="/images/logo.png"
                alt="PrimeDigitalStore"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-dark-400 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { name: "Instagram", icon: "Instagram", href: "#" },
                { name: "Youtube", icon: "Youtube", href: "#" },
                { name: "Linkedin", icon: "Linkedin", href: "#" },
                { name: "Twitter", icon: "Twitter", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark-800 text-dark-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.categories}
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/categorias/${cat.slug}`}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <Icon name={cat.icon} size={14} />
                    {localeText(cat.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.helpSection}
            </h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.helpLinks.helpCenter, href: "#" },
                { label: t.footer.helpLinks.faq, href: "/#faq" },
                { label: t.footer.helpLinks.privacy, href: "#" },
                { label: t.footer.helpLinks.terms, href: "#" },
                { label: t.footer.helpLinks.refund, href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-dark-400">
                <Icon name="Mail" size={18} className="mt-0.5 text-primary-500 shrink-0" />
                <span>suporte@primedigitalstore.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-dark-400">
                <Icon name="MapPin" size={18} className="mt-0.5 text-primary-500 shrink-0" />
                <span>Av. Digital, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-dark-400">
                <Icon name="Clock" size={18} className="mt-0.5 text-primary-500 shrink-0" />
                <span>Seg a Sex, 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            &copy; {new Date().getFullYear()} PrimeDigitalStore. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm text-dark-500">
              <Icon name="Lock" size={14} />
              {t.footer.securePayment}
            </span>
            <span className="flex items-center gap-2 text-sm text-dark-500">
              <Icon name="ShieldCheck" size={14} />
              {t.footer.protectedData}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
