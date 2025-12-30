import React from "react";
import { Box, Typography } from "@mui/material";
import AiPoweredIcon from "../../../assets/icons/AiPowered.svg";

const AiPowered = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      {/* Pill */}
      <Box
        sx={{
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          px: 3,
          py: 0.8,
          borderRadius: 999,
          backgroundColor: "#111E3D",
          border: "1px solid rgba(0, 120, 255, 0.6)",
        }}
      >
        <Box
          component="img"
          src={AiPoweredIcon}
          alt="AI Powered"
          sx={{ width: 18, height: 18 }}
        />

        <Typography
          variant="body2"
          sx={{
            color: "#61A6FB",
            fontSize: "12px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            lineHeight: "16px",
            whiteSpace: "nowrap",
          }}
        >
          AI-Powered Marketing Solutions
        </Typography>
      </Box>
    </Box>
  );
};

export default AiPowered;
