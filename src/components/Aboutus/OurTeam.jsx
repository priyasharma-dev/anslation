import React from 'react'
import img1 from "../../assets/our-team1-2.png"
import img2 from '../../assets/our-team1-3.png'
import img3 from "../../assets/our-team1-4.png"
import img4 from '../../assets/our-team1-5.png'
import img5 from '../../assets/our-team1-6.png'
import img6 from '../../assets/our-team1.png'

function OurTeam() {
  return (
    <>
    <div className='mt-50 container  max-w-7xl mx-auto ' style={{
           
           background:
             "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
          }}  >
        <div className='' >
            <h2 className='text-center text-4xl font-bold' >Our Team</h2>
            <p className='mx-auto w-md text-justify my-4 '>Our leadership team brings a wealth of experience, innovation, and passion to Anslation. Together, they lead us in transforming technology to drive business success</p>
        </div>
        <div className='flex justify-between  mt-20' >
            <div>
                <img src={img1} alt="" srcset="" className='h-80  ' />
            </div>
            <div className='py-20' >
            <img src={img2} alt="" srcset="" className='h-80' />
            </div>
            <div>
            <img src={img3} alt="" srcset="" className='h-80' />
            </div>
            <div className='py-20' >
            <img src={img4} alt="" srcset="" className='h-80' />
            </div>
            <div>
            <img src={img5} alt="" srcset="" className='h-80' />
            </div>
            <div className='py-20' >
            <img src={img6} alt="" srcset="" className='h-80' />
            </div>
        </div>
    </div>
    </>
  )
}

export default OurTeam