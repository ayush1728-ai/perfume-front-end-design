import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-stone-100 text-stone-900 overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-stone-200/70 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-stone-700 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>High Perfumery House</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight font-light text-stone-900">
            Artisanal Scents Crafted for <span className="italic font-normal">Modern Luxury</span>
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-lg font-light leading-relaxed">
            Immerse your senses in handcrafted botanical extractions, rare woods, and timeless French perfumery heritage.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#collection" 
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition shadow-lg"
            >
              Explore Collection <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#quiz" 
              className="inline-flex items-center gap-2 border border-stone-400 hover:border-stone-900 text-stone-800 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition"
            >
              Find Your Scent
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Perfume Bottle" 
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}