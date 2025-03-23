"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#e0e7d0] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#2e5d32]">
                Crop<span className="text-[#4caf50]">Care</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#4b7b52] hover:text-[#2e5d32] font-medium"
            >
              Home
            </Link>
            <Link
              href="#image-analyzer"
              className="text-[#4b7b52] hover:text-[#2e5d32] font-medium"
            >
              Analyze
            </Link>
            <Link
              href="#"
              className="text-[#4b7b52] hover:text-[#2e5d32] font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-[#4b7b52] hover:text-[#2e5d32] font-medium"
            >
              Contact
            </Link>
            <Button className="bg-[#4caf50] hover:bg-[#388e3c] text-white">
              Sign Up
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#4b7b52]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e0e7d0]">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-[#4b7b52] hover:text-[#2e5d32] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#image-analyzer"
              className="block py-2 text-[#4b7b52] hover:text-[#2e5d32] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Analyze
            </Link>
            <Link
              href="#"
              className="block py-2 text-[#4b7b52] hover:text-[#2e5d32] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="block py-2 text-[#4b7b52] hover:text-[#2e5d32] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
