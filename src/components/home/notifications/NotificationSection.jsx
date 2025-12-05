import React from "react";
import "./NotificationSection.css";

const NotificationsSection = () => {
  return (
    <section className="nt-section">
      <div className="nt-card">
        {/* close icon in corner */}
        <button className="nt-close" aria-label="Close">
          ✕
        </button>

        <div className="nt-content">
          {/* LEFT SIDE */}
          <div className="nt-left">
            <h2 className="nt-title">Notifications or Alerts</h2>

            <ul className="nt-list">
              <li>
                Critical alerts (e.g., lab results flagged, patient emergencies).
              </li>
              <li>
                System reminders (e.g., &quot;Follow-up overdue for Patient X&quot;).
              </li>
            </ul>

            <div className="nt-chips">
              <span className="nt-chip">
                Critical alerts in red to take quick action
              </span>
              <span className="nt-chip">Collapsable reminders</span>
              <span className="nt-chip">
                Use arrow to see more alerts and reminders
              </span>
            </div>

            <div className="nt-actions">
              <button className="nt-btn nt-btn-primary">
                Go to Data verse
              </button>
              <button className="nt-btn nt-btn-outline">Go Back</button>
            </div>
          </div>

          {/* RIGHT SIDE – mock cards */}
          <div className="nt-right">
            <div className="nt-alert-card nt-alert-main">
              <div className="nt-alert-header">Critical alerts</div>

              <div className="nt-alert-row">
                <span className="nt-dot" />
                <span className="nt-alert-label">Emergencies alert</span>
                <span className="nt-alert-pill" />
              </div>

              <div className="nt-alert-row">
                <span className="nt-dot" />
                <span className="nt-alert-label">Emergencies alert</span>
                <span className="nt-alert-pill" />
              </div>

              <div className="nt-alert-row">
                <span className="nt-dot" />
                <span className="nt-alert-label">Emergencies alert</span>
                <span className="nt-alert-pill" />
              </div>
            </div>

            <div className="nt-alert-card nt-alert-secondary">
              <div className="nt-alert-header">Data to be replaced</div>

              {["Follow-up overdue", "Follow-up overdue", "Follow-up overdue"].map(
                (text, i) => (
                  <div key={i} className="nt-alert-row nt-row-compact">
                    <button className="nt-mini-close" aria-label="Dismiss">
                      ✕
                    </button>
                    <span className="nt-alert-label">{text}</span>
                    <span className="nt-alert-pill" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
