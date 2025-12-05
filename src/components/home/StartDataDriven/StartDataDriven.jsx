// src/components/home/StartDataDriven/StartDataDriven.jsx
import React from "react";
import "./StartDataDriven.css";

const StartDataDriven = () => {
  return (
    <section className="sd-section" id="start-data-cta">
      <div className="sd-inner">
        <h2 className="sd-title">Start Making Data-Driven Decisions</h2>

        <p className="sd-subtitle">
          See how our analytics platform can transform your business intelligence
        </p>

        <div className="sd-actions">
          <button className="sd-btn sd-btn-primary">Schedule Demo</button>

          <button className="sd-btn sd-btn-outline">
            <span>Get Started</span>
            <span className="sd-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartDataDriven;
