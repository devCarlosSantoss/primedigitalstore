import { notFound } from "next/navigation"
import { products } from "@/data/products"
import { ProductHeader } from "@/components/product/ProductHeader"
import { ProductContent } from "@/components/product/ProductContent"
import { ProductBonus } from "@/components/product/ProductBonus"
import { ProductCTA } from "@/components/product/ProductCTA"
import { ProductFAQs } from "@/components/product/ProductFAQs"
import { ProductRelated } from "@/components/product/ProductRelated"
import { Metadata } from "next"

interface ProductPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}

  return {
    title: `${product.name} - PrimeDigitalStore`,
    description: product.description,
    openGraph: {
      title: `${product.name} - PrimeDigitalStore`,
      description: product.description,
      images: [{ url: product.image }],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <ProductHeader product={product} />
      <ProductContent product={product} />
      <ProductBonus product={product} />
      <ProductCTA product={product} />
      <ProductFAQs product={product} />
      <ProductRelated product={product} />
    </>
  )
}
