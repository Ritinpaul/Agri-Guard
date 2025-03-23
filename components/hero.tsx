import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-white">
      <div className="hero-pattern absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="gradient-text">AgriGuard</span>
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight mb-6">
              Modern Agricultural Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering farmers with innovative technology and sustainable practices to increase productivity and
              promote environmental stewardship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="handshake_light_green_beige.png"
                alt="Modern farming landscape"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

