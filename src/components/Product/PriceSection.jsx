import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function PricingComponent() {
  const [isToggled, setIsToggled] = useState(false);

  const plans = [
    {
      name: 'Pricing',
      price: 29,
      features: [
        'Keyword optimization',
        'Automated meta tags',
        'SEO monitoring',
        'Monthly reports'
      ]
    },
    {
      name: 'Pro',
      price: 79,
      features: [
        'Keyword optimization',
        'Automated meta tags',
        'SEO monitoring',
        'Monthly reports',
        'Content suggestions',
        'Link optimization'
      ],
      highlighted: true
    },
    {
      name: 'Business',
      price: 149,
      features: [
        'Keyword optimization',
        'Automated meta tags',
        'SEO monitoring',
        'Monthly reports',
        'Content suggestions',
        'Link optimization',
        'Multi-user access',
        'API integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020817] via-[#0a1628] to-[#020817] flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-gray-400 text-lg">
            Choose the right plan to meet your SEO<br />needs and start optimizing today.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setIsToggled(!isToggled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isToggled ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isToggled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-gray-400">dsad</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 relative  md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 backdrop-blur-sm transition-all ${
                plan.highlighted
                  ? 'bg-blue-900/20 border-2 border-blue-500/50 shadow-xl shadow-blue-500/20 scale-105'
                  : 'bg-black/40 border border-gray-800'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">/mo</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className='' >
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium   transition-all ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700   text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                Join waitlist
              </button>
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}