import React from 'react';
import { Package } from 'lucide-react';

function Mproduct() {
  const productCards = [
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure for modern businesses',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Analytics',
      description: 'Advanced analytics powered by artificial intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile Apps',
      description: 'Native mobile applications for iOS and Android',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enterprise Suite',
      description: 'Complete enterprise resource planning solution',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Security Hub',
      description: 'Comprehensive security and compliance platform',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Data Insights',
      description: 'Real-time data visualization and reporting tools',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Product Page</h1>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4   md:gap-8">
          {productCards.map((product, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-4 md:p-8">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${product.color} rounded-2xl mb-4 md:mb-6 flex items-center justify-center`}>
                  <Package className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />
                </div>
                
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">{product.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{product.description}</p>
                
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-700/50">
                  <button className={`px-4 md:px-6 py-2 bg-gradient-to-r ${product.color} rounded-xl text-white text-sm md:text-base font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>

              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mproduct;