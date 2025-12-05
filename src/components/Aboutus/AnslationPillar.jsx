import React from 'react'
import anslation from "../../assets/Group 79.png"
import { motion } from 'framer-motion'
import { Typography } from '@mui/material';


function AnslationPillar() {
    
    return (
   
<>




{/* <div
  className="flex flex-col w-[1248px] h-auto rounded-2xl p-12 mt-[5px] ml-[145px] bg-gradient-to-r from-[#1771E4] to-[#24C2E4]"

>
  
     <div class="flex items-center justify-center h-auto mt-0">
  <Typography class="font-['Helvetica_Neue'] font-medium text-[36px] leading-[40px] tracking-normal text-white text-center">
    Our Mission
  </Typography>
</div>

      <div class="flex items-center justify-center h-[auto]">
  <Typography class="font-['Helvetica_Neue'] font-medium text-[18px] leading-[28px] tracking-normal text-white text-center">
    To empower businesses by delivering intelligent, scalable software solutions that fuel growth, enhance
    <br/>
efficiency, and foster innovation.
  </Typography>
</div>
 

</div> */}

  <div className=" flex items-center justify-center ml-44  mt-0 relative w-[1200px] h-[210px] rounded-xl overflow-hidden ">
      
      {/* Moving border animation */}
      <motion.div
        className="absolute -inset-[10px] rounded-2xl"
  style={{
    background: "conic-gradient(from 315deg, transparent 0deg, transparent 85deg, #ffffff 120deg, transparent 160deg, transparent 360deg)"
  }}
  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 10,
    ease: "linear"
  }}
      />

      {/* Box content */}
      <div className="absolute inset-[2px] rounded-2xl  bg-gradient-to-r from-[#1771E4] to-[#24C2E4] flex justify-center items-center " >
        <Typography class="font-['Helvetica_Neue'] font-medium text-[36px] leading-[40px] tracking-normal text-white text-center mb-16">
    Our Mission
  </Typography>
</div>

      <div class=" absolute    flex items-center justify-center mt-24">
  <Typography class="font-['Helvetica_Neue'] font-medium text-[18px] leading-[28px] tracking-normal text-white text-center mb-8">
    To empower businesses by delivering intelligent, scalable software solutions that fuel growth, enhance
    <br/>
efficiency, and foster innovation.
  </Typography>
</div>
 
      </div>
   





</>


    )
}

export default AnslationPillar
