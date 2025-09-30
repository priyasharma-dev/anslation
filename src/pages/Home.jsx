import React from "react";
import { Box } from "@mui/material";
import Header from "../components/home/header/Header";
import Hero from "../components/home/hero/Hero";
import Svg from "../components/home/exploresvg/Svg";
import Always from "../components/home/stayupdate/Always";
import { Ellipse81 } from "../gradient/gradienttop";
import Footer from "../components/home/footer/Footer";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        fontFamily: "sans-serif",
        background: "black",
        position: "relative", 
        overflow: "hidden",
        width:"90%"
      }}
    >
      {/* Background gradient */}
      <Ellipse81 />
      <Header />
      <Hero />
      <Svg />
      <Always />
      <Footer />
    </Box>
  );
}

export default Home;
