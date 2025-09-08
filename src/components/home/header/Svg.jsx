import { Box } from "@mui/material";
import React from "react";

const Svg = () => {
  return (
    <Box
      sx={{
        display: "flex",           // make flexbox
        justifyContent: "center",  // center horizontally
        // alignItems: "center",      // center vertically (optional)
        // mt: 4,                     // margin-top spacing from Hero
      }}
    >
      <Box
        component="img"
        src="/svg/hero-divider.svg"
        alt="divider"
        sx={{
          width: "100%",   // control size
          maxWidth: "1400px", // optional max size
        }}
      />
    </Box>
  );
};

export default Svg;
