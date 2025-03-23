import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2e5d32] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Crop<span className="text-[#8bc34a]">Care</span>
            </h3>
            <p className="text-[#c8e6c9] mb-4">Protecting your crops with advanced AI technology.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-[#8bc34a]">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-[#8bc34a]">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-[#8bc34a]">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-[#8bc34a]">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#c8e6c9] hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#image-analyzer" className="text-[#c8e6c9] hover:text-white">
                  Analyze Crop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#c8e6c9] hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#c8e6c9] hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#c8e6c9] hover:text-white">
                  Disease Database
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#c8e6c9] hover:text-white">
                  Treatment Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#c8e6c9] hover:text-white">
                  Farming Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#c8e6c9] hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-[#c8e6c9]">
              <p>123 Farm Road</p>
              <p>Agritown, AG 12345</p>
              <p className="mt-2">info@cropcare.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#4b7b52] mt-8 pt-8 text-center text-[#c8e6c9]">
          <p>&copy; {new Date().getFullYear()} CropCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

