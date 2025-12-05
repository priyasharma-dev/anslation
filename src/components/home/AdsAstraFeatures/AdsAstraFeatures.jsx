import React, { useState, useRef } from "react";
import "./AdsAstraFeatures.css";
import AdsAstraLogo from "../../../assets/icons/ads astra logo.svg";
import NotificationsSection from "../notifications/NotificationSection";

const FEATURES = [
  { title: "Creatives",
    description:
      "Dynamic ad creative generation with AI-powered optimization for maximum engagement and conversion.",
  },
  { title: "Geofences",
    description:
      "Precise location-based advertising to target users in specific geographic areas with tailored campaigns.",
  },
  { title: "Exchanges",
    description:
      "Real-time bidding across premium ad exchanges with intelligent budget allocation and optimization.",
  },
  { title: "Databases",
    description:
      "Unified data warehouses integrating customer insights, campaign metrics, and behavioral analytics.",
  },
  { title: "Dashboards",
    description:
      "Comprehensive analytics dashboards with real-time performance tracking and actionable insights.",
  },
  { title: "Audiences",
    description:
      "Advanced audience segmentation using machine learning to identify high-value customer profiles.",
  },
];

export default function AdsAstraFeatures() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRowRef = useRef(null);

  const handleFeatureClick = () => {
    if (!showNotifications) {
      setShowNotifications(true);
      setTimeout(() => {
        notificationRowRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 60);
    } else {
      notificationRowRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="aa-features-section" id="features">
      <div className="aa-features-inner">
        {/* Ads-astra header */}
        <div className="aa-product-header">
          <div className="aa-product-icon-box">
            <div className="aa-product-icon">
              <img
                src={AdsAstraLogo}
                alt="Ads-astra"
                className="aa-product-logo"
              />
            </div>
          </div>

          <div className="aa-product-text">
            <div className="aa-product-title">Ads-astra</div>
            <div className="aa-product-subtitle">Data-driven and data.</div>
          </div>
        </div>

        {/* Heading */}
        <div className="aa-features-heading-wrap">
          <h2 className="aa-features-heading">Features &amp; Capabilities</h2>
        </div>

        {/* Timeline – ONLY feature cards live here */}
        <div className="aa-features-timeline">
          {FEATURES.map((feature, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={feature.title}
                className={
                  "aa-features-row " +
                  (isLeft ? "aa-row-left" : "aa-row-right")
                }
              >
                {isLeft ? (
                  <>
                    <FeatureCard
                      feature={feature}
                      align="right"
                      onClick={handleFeatureClick}
                    />
                    <div className="aa-features-spacer" />
                  </>
                ) : (
                  <>
                    <div className="aa-features-spacer" />
                    <FeatureCard
                      feature={feature}
                      align="left"
                      onClick={handleFeatureClick}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Notifications block – separate card, no vertical line behind */}
        {showNotifications && (
          <div
            ref={notificationRowRef}
            className="aa-notification-row"
          >
            <div className="aa-notification-wrapper">
              <NotificationsSection />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeatureCard({ feature, align, onClick }) {
  return (
    <article
      className={
        "aa-feature-card " +
        (align === "right" ? "aa-card-right" : "aa-card-left")
      }
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="aa-feature-header">
        <div className="aa-feature-icon" />
        <h3 className="aa-feature-title">{feature.title}</h3>
      </div>

      <p className="aa-feature-desc">{feature.description}</p>
    </article>
  );
}
