import React from 'react'
import line1 from "../../assets/Line 1.png"
import line2 from "../../assets/Line 3.png"
import avtar from "../../assets/Avatar@3x 1 2.png"

function OurClient() {
  return (
    <div className='container mx-auto my-20  '> 
      <div className='' >
        <h2 className='text-center text-5xl font-extrabold ' >Our clients</h2>
        <div className='w-96 my-10  mx-auto ' >
        <p className='text-xl text-center' >Hear firsthand how our solutions have boosted online success for users like you.</p>
        </div>
      </div>
      <div className='relative' >
      <div className=' mx-auto w-2xl h-96 my-10 flex justify-center items-center gap-10  ' style={{
           
           background:
             "radial-gradient(50% 50% at 50% 50%, #1D73F3 , #02010300)",
          }}  >
        
              <div>
                  <img src={avtar} alt="avtar" className='w-36' />
              </div>

                <div className=' w-72' >
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
  )
}

export default OurClient