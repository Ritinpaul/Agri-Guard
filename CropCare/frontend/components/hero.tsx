"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToAnalyzer = () => {
    const analyzerSection = document.querySelector("#image-analyzer");
    if (analyzerSection) {
      analyzerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#e8f5e9] py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2e5d32] mb-4">
              Protect Your Crops with AI Technology
            </h1>
            <p className="text-lg text-[#4b7b52] mb-8">
              CropCare uses advanced AI to detect plant diseases early, helping
              you save your harvest and increase yield.
            </p>
            <Button
              onClick={scrollToAnalyzer}
              className="bg-[#4caf50] hover:bg-[#388e3c] text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2"
            >
              Try It Now
              <ArrowDown size={18} />
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80 md:h-96">
              <Image
                src="/hero.jpg"
                alt="Healthy crops being analyzed"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f8f7f2] to-transparent"></div>
    </div>
  );
}
