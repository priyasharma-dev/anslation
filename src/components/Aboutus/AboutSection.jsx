import React from "react";
import { Box, Typography } from "@mui/material";

const SparkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#60A5FA"
    strokeWidth="2.2"
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
       
        py: { xs: "40px", sm: "50px", md: "60px", lg: "65px", xl: "70px" },

        fontFamily: `"Helvetica Neue", sans-serif`,
      }}
    >
      <Box
        sx={{
          maxWidth: "1248px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid rgba(59,130,246,0.3)",
            borderRadius: "40px",
            width: "139px",
            py: "7px",
            gap: "6px",
            color: "#60A5FA",
            fontWeight: 500,
            backdropFilter: "blur(4px)",
            fontSize: "clamp(13px, 1.25vw, 16px)",
            "@media (min-width: 2200px)": {
              fontSize: "20px",
            },
          }}
        >
          <SparkIcon />
          About Anslation
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "white",
            mt: "24px",
            fontSize: "clamp(38px, 4.5vw, 70px)",
            lineHeight: "clamp(46px, 4.9vw, 78px)",
            "@media (min-width: 2200px)": {
              fontSize: "90px",
              lineHeight: "98px",
            },
          }}
        >
          Who We Are
        </Typography>

        {/* Sub Text */}
        <Typography
          sx={{
            textAlign: "center",
            width: "750px",
            maxWidth: "90%",
            fontWeight: 400,
            color: "#D1D5DB",
            mt: "10px",
            fontSize: "clamp(16px, 1.5vw, 24px)",
            lineHeight: "clamp(24px, 2vw, 34px)",
            "@media (min-width: 2200px)": {
              fontSize: "30px",
              lineHeight: "38px",
            },
          }}
        >
          Empowering Businesses with Innovative Software Solutions
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutSection;

