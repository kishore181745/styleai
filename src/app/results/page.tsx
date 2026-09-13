"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const occasion = searchParams.get("occasion") || "Casual";

  // Different scores based on occasion (demo purpose)
  const getScores = () => {
    const base = {
      Casual: { total: 84, color: 88, style: 82, combo: 80, occasion: 91 },
      Formal: { total: 79, color: 81, style: 85, combo: 76, occasion: 88 },
      Party: { total: 87, color: 90, style: 86, combo: 84, occasion: 89 },
      Sports: { total: 81, color: 78, style: 83, combo: 79, occasion: 92 },
      Traditional: { total: 86, color: 89, style: 88, combo: 83, occasion: 90 },
      Business: { total: 80, color: 82, style: 84, combo: 77, occasion: 87 },
      "Date Night": { total: 88, color: 91, style: 87, combo: 85, occasion: 90 },
    };
    return base[occasion as keyof typeof base] || base.Casual;
  };

  const scores = getScores();

  const recommendations = [
    { score: 94, title: "Best Match", items: "Light Blue Shirt + Beige Chinos + White Sneakers" },
    { score: 89, title: "Alternative 1", items: "White Shirt + Grey Trousers + Brown Loafers" },
    { score: 86, title: "Alternative 2", items: "Navy Polo + Khaki Pants + White Sneakers" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40, 33%, 98%)" }}>
      
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: "hsl(35, 20%, 90%)" }}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: "hsl(25, 95%, 53%)" }}>
            S
          </div>
          <span className="font-bold text-lg" style={{ color: "hsl(30, 10%, 15%)" }}>StyleAi</span>
        </Link>
        <Link href="/analyze" className="flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(30, 10%, 40%)" }}>
          <ArrowLeft size={18} />
          Back
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Score */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "hsl(30, 10%, 15%)" }}>Your Outfit Analysis</h1>
          <p className="mb-8" style={{ color: "hsl(30, 10%, 45%)" }}>
            Based on <strong>{occasion}</strong> occasion
          </p>

          <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-8" style={{ borderColor: "hsl(25, 95%, 53%)" }}>
            <span className="text-5xl font-bold" style={{ color: "hsl(25, 95%, 53%)" }}>{scores.total}</span>
            <span className="text-sm" style={{ color: "hsl(30, 10%, 40%)" }}>out of 100</span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Color Match", score: scores.color },
            { label: "Style Match", score: scores.style },
            { label: "Combination", score: scores.combo },
            { label: "Occasion Match", score: scores.occasion },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-4 text-center" style={{ border: "1px solid hsl(35, 20%, 90%)" }}>
              <p className="text-2xl font-bold" style={{ color: "hsl(25, 95%, 53%)" }}>{item.score}</p>
              <p className="text-sm mt-1" style={{ color: "hsl(30, 10%, 40%)" }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-3xl p-8 mb-8" style={{ border: "1px solid hsl(35, 20%, 90%)" }}>
          <h2 className="text-xl font-bold mb-6" style={{ color: "hsl(30, 10%, 15%)" }}>Recommended Outfits</h2>

          <div className="space-y-5">
            {recommendations.map((rec) => (
              <div key={rec.title} className="flex items-center justify-between p-4 rounded-2xl" style={{ backgroundColor: "hsl(35, 30%, 97%)" }}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold" style={{ color: "hsl(30, 10%, 15%)" }}>{rec.title}</span>
                    <span className="text-sm px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "hsl(25, 95%, 53%)" }}>
                      {rec.score}%
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "hsl(30, 10%, 45%)" }}>{rec.items}</p>
                </div>
                <CheckCircle size={22} style={{ color: "hsl(25, 95%, 53%)" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="bg-white rounded-3xl p-8 mb-8" style={{ border: "1px solid hsl(35, 20%, 90%)" }}>
          <h2 className="text-xl font-bold mb-6" style={{ color: "hsl(30, 10%, 15%)" }}>Recommended Colors</h2>
          <div className="flex flex-wrap gap-5">
            {[
              { name: "Beige", color: "#D4B896" },
              { name: "Navy", color: "#1E3A5F" },
              { name: "White", color: "#FFFFFF" },
              { name: "Grey", color: "#6B7280" },
              { name: "Olive", color: "#6B7F3B" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full border" style={{ backgroundColor: c.color, borderColor: "hsl(35, 20%, 85%)" }}></div>
                <span className="text-sm" style={{ color: "hsl(30, 10%, 40%)" }}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why this works */}
        <div className="bg-white rounded-3xl p-8" style={{ border: "1px solid hsl(35, 20%, 90%)" }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: "hsl(30, 10%, 15%)" }}>Why these recommendations?</h2>
          <p style={{ color: "hsl(30, 10%, 45%)" }}>
            The suggested outfits maintain good color contrast and match the selected <strong>{occasion}</strong> style. 
            Neutral tones like beige and grey pair well with most tops, while keeping the look clean and versatile.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link href="/analyze">
            <button className="px-8 py-3 rounded-full text-white font-medium cursor-pointer" style={{ backgroundColor: "hsl(25, 95%, 53%)" }}>
              Analyze Another Outfit
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}