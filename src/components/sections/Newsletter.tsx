"use client"

import { useState } from "react"
import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"

export function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-12 xs:py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-secondary-600/10 rounded-full blur-3xl"
      />

      <div className="container-wide relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <Icon name="Mail" size={32} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.newsletter.title}{" "}
            <span className="text-primary-300">{t.newsletter.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-primary-200/80 max-w-lg mx-auto">
            {t.newsletter.subtitle}
          </p>

          {subscribed ? (
            <div className="mt-8 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 animate-fade-in">
              <Icon name="Check" size={24} className="mx-auto text-accent-400 mb-2" />
              <p className="text-white font-semibold">{t.newsletter.subscribedTitle}</p>
              <p className="text-primary-200/80 text-sm mt-1">{t.newsletter.subscribedText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col xs:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Icon name="Mail" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm pl-11 pr-4 py-3.5 text-sm text-white placeholder-primary-300/60 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 transition-all"
                />
              </div>
              <button
                type="submit"
                className="btn-white text-dark-900 font-bold whitespace-nowrap"
              >
                {t.newsletter.button}
                <Icon name="Send" size={16} />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-primary-300/60">
            {t.newsletter.privacy}
          </p>
        </div>
      </div>
    </section>
  )
}
