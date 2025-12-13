import React from 'react'
import CareerPage from '../components/Career/CareerPage'
import CareerGrowth from '../components/Career/CareerGrowth'  


function Career() {
  return (
    <div>
        {/* <div className='relative -z-0'>
          <div className='absolute top-[-130px] z-0 pointer-events-none ' style={{ background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
        opacity: 0.2,
        filter: "blur(1px)"}}>
     
           
          </div> */}
        <CareerPage/>
        <CareerGrowth/>
        </div>
     
  
  )
}

export default Career