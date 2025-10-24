import React from 'react'
import career1 from "../../assets/caree1.png"
import careerpc from "../../assets/careerPic.png"
import { motion } from 'framer-motion'

function CareerGrowth() {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12 lg:space-y-20' >
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16' >
                {/* Image */}
                <div className="flex justify-center lg:justify-start">
                    <motion.img
                       whileHover={{
                        scale: 1.2,
                        // Will be used when gesture starts
                        transition: { duration: 0.9}
                      }}
                      // Will be used when gesture ends
                      transition={{ duration: 0.9}}
                     src={careerpc} 
                     alt="Teammates collaborating at Anslations" 
                     className="w-full max-w-[18rem] sm:max-w-[22rem] cursor-pointer md:max-w-[26rem]
                       aspect-[4/3] object-cover rounded-xl shadow-lg" />
                </div>
                 {/* Text */}
                <div className='text-center lg:text-left'>
                    <p className='text-[#808080] text-sm sm:text-base' >What drives us</p>
                    <div className='py-3 sm:py-4' >
                        <h3 className='font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl'>Play, Courage,

                        </h3>
                        <h3 className='font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl' >Care & Excellence</h3>
                    </div>

                 
                        <p className='text-[#808080] max-w-prose mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed' >
                            From product, to partnerships, to everyday interactions  — when we do anything, we want it to be 
                            the absolute best it can be. These four core values help guide us, and resonate with everyone who 
                            works here. If they and resonate with everyone who works here. If they 
                            </p>

                </div>
            </div>
              {/* --- Section 2 --- */}
            <div className=' flex flex-col relative lg:flex-row-reverse lg:items-end ' >
                {/* Image (desktop unchanged height) */}
                    <motion.img src={career1}
                       whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.9}
                      }}
                     
                      transition={{ duration: 0.9}}
                     alt="Tasmania coastline"
                      className='w-full md:max-w-2xl md:mx-auto
                       lg:w-auto h-64 sm:h-80 cursor-pointer md:h-64 lg:h-80 object-cover rounded-xl shadow-xl' />
              
               {/* Desktop overlay: same absolute positioning */}
                <div className='hidden lg:block absolute bottom-0 left-40 max-w-xl ' >
                    <p className='text-white/75' >Tasmania, Australia</p>
                    <h3 className='text-4xl font-bold py-3' >Join us on the edge of the World.</h3>
                    <p className=' text-white/75' >Powered by a vibrant creative and cultural scene, the thriving city
                     of Hobart sits nestled amongst the pristine wilderness of Tasmania. Procreate proves you can develop industry-leading creative software anywhere with the right people and drive. </p>
                </div>

                 {/* Mobile/Tablet text: flows below image */}
                  <div className="lg:hidden mt-4 space-y-2 max-w-prose">
                 <p className="text-white/75 text-sm">Tasmania, Australia</p>
                 <h3 className="text-xl sm:text-2xl font-bold">Join us on the edge of the World.</h3>
               <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Powered by a vibrant creative and cultural scene, the thriving city of Hobart
            sits nestled amongst the pristine wilderness of Tasmania. Procreate proves you
            can develop industry-leading creative software anywhere with the right people
            and drive.
              </p>
              </div>
            </div>
        </div> 
    )
}

export default CareerGrowth