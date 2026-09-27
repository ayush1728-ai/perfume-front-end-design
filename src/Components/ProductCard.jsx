import React from 'react';
import { Star, Eye, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
      <div>
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <span className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
            {product.badge}
          </span>
          <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
            <button 
              onClick={() => onQuickView(product)}
              className="bg-white text-stone-900 p-3 rounded-full shadow-lg hover:bg-stone-900 hover:text-white transition"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onAddToCart(product)}
              className="bg-white text-stone-900 p-3 rounded-full shadow-lg hover:bg-stone-900 hover:text-white transition"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center text-xs tracking-wider uppercase text-stone-500 mb-1">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-amber-700">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>
          <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">{product.name}</h3>
          <p className="text-stone-600 text-sm line-clamp-2 font-light">{product.description}</p>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between mt-auto">
        <span className="font-serif text-xl font-medium text-stone-900">${product.price}.00</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}