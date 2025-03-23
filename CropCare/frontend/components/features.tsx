import { Upload, Search, AlertCircle, Sprout, Smartphone, Shield } from "lucide-react"

const features = [
  {
    icon: <Upload className="h-10 w-10 text-[#4caf50]" />,
    title: "Easy Upload",
    description: "Simply upload an image of your plant for instant analysis",
  },
  {
    icon: <Search className="h-10 w-10 text-[#4caf50]" />,
    title: "AI Detection",
    description: "Our advanced AI model identifies diseases with high accuracy",
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-[#4caf50]" />,
    title: "Early Warning",
    description: "Detect problems before they spread to your entire crop",
  },
  {
    icon: <Sprout className="h-10 w-10 text-[#4caf50]" />,
    title: "Treatment Advice",
    description: "Get actionable recommendations to treat identified issues",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-[#4caf50]" />,
    title: "Mobile Friendly",
    description: "Use CropCare right in the field from any mobile device",
  },
  {
    icon: <Shield className="h-10 w-10 text-[#4caf50]" />,
    title: "Protect Yield",
    description: "Increase harvest yields by preventing crop loss",
  },
]

export default function Features() {
  return (
    <div className="bg-[#f8f7f2] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2e5d32]">How CropCare Helps Your Farm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#e0e7d0]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2e5d32]">{feature.title}</h3>
              <p className="text-[#4b7b52]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

