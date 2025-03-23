import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CropCare from "@/components/crop-care"
import AgriFinance from "@/components/agri-finance"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CropCare />
      <AgriFinance />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}

