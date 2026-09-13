import Link from "next/link";
import { Camera, Upload, Search, Heart, ShoppingBag, Sparkles, Palette, ArrowRight, Shield, Zap, User, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(40, 33%, 98%)' }}>
      
      {/* ========== NAVBAR ========== */}
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: 'hsl(35, 20%, 90%)' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'hsl(25, 95%, 53%)' }}>
            S
          </div>
          <div>
            <h1 className="font-bold text-lg" style={{ color: 'hsl(30, 10%, 15%)' }}>StyleAi</h1>
            <p className="text-xs" style={{ color: 'hsl(30, 10%, 45%)' }}>Wear Your Best Story</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'hsl(30, 10%, 30%)' }}>
<Link href="/" className="hover:opacity-70">Home</Link>
<Link href="/analyze" className="hover:opacity-70">AI Stylist</Link>
<a href="#" className="hover:opacity-70">Trends</a>
<a href="#" className="hover:opacity-70">About</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'white', border: '1px solid hsl(35, 20%, 90%)' }}>
            <Search size={16} />
            <span style={{ color: 'hsl(30, 10%, 50%)' }}>Search outfits, styles, colors...</span>
          </div>
          <Heart size={20} style={{ color: 'hsl(30, 10%, 40%)' }} />
          <ShoppingBag size={20} style={{ color: 'hsl(30, 10%, 40%)' }} />
          <button className="px-5 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: 'hsl(25, 95%, 53%)' }}>
            Sign In
          </button>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: 'hsl(25, 95%, 95%)', color: 'hsl(25, 95%, 40%)' }}>
              ✦ AI POWERED FASHION
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'hsl(30, 10%, 15%)' }}>
              More Than<br />Fashion<br />
              <span style={{ color: 'hsl(25, 95%, 53%)' }}>It's You</span>
            </h1>
            
            <p className="text-lg mb-8 max-w-md" style={{ color: 'hsl(30, 10%, 40%)' }}>
              Capture your look, get AI-powered recommendations and discover casual styles that truly match your vibe.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/analyze">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium cursor-pointer" style={{ backgroundColor: 'hsl(25, 95%, 53%)' }}>
                  <Camera size={18} />
                  Try with Camera
                </button>
              </Link>
              <Link href="/analyze">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium border cursor-pointer" style={{ borderColor: 'hsl(35, 20%, 85%)', color: 'hsl(30, 10%, 25%)', backgroundColor: 'white' }}>
                  <Upload size={18} />
                  Upload Image
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side Image Placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop" 
                alt="Fashion Model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(30, 10%, 40%)' }}>
            <Camera size={18} style={{ color: 'hsl(25, 95%, 53%)' }} />
            Real-time Analysis
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(30, 10%, 40%)' }}>
            <Sparkles size={18} style={{ color: 'hsl(25, 95%, 53%)' }} />
            Personalized Suggestions
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(30, 10%, 40%)' }}>
            <Palette size={18} style={{ color: 'hsl(25, 95%, 53%)' }} />
            1000+ Styles & Color Combos
          </div>
        </div>
      </section>

      {/* ========== STYLES FOR EVERY YOU ========== */}
      {/* ========== STYLES FOR EVERY YOU ========== */}
      <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium mb-2" style={{ color: 'hsl(25, 95%, 53%)' }}>EXPLORE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'hsl(30, 10%, 15%)' }}>
            Styles for Every You
          </h2>
          <p style={{ color: 'hsl(30, 10%, 45%)' }}>
            From everyday casuals to special moments, find styles that match your mood.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { 
              name: "Casuals", 
              desc: "Everyday Comfort",
              image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop"
            },
            { 
              name: "Dresses", 
              desc: "For Every Occasion",
              image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop"
            },
            { 
              name: "Tops", 
              desc: "Trendy & Versatile",
              image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=300&fit=crop"
            },
            { 
              name: "Bottoms", 
              desc: "Jeans, Pants & More",
              image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=300&h=300&fit=crop"
            },
            { 
              name: "Outerwear", 
              desc: "Layer with Style",
              image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop"
            },
            { 
              name: "Active Wear", 
              desc: "Move in Style",
              image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=300&h=300&fit=crop"
            },
            { 
              name: "Traditional", 
              desc: "Timeless Beauty",
              image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop"
            },
            { 
              name: "Accessories", 
              desc: "Complete Your Look",
              image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=300&h=300&fit=crop"
            },
          ].map((item) => (
            <div 
              key={item.name}
              className="bg-white rounded-xl p-2.5 text-center cursor-pointer hover:shadow-md transition"
              style={{ border: '1px solid hsl(35, 20%, 92%)' }}
            >
              <div className="w-full h-28 rounded-lg mb-2 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm" style={{ color: 'hsl(30, 10%, 15%)' }}>{item.name}</h3>
              <p className="text-[11px] mt-0.5" style={{ color: 'hsl(30, 10%, 50%)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== COLORS + AI STYLIST ========== */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(135deg, hsl(25, 90%, 55%), hsl(15, 90%, 60%)' }}>
            <h2 className="text-3xl font-bold mb-3">Colors Bring Out<br />a Better You</h2>
            <p className="mb-6 opacity-90">Not just outfits, but the right colors for your vibe.</p>
            <button className="flex items-center gap-2 bg-white text-orange-600 px-5 py-2.5 rounded-full font-medium text-sm">
              Explore by Mood
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8" style={{ border: '1px solid hsl(35, 20%, 90%)' }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'hsl(30, 10%, 15%)' }}>AI Stylist</h2>
            <p className="mb-6 text-sm" style={{ color: 'hsl(30, 10%, 45%)' }}>
              Get personalized outfit ideas based on your look, body type and style.
            </p>
            <div className="flex gap-3 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-24 rounded-xl flex items-center justify-center text-xs" style={{ backgroundColor: 'hsl(35, 30%, 94%)', color: 'hsl(30, 10%, 50%)' }}>
                  Outfit {i}
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border" style={{ borderColor: 'hsl(25, 95%, 53%)', color: 'hsl(25, 95%, 53%)' }}>
              Start Your Style Journey
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========== FASHION WITHOUT LIMITS ========== */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8" style={{ backgroundColor: 'hsl(35, 30%, 96%)' }}>
          <div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: 'hsl(30, 10%, 15%)' }}>
              Fashion Without Limits
            </h2>
            <p className="mb-6" style={{ color: 'hsl(30, 10%, 45%)' }}>
              Express. Experiment. Evolve.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: 'hsl(25, 95%, 53%)' }}>
              Watch Our Story
            </button>
          </div>
          <div className="w-full md:w-80 h-48 rounded-2xl flex items-center justify-center text-sm" style={{ backgroundColor: 'hsl(35, 25%, 90%)', color: 'hsl(30, 10%, 50%)' }}>
            Clothing Rack Image
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Zap size={22} />, title: "AI Powered", desc: "Smart recommendations" },
            { icon: <User size={22} />, title: "Personalized", desc: "Just for you" },
            { icon: <TrendingUp size={22} />, title: "Trendy & Updated", desc: "Latest casual styles" },
            { icon: <Shield size={22} />, title: "Safe & Secure", desc: "Your data, our priority" },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(25, 95%, 95%)', color: 'hsl(25, 95%, 53%)' }}>
                {item.icon}
              </div>
              <h4 className="font-semibold" style={{ color: 'hsl(30, 10%, 15%)' }}>{item.title}</h4>
              <p className="text-xs" style={{ color: 'hsl(30, 10%, 50%)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="px-8 py-8 border-t" style={{ borderColor: 'hsl(35, 20%, 90%)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: 'hsl(25, 95%, 53%)' }}>
              S
            </div>
            <span className="font-semibold" style={{ color: 'hsl(30, 10%, 15%)' }}>StyleAi</span>
          </div>
          <p className="text-sm" style={{ color: 'hsl(30, 10%, 50%)' }}>
            Make fashion a brighter you
          </p>
        </div>
      </footer>

    </div>
  );
}