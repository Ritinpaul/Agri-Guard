import type { Metadata } from "next";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ImageAnalyzer from "@/components/image-analyzer";

export const metadata: Metadata = {
  title: "CropCare - AI-based Crop Disease Detection",
  description: "Detect crop diseases using our advanced AI technology",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f7f2] to-[#f0f5e9]">
      <Hero />
      <Features />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#2e5d32]">
          Analyze Your Crop
        </h2>
        <ImageAnalyzer />
      </div>
    </main>
  );
}
