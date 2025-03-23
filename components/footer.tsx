import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12v.01" />
                  <path d="M11 17v.01" />
                  <path d="M7 14v.01" />
                </svg>
              </div>
              <span className="font-bold text-xl">AgriGuard</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering farmers with innovative technology and sustainable practices to increase productivity and
              promote environmental stewardship.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/crop-management" className="text-gray-400 hover:text-primary transition-colors">
                  Crop Management
                </Link>
              </li>
              <li>
                <Link href="/services/irrigation" className="text-gray-400 hover:text-primary transition-colors">
                  Irrigation Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sustainable-farming"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Sustainable Farming
                </Link>
              </li>
              <li>
                <Link
                  href="/services/yield-optimization"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Yield Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/pest-management" className="text-gray-400 hover:text-primary transition-colors">
                  Pest Management
                </Link>
              </li>
              <li>
                <Link href="/services/market-analysis" className="text-gray-400 hover:text-primary transition-colors">
                  Market Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div>
  <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
  <ul className="space-y-4">
    <li className="flex items-start">
      <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
      <span className="text-gray-400">56 Agri Lane, Sector 17, Chandigarh, India</span>
    </li>
    <li className="flex items-center">
      <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
      <span className="text-gray-400">+91 98xxxxxxx0</span>
    </li>
    <li className="flex items-center">
      <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
      <span className="text-gray-400">xyz@gmail.com</span>
    </li>
  </ul>
</div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AgriGuard. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

