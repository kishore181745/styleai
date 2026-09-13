"use client";

import { useState } from "react";
import { Camera, Upload, ArrowLeft, X, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AnalyzePage() {
  const occasions = [
    "Casual",
    "Formal",
    "Party",
    "Sports",
    "Traditional",
    "Business",
    "Date Night",
  ];

  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleAnalyze = () => {
    if (!selectedOccasion) {
      alert("Please select an occasion first");
      return;
    }

    setLoading(true);

    // Simulate AI analysis delay
    setTimeout(() => {
      router.push(`/results?occasion=${selectedOccasion}`);
    }, 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "hsl(40, 33%, 98%)" }}>
        <Loader2 size={48} className="animate-spin mb-6" style={{ color: "hsl(25, 95%, 53%)" }} />
        <h2 className="text-2xl font-bold mb-2" style={{ color: "hsl(30, 10%, 15%)" }}>Analyzing your outfit...</h2>
        <p style={{ color: "hsl(30, 10%, 45%)" }}>Detecting clothes, colors and style</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40, 33%, 98%)" }}>
      
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: "hsl(35, 20%, 90%)" }}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: "hsl(25, 95%, 53%)" }}>
            S
          </div>
          <span className="font-bold text-lg" style={{ color: "hsl(30, 10%, 15%)" }}>StyleAi</span>
        </Link>

        <Link href="/" className="flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(30, 10%, 40%)" }}>
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "hsl(30, 10%, 15%)" }}>
            Analyze Your Outfit
          </h1>
          <p style={{ color: "hsl(30, 10%, 45%)" }}>
            Select the occasion and upload your photo to get AI recommendations
          </p>
        </div>

        {/* Occasion Selection */}
        <div className="bg-white rounded-3xl p-8 mb-8" style={{ border: "1px solid hsl(35, 20%, 90%)" }}>
          <h2 className="text-xl font-semibold mb-6" style={{ color: "hsl(30, 10%, 15%)" }}>
            1. What are you dressing for?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {occasions.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedOccasion(item)}
                className="py-3 px-4 rounded-xl text-sm font-medium border transition cursor-pointer"
                style={{
                  borderColor: selectedOccasion === item ? "hsl(25, 95%, 53%)" : "hsl(35, 20%, 90%)",
                  backgroundColor: selectedOccasion === item ? "hsl(25, 95%, 95%)" : "white",
                  color: selectedOccasion === item ? "hsl(25, 95%, 45%)" : "hsl(30, 10%, 25%)",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {selectedOccasion && (
            <p className="mt-5 text-sm" style={{ color: "hsl(25, 95%, 45%)" }}>
              Selected: <strong>{selectedOccasion}</strong>
            </p>
          )}
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-3xl p-8" style={{ border: "1px solid hsl(35, 20%, 90%)" }}>
          <h2 className="text-xl font-semibold mb-6" style={{ color: "hsl(30, 10%, 15%)" }}>
            2. Add your outfit photo
          </h2>

          {preview ? (
            <div className="relative w-full max-w-sm mx-auto mb-6">
              <img src={preview} alt="Preview" className="w-full rounded-2xl object-cover" />
              <button 
                onClick={() => setPreview(null)}
                className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-400 transition"
                style={{ borderColor: "hsl(35, 20%, 85%)" }}>
                <Upload size={32} style={{ color: "hsl(25, 95%, 53%)" }} />
                <p className="mt-4 font-medium">Upload Image</p>
                <p className="text-sm mt-1" style={{ color: "hsl(30, 10%, 50%)" }}>Click to browse files</p>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>

              <label className="border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-400 transition"
                style={{ borderColor: "hsl(35, 20%, 85%)" }}>
                <Camera size={32} style={{ color: "hsl(25, 95%, 53%)" }} />
                <p className="mt-4 font-medium">Use Camera</p>
                <p className="text-sm mt-1" style={{ color: "hsl(30, 10%, 50%)" }}>Take a photo now</p>
                <input type="file" accept="image/*" capture="environment" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
          )}

          <div className="mt-8 text-center">
            <button 
              onClick={handleAnalyze}
              className="px-8 py-3 rounded-full text-white font-medium cursor-pointer"
              style={{ backgroundColor: "hsl(25, 95%, 53%)" }}
            >
              Analyze My Outfit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}