import React, { useState } from "react"; // added useState
import "./ProductsTimeline.css";
import AdsAstraTimeline from "../tools/adsastra/AdsAstraTimeline";

const products = new Array(11).fill({
  title: "Ads-astra",
  desc: "Learn about your users",
});

const ProductsTimeline = () => {
  const [showAdsstraTimeline, setShowAdsstraTimeline] = useState(false); // new state

  const handleCardClick = () => {
    setShowAdsstraTimeline(true);
  };

  const handleClose = () => {
    setShowAdsstraTimeline(false);
  };

  return (
    <div className="products-timeline-container">
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

      <div className="products-timeline-cards">
        <div className="products-row products-top-row">
          {products.slice(0, 4).map((p, i) => (
            <div
              key={i}
              className="products-card"
              onClick={handleCardClick}
              style={{ cursor: "pointer" }}
            >
              <div className="icon w-10 h-10">
                <img
                  src="/image.png"
                  alt="Bar Chart Icon"
                  className="w-full h-full object-contain"
                />
              </div>              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="products-row products-bottom-row">
          {products.slice(4, 11).map((p, i) => (
            <div key={i} className="products-card">
              <div className="icon w-10 h-10">
                <img
                  src="/image.png"
                  alt="Bar Chart Icon"
                  className="w-full h-full object-contain"
                />
              </div>              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {showAdsstraTimeline && (
        <div className={`adsstra-timeline-container ${showAdsstraTimeline ? "fade-in" : ""}`} style={{ marginTop: "75px" }}>
          <AdsAstraTimeline />
        </div>
      )}

    </div>
  );
};

export default ProductsTimeline;
