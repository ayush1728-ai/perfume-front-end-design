import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, CheckCircle } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          <div className="p-6 border-b border-stone-200 flex items-center justify-between">
            <h2 className="font-serif text-xl font-medium text-stone-900">Your Shopping Bag</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-100 text-stone-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderPlaced ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-2xl font-medium text-stone-900">Order Confirmed!</h3>
                <button onClick={() => { setOrderPlaced(false); onClose(); }} className="bg-stone-900 text-white px-8 py-3 rounded-full text-xs uppercase">
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <p className="text-center text-stone-500 py-20 font-serif text-lg">Your bag is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-serif text-sm font-medium text-stone-900">{item.name}</h4>
                    <p className="text-xs text-stone-500">${item.price}.00</p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} className="text-rose-600 p-1"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {!orderPlaced && cart.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
              <div className="flex justify-between font-serif text-lg font-medium text-stone-900">
                <span>Total</span>
                <span>${subtotal}.00</span>
              </div>
              <button 
                onClick={() => setOrderPlaced(true)}
                className="w-full bg-stone-900 hover:bg-amber-800 text-white font-semibold text-xs uppercase tracking-widest py-4 rounded-full transition shadow-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}