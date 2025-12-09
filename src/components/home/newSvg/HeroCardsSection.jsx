import React,{ useEffect, useState }  from "react";

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
const getCardSize = (label) => ({
   width: { xs: 94, md: 94, lg: 94 },
  height: { xs: 126, md: 126, lg: 126 },
});

const POP_DURATION = 0.8; // time each card takes to pop
const OVERLAP = 0.2;

const HeroCardsSection = () => {
   const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, POP_DURATION * 1000 - OVERLAP * 1000); // slightly faster to create wave effect
    return () => clearInterval(interval);
  }, []);


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
             isActive={index === activeIndex}
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

const FloatingCard = ({ icon, label, href, offset, index, isActive }) => {
  const { width, height } = getCardSize(label);
  // const isProducts = label === "Products";
   const handleClick = (e) => {
     if (!isProducts) return;

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

      initial={{ y: offset, scale: 1 }}
      animate={
        isActive
          ? {scale: [1, 1.19, 1]  }
          : {  scale: 1 }
      }
      transition={{
        duration: POP_DURATION,
        ease: [0.5, 0, 0.2, 1], 
      }}
      
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width,
        height, 
        textDecoration: "none",
        cursor: "pointer",
        pointerEvents: "auto",
        position: "relative",
      }}
    >
  
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
           position: "relative",
          zIndex: 1,
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
          mt: 1,
          color: "#FFFFFF",
          fontFamily:
            '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          fontWeight: 500,
          fontSize: "12px",
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
