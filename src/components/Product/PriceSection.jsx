import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  { id: 1, name: 'Pricing',  price: 29,  features: ['Keyword optimization','Automated meta tags','SEO monitoring','Monthly reports'] },
  { id: 2, name: 'Pro',      price: 79,  features: ['Keyword optimization','Automated meta tags','SEO monitoring','Monthly reports','Content suggestions','Link optimization'] },
  { id: 3, name: 'Business', price: 149, features: ['Keyword optimization','Automated meta tags','SEO monitoring','Monthly reports','Content suggestions','Link optimization','Multi-user access','API integration'] },
];

export default function PricingComponent() {
  const DEFAULT_ID = 2; // auto-selected on load (Pro)
  const [isToggled, setIsToggled] = useState(true);
  const [selectedId, setSelectedId] = useState(DEFAULT_ID);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020817] via-[#0a1628] to-[#020817] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Pricing
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Choose the right plan to meet your SEO
            <br className="hidden sm:block"/> needs and start optimizing today.
          </p>

          {/* Toggle (unchanged) */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-5 md:mt-8">
            <button
              onClick={() => setIsToggled(!isToggled)}
              className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                isToggled ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                  isToggled ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-gray-400 text-xs sm:text-sm">toggle</span>
          </div>
        </div>

        {/* Pricing Cards (hover selects; leaving the grid resets to default) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          onMouseLeave={() => setSelectedId(DEFAULT_ID)}
        >
          {PLANS.map((plan) => {
            const highlighted = plan.id === selectedId;
            return (
              <div
                key={plan.id}
                role="button"
                // tabIndex={0}
                className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8',
                  ' backdrop-blur-sm transition-all h-full flex flex-col cursor-pointer
                  ${highlighted
                    ? 'bg-blue-900/20 border-2 border-blue-500/50 shadow-xl shadow-blue-500/20 md:scale-105'
                    : 'bg-black/40 border border-gray-800 md:hover:scale-[1.02]'}
                `}
                onMouseEnter={() => setSelectedId(plan.id)}
               
              >
                {/* Plan Header */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1 text-xs sm:text-sm">/mo</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm sm:text-base leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={
                    `w-full rounded-lg font-medium transition-all',
                    'py-2.5 sm:py-3 px-5 sm:px-6',
                    ${highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}
                  `}
                >
                  Join waitlist
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
