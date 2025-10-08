import React from 'react'
import who from "../../assets/Group 39566.png"
import verticleLine from "../../assets/Group 39562.png"
import mission from "../../assets/Group 39568.png"
import goal from "../../assets/Group 39571.png"

function WeAre() {
  return (
    <section  className="py-8 md:py-10"
     style={{
           background:
             "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
          }} >
      <div className=' mx-auto w-[92%] max-w-7xl'>
        <div className='relative' >
          
          <div className='hidden lg:block absolute left-1/2 top-6 -translate-x-1/2 z-0'>
            <img src={verticleLine} alt="" className='h-[920px]' />
          </div>
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 my-12 md:my-16'>
            <div className='flex justify-center lg:justify-start'>
              <img
               src={who} 
              alt="Team at work" 
              srcset=""
               className='w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain' />
            </div>
            <div className='text-white/95'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold' >Who We Are</h2>
              <div className='mt-4 space-y-4 text-sm sm:text-base leading-relaxed' >
                <p className=' text-justify'>
                  At Anslation, we are redefining the way businesses interact with technology. As a leading provider of innovative software solutions, we deliver cutting-edge products that help organizations scale and thrive in the digital age.
                </p>
                <p className='text-justify'>
                  Founded with a vision to merge the worlds of marketing technology and business automation, our team of passionate technologists and innovators have built a suite of tools designed to optimize business operations and elevate performance.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center my-20 gap-10'>
            <div className='w-full md:w-1/2 flex justify-center'>
              <img src={mission} 
              alt="mission" 
              srcSet="" 
              className='w-full max-w-sm md:max-w-md px-5 md:px-10' />
            </div>
            <div className=' w-full md:w-1/2 px-5 md:px-10'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4' >Our Mission</h2>
              <div className='text-base md:text-lg leading-relaxed' >
                <p >To empower businesses by delivering intelligent, scalable software solutions that fuel growth, enhance efficiency, and foster innovation.</p>
                <div className='py-4 ' >
                  <div className='grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-3  '>
                    <div className='border rounded px-4 py-2 text-sm md:text-base text-center' >Intelligent</div>
                    <div className="border rounded px-4 py-2 bg-gradient-to-r from-[#1D73F3A3] to-[#000C27D1] text-sm md:text-base text-center">
                      Foster innovation
                    </div>
                    <div className='border rounded px-4 py-2 text-sm md:text-base text-center '  >Fuel growth</div>
                    <div className='border rounded px-4 py-2 text-sm md:text-base text-center'  > Enhance efficiency</div>
                    <div className='border rounded px-4 py-2 text-sm md:text-base text-center  col-span-2 w-full whitespace-normal md:col-auto md:w-auto md:whitespace-nowrap md:shrink-0'>Scalable software solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 my-12 md:my-16'>
            <div className='flex justify-center lg:justify-start'>
              <img 
              src={goal} 
              alt="Goals and milestones"
              srcset=""
              className='w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain' />
            </div>
            <div className='text-white/95'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold' >Our Story</h2>
              <div className='mt-4 text-sm sm:text-base leading-relaxed' >
                <p>
                  Anslation started as a marketing software company but quickly realized the potential to transform the tech landscape. Our journey from providing marketing automation tools to becoming a tech-first company with enterprise-level solutions has been driven by our commitment to innovation and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WeAre