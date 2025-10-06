import React from 'react'
import cursor from "../../assets/cursor-click 1.png"

function Elevate() {
  return (
    <div className='container border rounded-xl  shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       transition-shadow border-white/15  mx-auto bg-gradient-to-r from-[#001E54] to-[#020103]' >
        <div className='w-72 mx-20 mt-20' >
            <h3 className='text-5xl' >Elevate your SEO efforts.</h3>
        </div>
        <div className='flex justify-between mx-20'  >
             <div className=' flex flex-col gap-10  my-20'>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >User-friendly dashboard</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Perform Complex SEO audits and optimization with a single click</p>
                    </div>
                </div>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >Content evaluation</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Simple corrections for immediate improvemens.</p>
                    </div>
                </div>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >Link Optimization Wizard</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Guides you through the process of creating and managing links.</p>
                    </div>
                </div>
                
             </div>
             <div className='flex flex-col gap-10  my-20'>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >Visual reports</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Visual insights into your site’s performance.</p>
                    </div>
                </div>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >SEO goal setting</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Helps you set and achieve SEO goals with guided assistance.</p>
                    </div>
                </div>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >One-click optimization</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Perform complex SEO audits and optimizations with a single click.</p>
                    </div>
                </div>
               
                
               
             </div>
             <div className='flex flex-col gap-10  my-20'>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >Smart Keyword Generator</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Automatic suggestions and the best keywords to target.</p>
                    </div>
                </div>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >Automated alerts</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Automatic notifications about your SEO health, including quick fixes.</p>
                    </div>
                </div>
                <div className='' >
                    <div className='flex gap-2' >
                    <img src={cursor} alt="cursor" className='w-6' />
                    <span  >Competitor reports</span>
                    </div>
                    <div className='w-72 my-5' >
                        <p className='text-white/70' >Provides insights into competitors’ keyword strategies and ranking.</p>
                    </div>
                </div>
               
                
               
             </div>
            
        </div>
    </div>
  )
}

export default Elevate