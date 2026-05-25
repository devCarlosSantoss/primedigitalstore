"use client"

import { Icon } from "../ui/Icon"
import { useLanguage } from "@/i18n/LanguageProvider"

const testimonials = [
  {
    name: "Rafaela Costa",
    role: "Empreendedora Digital",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    content: {
      pt: "A PrimeDigitalStore superou minhas expectativas. Produtos de altíssima qualidade e entrega super rápida. Já sou cliente fiel!",
      en: "PrimeDigitalStore exceeded my expectations. High quality products and super fast delivery. I'm already a loyal customer!",
    },
    rating: 5,
  },
  {
    name: "Gabriel Torres",
    role: "Desenvolvedor Full Stack",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    content: {
      pt: "Comprei o curso de Fullstack e fiquei impressionado com a qualidade do conteúdo. Em 3 meses já estava trabalhando na área.",
      en: "I bought the Fullstack course and was impressed with the content quality. Within 3 months I was already working in the field.",
    },
    rating: 5,
  },
  {
    name: "Juliana Martins",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    content: {
      pt: "Os templates do Notion mudaram minha organização. Economizo horas por semana desde que comecei a usar.",
      en: "The Notion templates changed my organization. I save hours every week since I started using them.",
    },
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "CEO na TechSolve",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    content: {
      pt: "Plataforma confiável e com produtos de ponta. Invisto em conhecimento aqui mensalmente e sempre saio satisfeito.",
      en: "Reliable platform with top-notch products. I invest in knowledge here monthly and always leave satisfied.",
    },
    rating: 5,
  },
]

export function Testimonials() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-12 xs:py-16 sm:py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container-wide relative">
        <div className="text-center mb-12">
          <span className="badge-secondary mb-4">{t.testimonials.badge}</span>
          <h2 className="section-title text-white">
            {t.testimonials.title}{" "}
            <span className="gradient-text">{t.testimonials.titleHighlight}</span>{" "}
            {locale === "pt" ? "dizem" : "say"}
          </h2>
          <p className="section-subtitle text-dark-400">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {testimonials.map((t_item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 xs:p-6 backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t_item.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-dark-300 text-sm leading-relaxed mb-6">
                &ldquo;{t_item.content[locale]}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t_item.avatar}
                  alt={t_item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t_item.name}</p>
                  <p className="text-xs text-dark-500">{t_item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
