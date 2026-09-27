import './index.css'
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProductCard from './Components/ProductCard';
import QuickViewModal from './Components/QuickViewModal';
import ScentQuiz from './Components/ScentQuiz';
import CartDrawer from './Components/CartDrawer';
import { products, reviewsData } from './Data/products';
import { Star, ShieldCheck, Truck } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navbar cartCount={cart.reduce((a, c) => a + c.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />

      <section className="bg-stone-100 border-y border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs font-semibold uppercase tracking-wider text-stone-700">
          <div className="flex items-center justify-center gap-2"><Truck className="w-4 h-4 text-amber-700" /> Free Express Shipping</div>
          <div className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-amber-700" /> 100% Authentic Extracts</div>
          <div className="flex items-center justify-center gap-2"><Star className="w-4 h-4 text-amber-700" /> Sample with Every Order</div>
        </div>
      </section>

      <section id="collection" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">Curated Masterpieces</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 mt-2 mb-6">The Fragrance Collection</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Unisex', 'Men', 'Women'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition ${
                  selectedCategory === cat ? 'bg-stone-900 text-white' : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={setQuickViewProduct} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </section>

      <ScentQuiz products={products} onAddToCart={handleAddToCart} />

      <QuickViewModal 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
        onAddToCart={handleAddToCart} 
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        onUpdateQuantity={(id, qty) => setCart(cart.map(i => i.id === id ? {...i, quantity: qty} : i).filter(i => i.quantity > 0))} 
        onRemoveItem={(id) => setCart(cart.filter(i => i.id !== id))} 
      />
    </div>
  );
}