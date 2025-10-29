import React, { useState } from "react";
import "./AdsAstraTimeline.css";
import DataVerseSection from "../../dataverse/DataVerseSection";

const products = new Array(11).fill({
  title: "DataVerse",
  desc: "Learn about your users",
});

const AdsAstraTimeline = () => {
  const [showDataVerseTimeline, setShowDataVerseTimeline] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    setClickedIndex(index);
    setShowDataVerseTimeline(prev => !prev);
  };

 

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">
        Ads-astra <br />
        <span className="timeline-subtitle">Learn about your users</span>
      </h2>

      {/* SVG background */}
      <svg
        className="timeline-svg"
        width="1307"
        height="516"
        viewBox="0 0 1307 516"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M654.5 0C654.776 0 655 0.223858 655 0.5V28C655 43.464 642.464 56 627 56H41C18.9086 56 1 73.9086 1 96V225C1 247.091 18.9086 265 41 265H1267C1289.09 265 1307 282.909 1307 305V437C1307 459.091 1289.09 477 1267 477H673.5C662.73 477 654 485.73 654 496.5V515.5C654 515.776 653.776 516 653.5 516C653.224 516 653 515.776 653 515.5V496C653 484.954 661.954 476 673 476H1266C1288.09 476 1306 458.091 1306 436V306C1306 283.909 1288.09 266 1266 266H40C17.9086 266 8.05429e-07 248.091 0 226V95C8.05325e-07 72.9086 17.9086 55 40 55H626.5C641.688 55 654 42.6878 654 27.5V0.5C654 0.223858 654.224 0 654.5 0Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Cards inside path */}
      <div className="timeline-cards">
        {/* Top row: 4 cards */}
        <div className="row top-row">
          {products.slice(0, 4).map((p, i) => (
            <div key={i} 
            className={`product-card ${clickedIndex === i ? "active" : ""}`}
            onClick={() => handleCardClick(i)}
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

        {/* Bottom row: 7 cards */}
        <div className="row bottom-row">
          {products.slice(4, 11).map((p, i) => (
            <div
              key={i}
              className={`products-card ${
                clickedIndex === i + 4 ? "active" : ""
              }`}
              onClick={() => handleCardClick(i + 4)}
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
                <div className="line-connector bottom-row"  ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Show DataVerse timeline when clicked */}
      {showDataVerseTimeline && (
        <div
          className={`data-verse-timeline-container ${showDataVerseTimeline ? "fade-in" : ""
            }`}
          style={{ marginTop: "75px" }}
        >
          <DataVerseSection />
        </div>
      )}
    </div>
  );
};

export default AdsAstraTimeline;
