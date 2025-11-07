import React from "react";
import clsx from "clsx";

/**
 * Panel Component
 * A lightweight wrapper for cards or containers with consistent Anslation styling.
 * Accepts children and forwards className for custom styling.
 */

export default function Panel({ children, className = "", glow = false }) {
  return (
    <div
      className={clsx(
        "relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur",
        glow && "shadow-[0_0_40px_-10px_rgba(0,123,255,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
}
