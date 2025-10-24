import React from 'react'
import line1 from "../../assets/Line 1.png"
import line2 from "../../assets/Line 3.png"
import avtar from "../../assets/Avatar@3x 1 2.png"
import { Ellipse81 , Ellipse82 } from '../../gradient/gradienttop'

import { Rectangle82, Rectangle83
 } from '../../gradient/gradienttop'

function OurClient() {
  return (
    <div className='container mx-auto w-full  my-20 relative '>
       {/* Desktop Section */} 
        <div>
    <div>
      <div>
        <h2 className='text-center text-5xl font-extrabold z-30  ' >Our clients</h2>
        <div className='w-96 my-10  mx-auto ' >
        <p className='text-xl text-center'>
          Hear firsthand how our solutions have boosted online success for users like you.</p>
        </div>
      </div>
      <div className="hidden sm:block relative  overflow-hidden" >
         {/* Gradient background circle */}
      <div className=' mx-auto  w-full h-[400px]  my-10 flex justify-center items-center gap-10  '>
            <div className='w-full z-10 left-0 h-[500px] rounded-full absolute bg-[radial-gradient(50%_50%_at_50%_50%,_#0036CA_0%,_#003E87A6_49.04%,_#000000_120%)] '></div>
              <div className='z-50 mb-25' >
                  <img src={avtar} alt="avtar" className='w-36 z-50' />
              </div>

                <div className=' w-72 z-50 mb-25' >
                   <div className='py-2' >”This product has completely transformed how I manage my projects and deadlines”</div>
                    <p>Talia Taylor</p>
                    <div className='text-white/70' >Digital Marketing Director @ Quantum</div>
                </div>
      </div>

      <div >
        <img src={line1} alt="verticla line" className='absolute  top-0 left-100 h-96' />
        <img src= {line1} alt="verticle line" className='absolute  top-0 left-137  h-96' />
        <img src={line2} alt="horizontal line" className='absolute w-3xl top-66 left-50 h-0.5' />
        <img src={line2}  alt="horizontal line" className='absolute w-3xl top-30 left-50 h-0.5 ' />
      </div>
      </div>
       </div>

    </div>
     {/* Mobile Section */}
      <div className="block sm:hidden">
        <div className='relative overflow-hidden bg-gradient-to-r from-[#0036CA] via-[#003E87A6] to-[#000000] p-6 rounded-xl'>
          {/* Mobile Avatar Image */}
          <div className='mx-auto w-40 h-40 rounded-full overflow-hidden mb-6 relative border-8 border-gradient-to-r from-[#00F0FF] to-[#00FF79]'>
            <img 
            src={avtar}
             alt="Avatar"
              className='w-full h-full object-cover rounded-full' />

          </div>

          {/* Mobile Testimonial Text */}
          <div className='text-center mb-6'>
            <p className='text-xl mb-4'>
              “This product has completely transformed how I manage my projects and deadlines”
            </p>
            <p className='font-bold'>Talia Taylor</p>
            <p className='text-white/70'>
              Digital Marketing Director @ Quantum
            </p>
          </div>
           </div>
           {/* Gradient below the text */}
          <div className='w-full h-20 bg-gradient-to-r from-[#050207] to-[#050208] mt-6 rounded-xl'></div>
       
    </div>
    </div>
  )
}

export default OurClient