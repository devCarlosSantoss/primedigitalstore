"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/i18n/LanguageProvider"

const RESET_SECONDS = 23 * 3600 + 59 * 60 + 59

export function Countdown() {
  const { t } = useLanguage()
  const [secondsLeft, setSecondsLeft] = useState(RESET_SECONDS)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : RESET_SECONDS))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const days = Math.floor(secondsLeft / 86400)
  const hours = Math.floor((secondsLeft % 86400) / 3600)
  const minutes = Math.floor((secondsLeft % 3600) / 60)
  const seconds = secondsLeft % 60

  const units = [
    { value: days, label: t.countdown.days },
    { value: hours, label: t.countdown.hours },
    { value: minutes, label: t.countdown.minutes },
    { value: seconds, label: t.countdown.seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {units.map((unit, i) => (
        <div key={i} className="flex items-center gap-2 sm:gap-3">
          <div className="flex min-w-[64px] flex-col items-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
            <span className="text-2xl font-bold text-white tabular-nums sm:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-widest text-white/60">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-2xl font-bold text-white/40">:</span>
          )}
        </div>
      ))}
    </div>
  )
}