import React from 'react'
import objectpng from "../../../src/assets/OBJECTS.png"
import { motion } from "framer-motion";
import { Box } from '@mui/material';

function AboutSection() {
  return (
   
    <>

<div className="flex flex-col w-[1248px] h-auto  pb-5  ml-[96px]">

<div className="font-inter  font-normal text-[14px] leading-[20px] tracking-normal  flex items-center justify-center  text-center  border-2 border-[#3B82F64D]  py-2 rounded-full w-38 ml-[540px] text-[#60A5FA] ">   
        About Anslation
    </div>


     <div className="font-helvetica font-medium text-[60px] leading-[60px] tracking-normal text-center flex items-center justify-center pt-[16px] pb-5">
      Who We Are
    </div>

    <div className="font-helvetica font-normal text-[20px] leading-[28px] tracking-normal text-center flex items-center justify-center ">
      Empowering Businesses with Innovative Software Solutions
    </div>





</div>


    </>

  )
}

export default AboutSection