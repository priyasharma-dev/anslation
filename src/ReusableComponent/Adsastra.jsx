import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Stars, Zap, Target } from 'lucide-react';
import DataVerseSection from '../components/home/dataverse/DataVerseSection';
import DataVerse from './DataVerse';

const AdAstra = ({data}) => {
  const [isVisible, setIsVisible] = useState(false);
  const[togle , setTogle] = useState(false)
  const [activeNode , setActiveNode] = useState('')
  const productRef = useRef(null)

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const Node = ["DataVerse" , "Ads-Astra"]

  function handleClick(key){
       setTogle(prev => !prev)
       setActiveNode(prev => (prev === key ? null : key))

       Node.filter((item) =>{
        if(key === item){
            productRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
       })
     
   

  }


  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ad Astra
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Reach for the stars with our advanced advertising platform that delivers cosmic results
            </p>
          </div>

          {/* Main Content */}
          <div>
            {data?.map((item ,index) =>(
                <div 

                onClick={ () => handleClick(item.title)}
                
                key={index} className={`grid my-2 lg:grid-cols-2 gap-12 items-center ${activeNode === item.title ?"bg-blue-600  rounded-2xl ": null}  `}>

                 
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className={`flex items-center gap-4 p-4 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 `}>
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-slate-400">{item?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
    <div>
            <div  ref={productRef}  >
                {activeNode === "DataVerse" && <DataVerse/> }
             </div>
    </div>
    </div>
  );
};

export default AdAstra;
