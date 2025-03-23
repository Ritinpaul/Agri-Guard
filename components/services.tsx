import { Leaf, Droplet, Sun, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Crop Management",
    description: "Optimize your crop production with our advanced management techniques and expert guidance.",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Irrigation Solutions",
    description: "Efficient water management systems designed to conserve resources while maximizing crop yield.",
    icon: Droplet,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Sustainable Farming",
    description: "Environmentally friendly practices that promote long-term ecosystem health and productivity.",
    icon: Sun,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Yield Optimization",
    description: "Data-driven approaches to increase your farm's productivity and overall yield performance.",
    icon: TrendingUp,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Pest Management",
    description: "Integrated pest management strategies that protect crops while minimizing environmental impact.",
    icon: ShieldCheck,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Market Analysis",
    description:
      "Stay ahead with our comprehensive market insights and price trend analysis for agricultural products.",
    icon: BarChart3,
    color: "bg-orange-100 text-orange-600",
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive agricultural solutions designed to meet the needs of modern farmers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="feature-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="text-primary p-0 h-auto font-medium">
                Learn more →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

