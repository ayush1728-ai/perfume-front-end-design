import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export default function ScentQuiz({ products, onAddToCart }) {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);

  const handleSelectFamily = (family) => {
    let matched = products[0];
    if (family === 'Woody') matched = products[1];
    else if (family === 'Floral') matched = products[2];
    else if (family === 'Amber') matched = products[3];
    else if (family === 'Citrus') matched = products[4];

    setResult(matched);
    setStep(2);
  };

  const resetQuiz = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <section id="quiz" className="py-20 bg-stone-900 text-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-stone-800 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-amber-400 uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Fragrance Matcher</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">Find Your Signature Scent</h2>

        <div className="bg-stone-800/80 border border-stone-700 rounded-2xl p-8 sm:p-12 shadow-2xl text-left mt-8">
          {step === 1 && (
            <div>
              <h3 className="font-serif text-2xl font-medium mt-1 mb-6 text-center">Which scent family speaks to your soul?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Woody', 'Floral', 'Amber', 'Citrus'].map((family) => (
                  <button
                    key={family}
                    onClick={() => handleSelectFamily(family)}
                    className="p-5 rounded-xl border border-stone-700 hover:border-amber-400 hover:bg-stone-700/50 transition text-center font-medium text-sm"
                  >
                    {family}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && result && (
            <div className="text-center space-y-6">
              <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
              <h3 className="font-serif text-3xl font-medium">Your Perfect Match</h3>
              <div className="bg-stone-900 rounded-xl p-6 max-w-md mx-auto flex gap-6 items-center text-left border border-stone-700">
                <img src={result.image} alt={result.name} className="w-20 h-24 object-cover rounded-lg" />
                <div>
                  <h4 className="font-serif text-xl font-medium text-white">{result.name}</h4>
                  <p className="text-xs text-stone-400 font-light mb-2">{result.description}</p>
                  <span className="font-serif text-lg text-amber-300">${result.price}.00</span>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <button onClick={() => onAddToCart(result)} className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-full">
                  Add to Cart
                </button>
                <button onClick={resetQuiz} className="inline-flex items-center gap-2 border border-stone-600 text-stone-300 px-6 py-3 rounded-full text-xs uppercase">
                  <RotateCcw className="w-4 h-4" /> Retake
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}