import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-700" />
          <span className="font-serif text-2xl tracking-widest text-stone-900 font-medium">AURA & ESSENCE</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-stone-600 font-medium">
          <a href="#home" className="hover:text-stone-900 transition">Home</a>
          <a href="#collection" className="hover:text-stone-900 transition">Collection</a>
          <a href="#quiz" className="hover:text-stone-900 transition">Scent Finder</a>
          <a href="#reviews" className="hover:text-stone-900 transition">Reviews</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 rounded-full hover:bg-stone-200/60 transition text-stone-800"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-amber-800 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-200/60 text-stone-800"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-4 space-y-3">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-700 font-medium uppercase text-sm">Home</a>
          <a href="#collection" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-700 font-medium uppercase text-sm">Collection</a>
          <a href="#quiz" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-700 font-medium uppercase text-sm">Scent Finder</a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-700 font-medium uppercase text-sm">Reviews</a>
        </div>
      )}
    </header>
  );
}