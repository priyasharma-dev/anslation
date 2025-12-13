// import React from "react";
// import { motion } from "framer-motion";
// import { Typography } from "@mui/material";

// function AnslationPillar() {
//   return (
//     <div className="flex items-center justify-center ml-44 mt-25 relative w-[1200px] h-[210px] rounded-xl overflow-hidden">

//       {/* Border animation */}
//       <motion.div
//         className="absolute -inset-[10px] rounded-2xl"
//         style={{
//           background:
//             "conic-gradient(from 315deg, transparent 0deg, transparent 85deg, #ffffff 120deg, transparent 160deg, transparent 360deg)",
//         }}
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//       />

//       {/* Gradient background */}
//       <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-r from-[#1771E4] to-[#24C2E4]" />

//       {/* Title */}
//       <Typography
//         sx={{
//           fontFamily: "Helvetica Neue, sans-serif",
//           fontWeight: 500,
//           fontSize: "36px",
//           lineHeight: "40px",
//           textAlign: "center",
//           color: "#fff",
//         }}
//         className="absolute top-10  w-full"
//       >
//         Our Mission
//       </Typography>

//       {/* Description */}
//       <Typography
//         sx={{
//           fontFamily: "Helvetica Neue, sans-serif",
//           fontWeight: 500,
//           fontSize: "18px",
//           lineHeight: "28px",
//           textAlign: "center",
//           color: "#fff",
//         }}
//         className="absolute bottom-16  w-full"
//       >
//         To empower businesses by delivering intelligent, scalable software solutions
      
//         that fuel growth, enhance  <br /> efficiency, and foster innovation.
//       </Typography>

//     </div>
//   );
// }

// export default AnslationPillar;





import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

function AnslationPillar() {
  return (
    <div
      className="
        relative
        flex flex-col items-center justify-center
        w-[90vw] max-w-[1250px]
        h-[275px]
        mx-auto mt-[70px]
        rounded-[28px] overflow-hidden
        text-center select-none
      "
    >
      {/* BORDER SHINE ROTATION */}
      <motion.div
        className="absolute -inset-[10px] rounded-[20px]"
        style={{
          background:
            "conic-gradient(from 315deg, transparent 0deg, transparent 85deg, #ffffff 120deg, transparent 160deg, transparent 360deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      {/* BLUE GRADIENT BACKGROUND */}
      <div className="absolute inset-[6px] rounded-[28px] bg-gradient-to-r from-[#1771E4] to-[#24C2E4]" />
   

      {/* TEXT BLOCK — LOCKED SAME ON ALL SCREENS */}
      <div className="relative z-10 flex flex-col items-center gap-[18px]">
        <Typography
          sx={{
            fontFamily: "Helvetica Neue, sans-serif",
            fontWeight: 600,
            fontSize: "38px",
            lineHeight: "46px",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          Our Mission
        </Typography>

        <Typography
          sx={{
            fontFamily: "Helvetica Neue, sans-serif",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "29px",
            color: "#fff",
            maxWidth: "900px", // line break control
          }}
        >
          To empower businesses by delivering intelligent, scalable software
          solutions that fuel growth, enhance efficiency, and foster innovation.
        </Typography>
      </div>
    </div>
  );
}

export default AnslationPillar;
