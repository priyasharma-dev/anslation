
import React, { useState } from "react";
import "./ProductsTimeline.css";
import AdsAstraTimeline from "../tools/adsastra/AdsAstraTimeline";
import Gradiant, { GlowWaveBackground } from "../../../gradient/gradiant";
import { motion } from "framer-motion";

const products = new Array(11).fill({
  title: "Ads-astra",
  desc: "Learn about your users",
});




const ProductsTimeline = () => {
  const [showAdsstraTimeline, setShowAdsstraTimeline] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    setClickedIndex(index);
    setShowAdsstraTimeline(true);
  };

  const handleClose = () => {
    setShowAdsstraTimeline(false);
    setClickedIndex(null);
  };


 


  

  return (

    <motion.div className="relative z-0 overflow-hidden"
    style={{
      background: "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0,81,255,0.48) 49.04%, rgba(0,111,255,0) 100%)",
    }}
    >
      <div>
        <GlowWaveBackground/>
      </div>

    {/* Background SVG Pattern - Lower Layer */}
    <svg
      className='absolute inset-0 w-full h-full'
      style={{ zIndex: 1 }}
      viewBox='0 0 500 500'
      preserveAspectRatio='xMidYMid slice'
    >
      <defs>
        <pattern id='gridPattern' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'>
          <line x1='50' y1='0' x2='50' y2='50' stroke='#fff' strokeWidth='0.5' opacity='0.15' />
          <line x1='0' y1='50' x2='50' y2='50' stroke='#fff' strokeWidth='0.5' opacity='0.15' />
        </pattern>
        <linearGradient id='bgGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='100%' stopColor='#000000' stopOpacity='1' />
        </linearGradient>
      </defs>
      <rect width='500' height='500' fill='url(#gridPattern)' />
    </svg>
  
    {/* Content Layer - Upper Layer */}
    <div className="products-timeline-container relative" style={{ zIndex: 10 }}>
      <h2 className="products-timeline-title">Products</h2>
      
      <svg
        className="products-timeline-svg"
        width="1307"
        height="516"
        viewBox="0 0 1307 516"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M654.5 0C654.776 0 655 0.223858 655 0.5V28C655 43.464 642.464 56 627 56H41C18.9086 56 1 73.9086 1 96V225C1 247.091 18.9086 265 41 265H1267C1289.09 265 1307 282.909 1307 305V437C1307 459.091 1289.09 477 1267 477H673.5C662.73 477 654 485.73 654 496.5V515.5C654 515.776 653.776 516 653.5 516C653.224 516 653 515.776 653 515.5V496C653 484.954 661.954 476 673 476H1266C1288.09 476 1306 458.091 1306 436V306C1306 283.909 1288.09 266 1266 266H40C17.9086 266 0 248.091 0 226V95C0 72.9086 17.9086 55 40 55H626.5C641.688 55 654 42.6878 654 27.5V0.5C654 0.223858 654.224 0 654.5 0Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
  
      {/* Product Cards - Highest Layer */}
      <div className="products-timeline-cards" style={{ position: 'relative', zIndex: 20 }}>
        <div className="products-row products-top-row">
          {products.slice(0, 4).map((p, i) => (
            <div
              key={i}
              className={`products-card ${clickedIndex === i ? "active" : ""}`}
              onClick={() => handleCardClick(i)}
              style={{ position: 'relative', zIndex: 30 }}
            >
              <div className="icon w-10 h-10">
                <img
                  src="/image.png"
                  alt="Bar Chart Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              {clickedIndex === i && (
                <div className="line-connector top-row"></div>
              )}
            </div>
          ))}
        </div>
  
        <div className="products-row products-bottom-row">
          {products.slice(4, 11).map((p, i) => (
            <div
              key={i}
              className={`products-card ${clickedIndex === i + 4 ? "active" : ""}`}
              onClick={() => handleCardClick(i + 4)}
              style={{ position: 'relative', zIndex: 30 }}
            >
              <div className="icon w-10 h-10">
                <img
                  src="/image.png"
                  alt="Bar Chart Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              {clickedIndex === i + 4 && (
                <div className="line-connector bottom-row"></div>
              )}
            </div>
          ))}
        </div>
      </div>
  
      {showAdsstraTimeline && (
        <div
          className={`adsstra-timeline-container ${showAdsstraTimeline ? "fade-in" : ""}`}
          style={{ marginTop: "75px", position: 'relative', zIndex: 20 }}
        >
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              zIndex: "1000",
            }}
          >
            Close
          </button>
          <AdsAstraTimeline />
        </div>
      )}
    </div>
  </motion.div>
  );
};

export default ProductsTimeline;
