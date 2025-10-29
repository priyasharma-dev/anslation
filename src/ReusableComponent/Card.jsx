import React, { useRef, useState } from 'react';
import { Package } from 'lucide-react';
import Mmicrotools from '../components/home/product/Mmicrotools';
import Mproduct from '../components/home/product/Mproduct';
import Adsastra from './Adsastra';

function Card({productCards}) {
    const[activeNode , setActiveNode] = useState('')
    const [togle , setTogle] = useState(false)
    const productRef = useRef(null)

    const Node = ["PDF Reader" , "Ads-Astra"]


function handleClick(key){
         setTogle(pre => !pre)
         setActiveNode(prev => (prev === key ? null : key))
         
       Node.filter((item) => {
        if(key === item){
            productRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
       }) 

    }

    const Adsastradata = [
        {
          title: 'DataVerse',
          description: 'Scalable cloud infrastructure for modern businesses',
          // color: 'from-blue-500 to-cyan-500'
          color: 'from-indigo-500 to-blue-500'
        },
        {
          title: ' MetaVerse',
          description: 'Advanced analytics powered by artificial intelligence',
          // color: 'from-purple-500 to-pink-500'
          color: 'from-indigo-500 to-blue-500'
        },
        {
          title: 'United',
          description: 'Native mobile applications for iOS and Android',
          // color: 'from-green-500 to-emerald-500'
          color: 'from-indigo-500 to-blue-500'
        },
       
      ];
    
  return (
    <div>
    <div className="min-h-screen bg-black text-white py-6">
      <div className="max-w-7xl mx-auto">
        <div className='flex justify-center ' >
        <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">Product Page</h1>
        </div>
    
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {productCards.map((product, index) => (
            <div
              onClick={() => handleClick(product.title)}
              key={index}
              className={`group relative  rounded-3xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:scale-105  
                ${activeNode === product.title ? "bg-blue-600 border-blue-400 shadow-blue-500/40":"rounded-3xl border border-slate-700/50"}
                `}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-4 md:p-8">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br rounded-2xl mb-4 md:mb-6 flex items-center justify-center`}>
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
       <div>
        <div ref={productRef} >
        {activeNode === "Ads-Astra" && <Adsastra data={Adsastradata} /> }
        </div>
            <div ref={productRef} >
        {activeNode === "PDF Reader" && <Mproduct/>}
            </div>
       </div>
    </div>
  );
}

export default Card;