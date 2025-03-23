import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Wheat Farmer, Gujarat",
    content:
      "The crop management program has completely transformed our farm's productivity. We've seen a 30% increase in yield while using fewer resources. The team's expertise and support have been invaluable.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Priya Sharma",
    role: "Rice Farmer, Punjab",
    content:
      "Their irrigation solutions helped us reduce water usage by 40% while maintaining optimal crop quality. The system is easy to use and the customer support is exceptional. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Vikram Singh",
    role: "Organic Vegetable Farmer, Maharashtra",
    content:
      "As an organic farmer, finding sustainable solutions is crucial. Their pest management strategies have helped us maintain our organic certification while effectively protecting our crops.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Hear from farmers who have transformed their operations with our solutions</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-white"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer">
            View more success stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

