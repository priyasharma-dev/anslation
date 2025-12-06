// OurTeam.jsx
import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

/* ------------------- ICONS (Reusable Components) ------------------- */
const IconWrapper = ({ bg, children }) => (
  <div
    className="
      w-[48px] h-[48px] rounded-xl flex items-center justify-center 
      transition-all duration-500 opacity-90 group-hover:opacity-100
    "
    style={{ backgroundColor: bg }}
  >
    {children}
  </div>
);

/* ------------------- CARD DATA ------------------- */
const coreValues = [
  {
    id: "innovation",
    title: "Innovation",
    subtitle: "Pioneering the Future",
    desc:
      "We create innovative solutions that keep our clients ahead of the curve. We embrace new ideas, constantly evolving our products to meet the changing demands of the tech industry.",
    bg: "#FF6B00",
    icon: (
      <path
        d="M12 2a5 5 0 00-5 5c0 2.8 2 4.3 2 6.5A3 3 0 00112 19a3 3 0 003-5.5c0-2.2 2-3.7 2-6.5a5 5 0 00-5-5z"
        fill="white"
      />
    ),
  },
  {
    id: "integrity",
    title: "Integrity",
    subtitle: "Building Trust",
    desc:
      "We are committed to honesty and transparency in every interaction, ensuring our clients can rely on us to deliver solutions that meet their exact needs.",
    bg: "#19D3E6",
    icon: <path d="M12 2l7 4v6c0 5-4 9-7 10-3-1-7-5-7-10V6l7-4z" fill="white" />,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    subtitle: "Stronger Together",
    desc:
      "Teamwork is key to our success. We work closely with our clients to understand their challenges and create customized solutions that drive real impact.",
    bg: "#4A7DFD",
    icon: (
      <path
        d="M3 12h6l4 8 4-16h4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "customer",
    title: "Customer Focus",
    subtitle: "Focused on You",
    desc:
      "Our clients are at the heart of everything we do. We listen to feedback and prioritize satisfaction, making sure our solutions are always aligned with their needs.",
    bg: "#FF4F8B",
    icon: (
      <path
        d="M12 21s-6-4.35-9-7.5C1.8 10.9 4 6 8 6c1.8 0 3 1 4 1s2.2-1 4-1c4 0 6.2 4.9 5 7.5C18 16.65 12 21 12 21z"
        fill="white"
      />
    ),
  },
  {
    id: "sustainability",
    title: "Sustainability",
    subtitle: "Creating a Better Tomorrow",
    desc:
      "We are committed to creating eco-friendly solutions that reduce environmental impact. We focus on building energy-efficient, cloud-first products.",
    bg: "#2AC95F",
    icon: (
      <path
        d="M5 12a7 7 0 0114 0 9 9 0 01-9 9 9 9 0 01-4-1"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "excellence",
    title: "Excellence",
    subtitle: "Commitment to Quality",
    desc:
      "We deliver high-performance, secure, and user-friendly software that meets the highest standards of quality and reliability.",
    bg: "#A66BFF",
    icon: (
      <path
        d="M12 2l3 6 6 .5-4.5 3.5L18 19l-6-3-6 3 .5-7L2 8.5 8 8 12 2z"
        fill="white"
      />
    ),
  },
  {
    id: "agility",
    title: "Agility",
    subtitle: "Adapting to Change",
    desc:
      "The tech world is constantly evolving. We stay flexible and responsive to new trends, adapting quickly to meet changing client needs.",
    bg: "#FF3D3D",
    icon: (
      <path
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
        fill="white"
      />
    ),
  },
];

/* ------------------- CARD COMPONENT ------------------- */
const Card = ({ item }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        group bg-[#161B29] border border-[#33415580] rounded-2xl p-6 
        w-[280px] h-[302px] cursor-pointer
        transition-all duration-500 ease-out
        hover:shadow-[0_0_30px_rgba(30,140,255,0.55)]
        hover:scale-[1.045] hover:-translate-y-2
      "
    >
      <IconWrapper bg={item.bg}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          {item.icon}
        </svg>
      </IconWrapper>

      <h2 className="mt-4 text-[22px] text-white font-medium transition-all duration-500 opacity-90 group-hover:opacity-100">
        {item.title}
      </h2>

      <p className="mt-1 text-[15px] text-[#4089F8] transition-all duration-500 opacity-90 group-hover:opacity-100">
        {item.subtitle}
      </p>

      <p className="mt-3 text-[14px] leading-[21px] text-[#CBD5E1] transition-all duration-500 opacity-85 group-hover:opacity-100">
        {item.desc}
      </p>
    </motion.div>
  );
};

/* ------------------- LAYOUT ------------------- */
const Row = ({ children }) => (
  <div className="flex justify-center gap-[32px] mt-[32px]">{children}</div>
);

/* ------------------- MAIN COMPONENT ------------------- */
export default function OurTeam() {
  return (
    <div className="w-[1248px] mt-[45px] ml-[130px] mb-10">
      <Typography sx={{ fontWeight: 400, fontSize: "36px", textAlign: "center" }}>
        Our Core Value
      </Typography>

      <p className="text-[16px] text-center text-[#94A3B8] mt-1">
        The 7 Pillars That Drive Our Innovation and Success
      </p>

      {/* First Row (4 cards) */}
      <Row>
        {coreValues.slice(0, 4).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Row>

      {/* Second Row (3 cards) */}
      <Row>
        {coreValues.slice(4).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Row>
    </div>
  );
}
