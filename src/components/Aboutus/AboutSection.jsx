// import React from "react";
// import { Box } from "@mui/material";

// function AboutSection() {

//   const CenterText = ({ children, className = "" }) => (
//     <div className={`flex items-center justify-center text-center ${className}`}>
//       {children}
//     </div>
//   );

//   return (
//     <>
//       <Box className="flex flex-col w-[1248px] h-auto pb-5 ml-[96px]">

//         {/* Badge */}
//         <CenterText className="font-inter font-normal text-[14px] leading-[20px] tracking-normal 
//           border-2 border-[#3B82F64D] py-2 rounded-full w-38 ml-[540px] text-[#60A5FA]">
//           About Anslation
//         </CenterText>

//         {/* Heading */}
//         <CenterText className="font-helvetica font-medium text-[60px] leading-[60px] tracking-normal pt-[16px] pb-5">
//           Who We Are
//         </CenterText>

//         {/* Subheading */}
//         <CenterText className="font-helvetica font-normal text-[20px] leading-[28px] tracking-normal">
//           Empowering Businesses with Innovative Software Solutions
//         </CenterText>

//       </Box>
//     </>
//   );
// }

// export default AboutSection;





import React from "react";
import { Box, Typography } from "@mui/material";

const SparkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#60A5FA"
    strokeWidth="2.8"
    strokeLinecap="round"
  >
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M4.2 4.2l15.6 15.6" />
    <path d="M4.2 19.8l15.6-15.6" />
  </svg>
);

function AboutSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "1248px",
        pt: "50px",
        pb: "20px",
        ml: "125px",
        fontFamily: `"Helvetica Neue" sans-serif`,
      }}
    >
      {/* Badge */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #3B82F64D",
          borderRadius: "999px",
          width: "175px",
          py: "8px",
          ml: "540px",
          gap: "6px",
          color: "#60A5FA",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
        }}
      >
        <SparkIcon />
        About Anslation
      </Box>

      {/* Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "60px",
          fontWeight: 500,
          lineHeight: "60px",
          pt: "16px",
          pb: "20px",
          fontFamily: `"Helvetica Neue" sans-serif`,
        }}
      >
        Who We Are
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "28px",
          fontFamily:`"Helvetica Neue" sans-serif`,
        }}
      >
        Empowering Businesses with Innovative Software Solutions
      </Typography>
    </Box>
  );
}

export default AboutSection;
