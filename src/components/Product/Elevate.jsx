import React from 'react'
import cursor from "../../assets/cursor-click 1.png"

function Elevate() {
  return (
    <div 
    className='container border rounded-xl 
     shadow-[0_10px_30px_rgba(255,255,255,0.15)]
      transition-shadow border-white/15  mx-auto
       bg-gradient-to-r from-[#001E54] to-[#020103]
       px-4 sm:px-6 lg:px-0 py-10 sm:py-14 lg:py-20' >
         {/* Heading */}
        <div className='w-full max-w-md sm:max-w-lg lg:w-72 mx-auto sm:mx-8 lg:mx-20 mt-6 sm:mt-10 lg:mt-20 text-center' >
            <h3 className='text-2xl sm:text-3xl lg:text-5xl leading-tight tracking-tight' >
                Elevate your SEO efforts.
            </h3>
        </div>

         {/* Columns */}
        <div 
        className='mt-8 sm:mt-10 lg:mt-12  sm:mx-6 lg:mx-20
                   grid grid-cols-1 md:grid-cols-3
                   gap-6 md:gap-8 lg:gap-10
                   max-w-5xl mx-auto'>

         {/* Col 1 */}
         <div className='px-1 sm:px-2 w-full'>

             <div className='flex flex-col space-y-5 sm:space-y-6 lg:space-y-8 mt-4 sm:mt-6 lg:mt-10'>
                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base' >User-friendly dashboard</span>
                    </div>
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >
                        Perform Complex SEO audits and optimization with a single click
                        </p>
                </div>

                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base'>Content evaluation</span>
                    </div >
                   
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >Simple corrections for immediate improvemens.</p>
                    
                </div>

                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base'>Link Optimization Wizard</span>
                    </div>
                   
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >Guides you through the process of creating and managing links.</p>
                  
                </div>
             </div>
         </div>

          {/* Col 2 */}
           <div className='px-1 sm:px-2 w-full'>
             <div className='flex flex-col space-y-5 sm:space-y-6 lg:space-y-8 mt-4 sm:mt-6 lg:mt-10'>
                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base' >Visual reports</span>
                    </div>
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >
                        Visual insights into your site’s performance.
                        </p>
                </div>

                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base'>SEO goal setting</span>
                    </div>
                    
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >Helps you set and achieve SEO goals with guided assistance.</p>
                    
                </div>

                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base'>One-click optimization</span>
                    </div>
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >Perform complex SEO audits and optimizations with a single click.</p>
                
                </div>
               </div>
             </div>

              {/* Col 3 */}
               <div className='px-1 sm:px-2 w-full'>
             <div className='flex flex-col space-y-5 sm:space-y-6 lg:space-y-8 mt-4 sm:mt-6 lg:mt-10'>
                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base'>Smart Keyword Generator</span>
                    </div>
               
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >Automatic suggestions and the best keywords to target.</p>
                </div>

                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base'>Automated alerts</span>
                    </div>
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm'>
                        Automatic notifications about your SEO health, including quick fixes.</p>
                    
                </div>
                <div>
                    <div className='flex gap-3 items-start' >
                    <img src={cursor} alt="cursor" className='w-5 sm:w-6 shrink-0' />
                    <span className='font-semibold text-sm sm:text-base'>Competitor reports</span>
                    </div>
                        <p className='text-white/70 leading-relaxed mt-2 text-xs sm:text-sm' >Provides insights into competitors’ keyword strategies and ranking.</p>
                  
                </div>
                </div>
                
               
             </div>
            
        </div>
    </div>
  )
}

export default Elevate