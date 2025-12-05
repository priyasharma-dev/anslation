import React from "react";
import { Box } from "@mui/material";

export function Ellipse81() {
  return (
    <Box
      sx={{
        position: "absolute",
         width: "max(1600px, 120vw)",
        height: "max(1200px, 90vh)",
        left: "50%",
        top: "-80vh",
        transform: "translateX(-50%)",
        background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
        opacity: 0.4,
        filter: "blur(37.2px)",
       borderRadius: "9999px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export function Rectangle82() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "909.38px",
        height: "112.86px",
        left: "951px",// shifted from left to right for responsiveness
        top: "61.71px",
        background:
          "linear-gradient(90deg, rgba(2, 34, 71, 0.65) 0%, #043AAD 100%)",
        filter: "blur(40.45px)",
        borderRadius: "20px",
        transform: "rotate(-33.3deg)",
        zIndex: 0,
      }}
    />
  );
}

export function Rectangle83() {
  return (
    <Box
        sx={{
        position: "absolute",
        width: "909.38px",
        height: "112.86px",
        left: "1051px",// shifted from left to right for responsiveness
        top: "201.71px",
        background:
          "linear-gradient(90deg, rgba(2, 34, 71, 0.65) 0%, #043AAD 100%)",
        filter: "blur(60.45px)",
        borderRadius: "20px",
        transform: "rotate(-33.3deg)",
        zIndex: 0,
      }}
    />
  );
}

export function Ellipse82() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "2038px",
        height: "1509px",
        left: "calc(50% - 2038px/2 + 44px)",
        top: "470px",
        background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
        opacity: 0.4,
        filter: "blur(37.2px)",
        zIndex: 0,
      }}
    />
  );
}