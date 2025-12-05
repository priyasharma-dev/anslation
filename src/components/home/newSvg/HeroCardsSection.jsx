import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import ProductsIcon from "../../../assets/icons/Products.svg";
import MicroToolsIcon from "../../../assets/icons/MicroTools.svg";
import MarketingIcon from "../../../assets/icons/Marketing.svg";
import InventoryIcon from "../../../assets/icons/Inventory.svg";
import SoftwareIcon from "../../../assets/icons/Software.svg";
import MarketingAutomationIcon from "../../../assets/icons/MarketingAutomation.svg";
import ServicesIcon from "../../../assets/icons/Services.svg";
import PerformanceAnalyticsIcon from "../../../assets/icons/PerformanceAnalytics.svg";
import SoftwareInfraIcon from "../../../assets/icons/SoftwareInfrastructure.svg";

const cards = [
  {
    icon: MarketingAutomationIcon,
    label: "Marketing Automation",
    href: "/marketing-automation",
  },
  { icon: SoftwareIcon, label: "Software", href: "/software" },
  { icon: ProductsIcon, label: "Products", href: "/products" },
  { icon: MicroToolsIcon, label: "Micro Tools", href: "/micro-tools" },
  { icon: MarketingIcon, label: "Marketing", href: "/marketing" },
  { icon: InventoryIcon, label: "Inventory", href: "/inventory" },
  {
    icon: SoftwareInfraIcon,
    label: "Software Infrastructure",
    href: "/software-infrastructure",
  },
  {
    icon: PerformanceAnalyticsIcon,
    label: "Performance Analytics",
    href: "/performance-analytics",
  },
  { icon: ServicesIcon, label: "Services", href: "/services" },
];

// semicircle offsets (only Y arc)
const CARD_OFFSETS = [
  220, // Marketing Automation
  90, // Software
  10, // Products
  -30, // Micro Tools
  -50, // Marketing
  -30, // Inventory
  10, // Software Infrastructure
  90, // Performance Analytics
  220, // Services
];

const MotionBox = motion.create(Box);

// total block (card + label) sizes from Figma
const getCardSize = (label) => {
  // 94 × 126 – Software, Products, Micro Tools, Marketing, Inventory, Services
  const smallCards = [
    "Software",
    "Products",
    "Micro Tools",
    "Marketing",
    "Inventory",
    "Services",
  ];

  // fallback
  return {
    width: { xs: 94, md: 94, lg: 94 },
    height: { xs: 126, md: 126, lg: 126 },
  };
};

const HeroCardsSection = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: { xs: "24%", md: "22%", lg: "22%" },
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 3,
        px: 50,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: { xs: 2.4, md: 3.4, lg: 2.5 },
          flexWrap: "nowrap",
        }}
      >
        {cards.map((card, index) => (
          <FloatingCard
            key={card.label}
            index={index}
            icon={card.icon}
            label={card.label}
            href={card.href}
            offset={CARD_OFFSETS[index] ?? 0}
          />
        ))}
      </Box>
    </Box>
  );
};

const FloatingCard = ({ icon, label, href, offset, index }) => {
  const { width, height } = getCardSize(label);
   const isProducts = label === "Products";
 const handleClick = (e) => {
    if (!isProducts) return; // let other cards behave as normal links

    // special behavior for Products: show section + scroll
    e.preventDefault();

    const section = document.getElementById("our-products");
    if (section) {
      section.classList.remove("op-section--hidden");
      section.classList.add("op-section--visible");
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
   

  return (
    <MotionBox
      component="a"
      href={href}
      aria-label={label}
       onClick={handleClick} 
      initial={{ opacity: 0, y: offset + 40, scale: 0.9 }}
      animate={{ opacity: 1, y: offset, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: offset - 6,
        scale: 1.03,
        boxShadow: "0 0 26px rgba(0, 180, 255, 0.9)",
        transition: { duration: 0.18 },
      }}
      whileTap={{
        y: offset - 2,
        scale: 0.99,
        transition: { duration: 0.12 },
      }}
      sx={{
        display: "flex",
        flexDirection: "column", // logo card + label stacked
        alignItems: "center",
        justifyContent: "flex-start",
        width,
        height, // total block = Figma Hug height
        textDecoration: "none",
        cursor: "pointer",
        pointerEvents: "auto",
      }}
    >
      {/* gradient card – only icon */}
      <Box
        sx={{
          width: 79,
          height: 79,
          borderRadius: 2,
          background:
            "linear-gradient(180deg, #0B1224 -15.05%, #2A458A 117.74%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={label}
          sx={{ width: 30, height: 30 }}
        />
      </Box>

      {/* label below the card – 8px gap */}
      <Typography
        variant="caption"
        sx={{
          mt: 1, // 8px gap
          color: "#FFFFFF",
          fontFamily:
            '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          fontWeight: 500,
          fontSize: "12px",
          // lineHeight: "24px",
          letterSpacing: 0,
          textAlign: "center",
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        {label}
      </Typography>
    </MotionBox>
  );
};

export default HeroCardsSection;
