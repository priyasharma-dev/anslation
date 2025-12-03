import React,{useEffect, useState} from "react";
import { Box } from "@mui/material";
// import Header from "../components/home/header/Header";
import Hero from "../components/home/hero/Hero";
import { useLocation, useNavigate } from "react-router-dom";
// import Svg from "../components/home/exploresvg/Svg";
// import AiPowered from "../components/home/Ai/AiPowered";
import  HeroCardsSection from "../components/home/newSvg/HeroCardsSection";
// import Always from "../components/home/stayupdate/Always";
import { Ellipse81, Ellipse82, Rectangle82, Rectangle83 } from "../gradient/gradienttop";
// import Footer from "../components/home/footer/Footer";
import OurProducts from "../components/home/ourproducts/OurProducts"; 


function Home() {
  const [showProducts, setShowProducts] = useState(false);
  const location=useLocation();
  const navigate=useNavigate();
  
 useEffect(() => {
    // if Header sent us here with openProducts: true
    if (location.state?.openProducts) {
      setShowProducts(true);

      // scroll AFTER OurProducts is rendered
      setTimeout(() => {
        const el = document.getElementById("our-products");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);

      // optional: clear the state so refresh/back doesn't re-trigger
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative", 
        // overflow: "hidden",
        width:"100%"
      }}
    >
    

      <Hero />
      {/* <AiPowered/> */}
      {/* <HeroCardsSection/> */}
      {/* <Svg /> */}
       {/* Our Products section on home page */}
       {showProducts && (
        <div id="our-products">
          <OurProducts />
        </div>
      )}
    </Box>
  );
}

export default Home;
