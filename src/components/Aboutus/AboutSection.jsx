import React from "react";
import { Box } from "@mui/material";

function AboutSection() {

  const CenterText = ({ children, className = "" }) => (
    <div className={`flex items-center justify-center text-center ${className}`}>
      {children}
    </div>
  );

  return (
    <>
      <Box className="flex flex-col w-[1248px] h-auto pb-5 ml-[96px]">

        {/* Badge */}
        <CenterText className="font-inter font-normal text-[14px] leading-[20px] tracking-normal 
          border-2 border-[#3B82F64D] py-2 rounded-full w-38 ml-[540px] text-[#60A5FA]">
          About Anslation
        </CenterText>

        {/* Heading */}
        <CenterText className="font-helvetica font-medium text-[60px] leading-[60px] tracking-normal pt-[16px] pb-5">
          Who We Are
        </CenterText>

        {/* Subheading */}
        <CenterText className="font-helvetica font-normal text-[20px] leading-[28px] tracking-normal">
          Empowering Businesses with Innovative Software Solutions
        </CenterText>

      </Box>
    </>
  );
}

export default AboutSection;
