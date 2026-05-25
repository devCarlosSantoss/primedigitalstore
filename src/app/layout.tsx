import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { LanguageProvider } from "@/i18n/LanguageProvider"

export const metadata: Metadata = {
  title: "PrimeDigitalStore - Produtos Digitais Premium",
  description:
    "Descubra e-books, cursos, templates e ferramentas digitais premium para transformar seus resultados. Entrega imediata, acesso vitalício e suporte premium.",
  keywords: [
    "produtos digitais",
    "e-books",
    "cursos online",
    "templates",
    "planilhas",
    "marketing digital",
    "desenvolvimento",
  ],
  openGraph: {
    title: "PrimeDigitalStore - Produtos Digitais Premium",
    description:
      "Sua loja completa de produtos digitais premium. Conhecimento, ferramentas e recursos para transformar seus resultados.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
