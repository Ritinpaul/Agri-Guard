import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Agricultural Operations?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Join thousands of farmers who have increased productivity, reduced costs, and embraced sustainable practices
            with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white text-primary hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              className="border-white text-primary hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium"
            >
              Try AgriFinance
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

