
import React from "react";
import "./OurProducts.css";
import AdsAstraLogo from "../../../assets/icons/ads astra logo.svg";


export default function OurProducts() {
  const products = Array(7).fill({
    title: "Ads-astra",
    subtitle: "Data-driven and data",
  });

  return (
    <section className="op-section">
      <div className="op-heading-wrap">
        <h2 className="op-heading">Our Products</h2>
        <p className="op-subtitle">
          Enterprise solutions built for scale and performance
        </p>
      </div>

      <div className="op-grid">
        {/* top row */}
        <div className="op-row op-row-top">
          {products.slice(0, 4).map((item, i) => (
            <DiamondCard key={i} item={item} />
          ))}
        </div>

        {/* bottom row */}
        <div className="op-row op-row-bottom">
          {products.slice(4).map((item, i) => (
            <DiamondCard key={i + 4} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiamondCard({ item }) {
  return (
    <div className="op-diamond">
      <div className="op-diamond-inner" />
      <div className="op-diamond-content">
        <div className="op-icon-wrap">
          <div> 
              <img
              src={AdsAstraLogo}
              alt="Ads-astra logo"
              className="op-icon"
            />
          </div>
        </div>
        <h3 className="op-card-title">{item.title}</h3>
        <p className="op-card-subtitle">{item.subtitle}</p>
      </div>
    </div>
  );
}
