import React from "react";

import { Box } from "@mui/material";
import Header from "./components/home/header/Header";
import Hero from "./components/home/Hero";
import Svg from "./components/home/header/Svg";
import ProductsTimeline from "./components/home/header/ProductsTimeline";
import AdsAstraTimeline from "./components/home/AdsAstraTimeline";
import DataVerseSection from "./components/home/DataVerseSection";
import Always from "./components/home/Always";
import Footer from "./components/home/header/Footer";
// import ProductsTimeline from "./components/home/header/ProductsTimeline";

function App() {
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "white",
        fontFamily: "sans-serif",
        background: "radial-gradient(circle at top left, #00103b, #000)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          // backgroundImage:
          //   "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          pointerEvents: "none",
        },
      }}
    >
      <Header />
      <Hero />
      <Svg />
      <ProductsTimeline/>
      <AdsAstraTimeline/>
      <DataVerseSection/>
      <Always/>
      <Footer/>
    </Box>
  );
}

export default App;
