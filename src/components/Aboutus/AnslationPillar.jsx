import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

function AnslationPillar() {
  return (
    <div className="flex items-center justify-center ml-44 mt-0 relative w-[1200px] h-[210px] rounded-xl overflow-hidden">

      {/* Border animation */}
      <motion.div
        className="absolute -inset-[10px] rounded-2xl"
        style={{
          background:
            "conic-gradient(from 315deg, transparent 0deg, transparent 85deg, #ffffff 120deg, transparent 160deg, transparent 360deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      {/* Gradient background */}
      <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-r from-[#1771E4] to-[#24C2E4]" />

      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "36px",
          lineHeight: "40px",
          textAlign: "center",
          color: "#fff",
        }}
        className="absolute top-10  w-full"
      >
        Our Mission
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "28px",
          textAlign: "center",
          color: "#fff",
        }}
        className="absolute bottom-16  w-full"
      >
        To empower businesses by delivering intelligent, scalable software solutions
        <br />
        that fuel growth, enhance efficiency, and foster innovation.
      </Typography>

    </div>
  );
}

export default AnslationPillar;
