import React, { useMemo } from "react";
import { motion } from "framer-motion";

const CENTER = { x: 50, y: 50 }; // viewBox coordinates (0–100)
const TARGETS = [
  { x: 10, y: 10 },  { x: 50, y: 10 },  { x: 90, y: 10 },
  { x: 10, y: 33 },  { x: 90, y: 33 },
  { x: 10, y: 56 },  { x: 90, y: 56 },
  { x: 10, y: 85 },  { x: 50, y: 88 },  { x: 90, y: 85 },
];

function curve(C, T, bend = 10) {
  const mx = (C.x + T.x) / 2;
  const my = (C.y + T.y) / 2;
  const dx = T.x - C.x;
  const dy = T.y - C.y;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len; // perpendicular unit
  const py = dx / len;
  const qx = mx + px * bend;
  const qy = my + py * bend;
  return `M ${C.x} ${C.y} Q ${qx} ${qy} ${T.x} ${T.y}`;
}

export default function RaysCurvedArc() {
  const paths = useMemo(() => TARGETS.map((t) => curve(CENTER, t, 10)), []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ zIndex: 1 }}
    >
      <defs>
        {/* Bright blue gradient using border-blue-500 colors */}
        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" /> {/* border-blue-500 */}
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" /> {/* border-blue-400 */}
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" /> {/* border-blue-500 */}
        </linearGradient>

        {/* Simple glow filter without blur */}
        <filter id="brightGlow">
          <feComponentTransfer>
            <feFuncA type="linear" slope="1.5" /> {/* Increase brightness */}
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="SourceGraphic" /> {/* Double the line for brightness */}
          </feMerge>
        </filter>
      </defs>

      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#rayGradient)"
          strokeWidth={0.5} 
          fill="none"
          filter="url(#brightGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 0.9 + i * 0.08,
            duration: 0.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
          style={{
            opacity: 1, // Force full opacity
          }}
        />
      ))}
    </svg>
  );
}


