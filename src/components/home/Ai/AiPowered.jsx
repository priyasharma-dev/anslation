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
      {/* If you need the glow back, uncomment and adjust */}
      {/* <Box
        sx={{
          position: "absolute",
          top: "-160%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 900, md: 1500 },
          height: { xs: 550, md: 900 },
          borderRadius: "2038px",
          opacity: 0.4,
          background:
            "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
          filter: "blur(37px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      /> */}

      {/* Pill */}
      <Box
        sx={{
          // ❗ no absolute here – let Hero control positioning
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          px: 3,
          py: 0.8,
          borderRadius: 999,
          background: "rgba(0, 15, 40, 0.85)",
          border: "1px solid rgba(0, 120, 255, 0.6)",
          // boxShadow: "0 0 18px rgba(0, 120, 255, 0.7)",
          // backdropFilter: "blur(8px)",
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
