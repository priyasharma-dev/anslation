import React from 'react'
import Bento from "../../assets/Bento1.png"
import Bento2 from "../../assets/Bento2.png"
import seo from "../../assets/SEO.png"
import Ring from "../../assets/Smart Generator.png"
import vishal from "../../assets/Visual.png"


function PowerAi() {
  return (
    <div className='container mx-auto my-20'>
        <div className=' w-full mx-auto relative' >
            <h3 className='text-2xl sm:text-3xl md:text-4xl  text-white text-center' >
                 <span className="block ">Harness the power of AI,making</span>
                <span className="block">search engine optimization intuitive</span>
                <span className="block">and effective for all skill levels.</span>
                </h3>
        </div>
        <div className='mt-10' >
            <div className='my-10'>
                <img src={Bento} alt="bento" className="w-full h-auto"/>
            </div>
            <div>
                <img src={Bento2} alt="bento" className="w-full h-auto"/>
            </div>
        </div>
        
    </div>
  )
}

export default PowerAi