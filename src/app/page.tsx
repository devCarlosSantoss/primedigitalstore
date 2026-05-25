import { Hero } from "@/components/sections/Hero"
import { Categories } from "@/components/sections/Categories"
import { FeaturedProducts } from "@/components/sections/FeaturedProducts"
import { BestSellers } from "@/components/sections/BestSellers"
import { Benefits } from "@/components/sections/Benefits"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { Newsletter } from "@/components/sections/Newsletter"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BestSellers />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  )
}
