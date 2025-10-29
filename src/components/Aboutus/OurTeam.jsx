import React from 'react'
import img1 from "../../assets/our-team1-2.png"
import img2 from '../../assets/our-team1-3.png'
import img3 from "../../assets/our-team1-4.png"
import img4 from '../../assets/our-team1-5.png'
import img5 from '../../assets/our-team1-6.png'
import img6 from '../../assets/our-team1.png'
import { OurTeamGradiantBottom, OurTeamGradiantTop } from '../../gradient/gradiant'
import { motion } from 'framer-motion'

const team = [
  { img: img1, role: "CEO", name: "sahil Khan" },
  { img: img2, role: "CTO", name: "Aisha Khan" },
  { img: img3, role: "Marketing Head", name: "Vikram Singh" },
  { img: img4, role: "Product Lead", name: "Priya" },
  { img: img5, role: "Design Lead", name: "Rohit Verma" },
  { img: img6, role: "Engineering Manager", name: "Neha Gupta" },
];


function OurTeam() {
  return (
    <>
      <div className='relative' >
        <div>
          <OurTeamGradiantTop/>
        </div>

        <div>
          <OurTeamGradiantBottom/>
        </div>
        <div className='mt-12 container md:mt-16  max-w-7xl mx-auto px-4' 
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
        }}  >
          <div>
            <h2 className='text-center text-4xl font-bold' >Our Team</h2>
            <p className='mx-auto max-w-md my-4 text-center md:text-justify'>
              Our leadership team brings a wealth of experience, innovation,
               and passion to Anslation. Together, they lead us in transforming
                technology to drive business success
                </p>
          </div>

          {/* ============ MOBILE ============ */}
        <div className="md:hidden mt-10 grid grid-cols-2 gap-x-3 gap-y-8 justify-items-center pb-12">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`w-[35vw] max-w-[180px] ${i % 2 === 1 ? "mt-6" : "mt-0"}`}
            >
              <div className="relative overflow-hidden rounded-[3rem] aspect-[9/16] shadow-lg ring-1 ring-white/10">
                <img
                  src={m.img}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover block"
                />
                {/* caption always visible on mobile */}
                <div className="absolute inset-x-0 bottom-0 px-2 pb-2 pt-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-center">
                  <p className="text-[10px] tracking-wide uppercase text-white/70">
                    {m.role}
                  </p>
                  <p className="text-sm font-semibold text-white leading-tight">
                    {m.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


          <div className='hidden md:flex justify-between mt-20'>
            {/* 1 */}
            <div className='group relative cursor-pointer'>
              <img src={img1} alt='' className='h-80 object-cover rounded-xl' />
              {/* overlay (uses your existing text block, just styled/positioned) */}
              <div className='pointer-events-none absolute inset-0  rounded-xl 
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0  '/>
              <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
                <div className='text-white '>
                  <p className='text-xs uppercase tracking-wide text-white/80'>CEO</p>
                  <p className='text-lg font-semibold'>sahil Khan</p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className='py-20 group relative cursor-pointer'>
              <img src={img2} alt='' className='h-80 object-cover rounded-xl' />
              <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
              <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
                <div className='text-white'>
                  <p className='text-xs uppercase tracking-wide text-white/80'>CTO</p>
                  <p className='text-lg font-semibold'>Aisha Khan</p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className='group relative cursor-pointer'>
              <img src={img3} alt='' className='h-80 object-cover rounded-xl' />
              <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
              <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
                <div className='text-white'>
                  <p className='text-xs uppercase tracking-wide text-white/80'>Marketing Head</p>
                  <p className='text-lg font-semibold'>Vikram Singh</p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className='py-20 group relative cursor-pointer'>
              <img src={img4} alt='' className='h-80 object-cover rounded-xl' />
              <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
              <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
                <div className='text-white'>
                  <p className='text-xs uppercase tracking-wide text-white/80'>Product Lead</p>
                  <p className='text-lg font-semibold'>Priya</p>
                </div>
              </div>
            </div>

            {/* 5 */} 
            <div className='group relative cursor-pointer'>
              <img src={img5} alt='' className='h-80 object-cover rounded-xl' />
              <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
              <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
                <div className='text-white'>
                  <p className='text-xs uppercase tracking-wide text-white/80'>Design Lead</p>
                  <p className='text-lg font-semibold'>Rohit Verma</p>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div  className='py-10 group relative cursor-pointer'>
              <img src={img6} alt='' className='h-80 object-cover rounded-xl' />
              <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
              <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
                <div className='text-white'>
                  <p className='text-xs uppercase tracking-wide text-white/80'>Engineering Manager</p>
                  <p className='text-lg font-semibold'>Neha Gupta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam