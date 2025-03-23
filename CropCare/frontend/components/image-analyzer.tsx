"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X, Loader2, Check, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TreatmentSuggestions from "./treatment-suggestions";

type AnalysisResult = {
  isInfected: boolean;
  disease?: string;
  confidence?: number;
  treatments?: string[];
};

export default function ImageAnalyzer() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ensure this runs only in the browser
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    // Any client-side initialization can go here
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }

      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setAnalysisResult(null);
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }

      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setAnalysisResult(null);
      setError(null);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setAnalysisResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("http://localhost:3000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await response.json();

      const result: AnalysisResult = {
        isInfected: data.class !== "Healthy",
        disease: data.class,
        confidence: data.confidence,
        treatments: data.treatments || [],
      };

      setAnalysisResult(result);
    } catch (err) {
      setError("Error analyzing image. Please try again.");
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div id="image-analyzer" className="max-w-3xl mx-auto">
      <Card className="bg-white border border-[#e0e7d0] shadow-md">
        <CardContent className="p-6">
          {!imagePreview ? (
            <div
              className="border-2 border-dashed border-[#4caf50] rounded-lg p-12 text-center cursor-pointer hover:bg-[#f1f8e9] transition-colors duration-200"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-[#4caf50]" />
              <h3 className="text-xl font-semibold mb-2 text-[#2e5d32]">
                Upload Plant Image
              </h3>
              <p className="text-[#4b7b52] mb-4">
                Drag and drop an image here, or click to select
              </p>
              <Button className="bg-[#4caf50] hover:bg-[#388e3c] text-white">
                Select Image
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={imagePreview || "/placeholder.svg"}
                    alt="Selected plant"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full"
                  onClick={clearImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              )}

              {!isAnalyzing && !analysisResult && !error && (
                <Button
                  className="w-full bg-[#4caf50] hover:bg-[#388e3c] text-white"
                  onClick={analyzeImage}
                >
                  Analyze Image
                </Button>
              )}

              {isAnalyzing && (
                <div className="text-center py-4">
                  <Loader2 className="h-8 w-8 mx-auto mb-2 text-[#4caf50] animate-spin" />
                  <p className="text-[#4b7b52]">
                    Analyzing your plant image...
                  </p>
                </div>
              )}

              {analysisResult && (
                <div className="space-y-6">
                  <div
                    className={cn(
                      "p-4 rounded-lg flex items-start gap-3",
                      analysisResult.isInfected
                        ? "bg-red-50 text-red-700"
                        : "bg-green-50 text-green-700"
                    )}
                  >
                    {analysisResult.isInfected ? (
                      <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Check className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {analysisResult.isInfected
                          ? `Infected: ${analysisResult.disease}`
                          : "Healthy Plant Detected"}
                      </h3>
                      <p>
                        {analysisResult.isInfected
                          ? `Our AI detected ${
                              analysisResult.disease
                            } with ${Math.round(
                              analysisResult.confidence! * 100
                            )}% confidence.`
                          : "No signs of disease detected. Your plant appears healthy."}
                      </p>
                    </div>
                  </div>

                  {analysisResult.isInfected && analysisResult.treatments && (
                    <TreatmentSuggestions
                      disease={analysisResult.disease!}
                      treatments={analysisResult.treatments}
                    />
                  )}

                  <Button
                    className="w-full bg-[#4caf50] hover:bg-[#388e3c] text-white"
                    onClick={clearImage}
                  >
                    Analyze Another Image
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
