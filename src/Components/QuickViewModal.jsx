import React from 'react';
import { X, Star, ShoppingBag } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-stone-100 hover:bg-stone-200 text-stone-800 p-2 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-stone-100 aspect-square md:aspect-auto">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">{product.category} • {product.badge}</span>
              <h2 className="font-serif text-3xl font-medium text-stone-900 mt-1 mb-2">{product.name}</h2>
              <div className="flex items-center gap-1 text-amber-700 mb-4">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium text-stone-700">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">{product.description}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <span className="font-serif text-2xl font-medium text-stone-900">${product.price}.00</span>
              <button 
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full transition shadow"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}