"use client"

import Link from "next/link"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl" />

      <div className="container-wide relative pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-300 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              {t.hero.title1}{" "}
              <span className="gradient-text">{t.hero.titleHighlight1}</span>{" "}
              {t.hero.title2}{" "}
              <span className="gradient-text">{t.hero.titleHighlight2}</span>
            </h1>

            <p className="text-base xs:text-lg sm:text-xl text-dark-400 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#produtos"
                className="btn-cta text-base"
              >
                {t.hero.cta}
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link
                href="/#categorias"
                className="btn-white text-dark-900"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 xs:gap-6 pt-2">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-dark-900"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm">
                  <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                  <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                  <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                  <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                  <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm text-dark-400">
                  <span className="font-semibold text-white">4.9</span> {t.hero.rating} •{" "}
                  <span className="font-semibold text-white">12.500+</span> {t.hero.customers}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-primary-600/20 via-secondary-600/20 to-primary-800/20 border border-white/10 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center animate-float">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center mb-6 shadow-2xl shadow-primary-600/30">
                  <Icon name="ShoppingBag" size={40} className="text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{t.productHeader.buyNow}</h3>
                <p className="text-dark-400 text-sm">{t.productHeader.delivery} • {t.productHeader.lifetimeAccess} • {t.productHeader.guarantee}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-dark-500">
                  <span className="flex items-center gap-1">
                    <Icon name="Zap" size={14} className="text-accent-400" /> {t.productHeader.delivery.split(" ")[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="ShieldCheck" size={14} className="text-accent-400" /> {t.productHeader.securePayment.split(" ")[0]}
                  </span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/30 animate-float" style={{ animationDelay: "1s" }}>
                <Icon name="Zap" size={28} className="text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-center">
                  <p className="text-white text-lg font-bold">12k+</p>
                  <p className="text-dark-400 text-[10px]">{t.hero.stats}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/5">
          <p className="text-center text-sm text-dark-500 font-medium mb-6">
            {t.hero.trustText}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 xs:gap-x-10 gap-y-3 xs:gap-y-4 opacity-50">
            {["Mercado Digital", "TechHub", "Inovação & Cia", "DigitalPro", "SmartBiz", "NextWave"].map((name) => (
              <span key={name} className="text-dark-400 text-lg font-bold tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
