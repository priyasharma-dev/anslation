import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

const font = `"Helvetica Neue", sans-serif`;

/* ---------------- SHARED SX STYLES ---------------- */
const cardSx = {
  background: "#161B29",
  border: "1px solid #33415580",
  borderRadius: "16px",
  width: "100%", 
  height: "302px",
  padding: "24px",
  cursor: "pointer",
  transition: "0.5s ease-out",
  "&:hover": {
    transform: "scale(1.045) translateY(-8px)",
    boxShadow: "0 0 30px rgba(30,140,255,0.55)",
  },
};

const badgeSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #3B82F64D",
  borderRadius: "999px",
  width: "175px",
  py: "8px",
  mx: "auto",
  gap: "6px",
  color: "#60A5FA",
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: font,
};

const Row = ({ children }) => (
 <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: { xs: "12px", sm: "16px", md: "32px" }, 
       justifyContent: {
        xs: "flex-start",
        sm: "flex-start",
        md: "flex-start",   
        lg: "center",       
        xl: "center",
      },               
      mt: "32px",
    }}
  >
    {children}
  </Box>
);

const Paragraph = ({ children }) => (
  <Typography
    sx={{
      mt: "3px",
      fontSize: "14px",
      lineHeight: "21px",
      color: "#CBD5E1",
      fontFamily: font,
    }}
  >
    {children}
  </Typography>
);

const IconWrapper = ({ bg, children }) => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bg,
      opacity: 0.9,
      transition: "0.5s",
      ".card:hover &": { opacity: 1 },
    }}
  >
    {children}
  </Box>
);

const SparkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.8" strokeLinecap="round">
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M4.2 4.2l15.6 15.6" />
    <path d="M4.2 19.8l15.6-15.6" />
  </svg>
);

/* ---------------- CARD DATA ---------------- */
const coreValues = [
 {
    id: "innovation",
    title: "Innovation",
    subtitle: "Pioneering the Future",
    desc:
      "We create innovative solutions that keep our clients ahead of the curve. We embrace new ideas, constantly evolving our products to meet the changing demands of the tech industry.",
    bg: "#FF6B00",
    icon:  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path
    d="M12 2C8.2 2 5.2 5 5.2 8.8c0 2.3 1.1 4.1 2.3 5.5.7.9 1.2 1.7 1.4 2.7.1.4.4.7.8.7h4.6c.4 0 .7-.3.8-.7.2-1 .7-1.8 1.4-2.7 1.2-1.4 2.3-3.2 2.3-5.5C18.8 5 15.8 2 12 2z"
    fill="white"
  />
  <path
    d="M9.3 17.3c-.2.4 0 .7.4.7h4.6c.4 0 .6-.3.4-.7-.2-.3-.5-.6-.9-.6H10.2c-.4 0-.7.2-.9.6z"
    fill="white"
  />
  <path
    d="M9.8 19c-.3 0-.5.2-.5.5v.9c0 .3.2.5.5.5h4.4c.3 0 .5-.2.5-.5v-.9c0-.3-.2-.5-.5-.5H9.8z"
    fill="white"
  />
  <path
    d="M10.4 21c-.3 0-.4.2-.4.4v.6c0 .5.4 1 1 1h2.1c.6 0 1-.5 1-1v-.6c0-.2-.1-.4-.4-.4h-3.3z"
    fill="white"
  />
</svg>
  },
 
  {
    id: "integrity",
    title: "Integrity",
    subtitle: "Building Trust",
    desc:
      "We are committed to honesty and transparency in every interaction, ensuring our clients can rely on us to deliver solutions that meet their exact needs.",
    bg: "#19D3E6",
    icon: (
      <path
        d="M20 8.8l-5 1.9v6.6c0 3.8 3.0 6.6 5 7.6c2-1 5-3.8 5-7.6V10.7l-5-1.9z"
        fill="white"
      />
    ),
  },
  {
    id: "collaboration",
    title: "Collaboration",
    subtitle: "Stronger Together",
    desc:
      "Teamwork is key to our success. We work closely with our clients to understand their challenges and create customized solutions that drive real impact.",
    bg: "#4A7DFD",
    icon: (
      <path d="M3 12h6l4 8 4-16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      "The tech world is constantly evolving. We stay flexible and responsive to new trends, ensuring we can adapt quickly to meet the ever-changing needs of our clients.",
    bg: "#FF3D3D",
    icon: (
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="white" />
    ),
  },
];

/* ---------------- CARD COMPONENT ---------------- */
// const Card = ({ item }) => (
//   <motion.div
//     className="card"
//     initial={{ opacity: 0, y: 40, scale: 0.97 }}
//     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//     viewport={{ once: true, amount: 0.3 }}
//     style={{
//       flex: "0 0 calc(25% - 24px)", // responsive 4 per row
//       boxSizing: "border-box",
//     }}
 
//   >
//     <Box sx={cardSx}>
//       <IconWrapper bg={item.bg}>
//         <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//           {item.icon}
//         </svg>
//       </IconWrapper>

//       <Typography sx={{ mt: "16px", fontSize: "22px", fontWeight: 500, color: "#fff", fontFamily: font }}>
//         {item.title}
//       </Typography>

//       <Typography sx={{ mt: "2px", fontSize: "15px", color: "#4089F8", fontFamily: font }}>
//         {item.subtitle}
//       </Typography>

//       <Paragraph>{item.desc}</Paragraph>
//     </Box>
//   </motion.div>
// );

const Card = ({ item }) => (
  <Box
    component={motion.div}
    className="card"
    initial={{ opacity: 0, y: 40, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    sx={{
      flexBasis: {
        xs: "100%",               
        sm: "48%",                
        md: "calc(33.33% - 24px)",
        lg: "calc(25% - 24px)",  
      },
      maxWidth: {
        xs: "100%",
        sm: "48%",
        md: "calc(33.33% - 24px)",
        lg: "calc(25% - 24px)",
      },
    }}
  >
    <Box sx={cardSx}>
      <IconWrapper bg={item.bg}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          {item.icon}
        </svg>
      </IconWrapper>

      <Typography sx={{ mt: "16px", fontSize: "22px", fontWeight: 500, color: "#fff", fontFamily: font }}>
        {item.title}
      </Typography>

      <Typography sx={{ mt: "2px", fontSize: "15px", color: "#4089F8", fontFamily: font }}>
        {item.subtitle}
      </Typography>

      <Paragraph>{item.desc}</Paragraph>
    </Box>
  </Box>
);




/* ---------------- MAIN COMPONENT ---------------- */
export default function OurTeam() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", overflow: "hidden" }}>
      <div style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <Box sx={{ width: "100%", maxWidth: "1248px", mx: "auto", mt: "90px", mb: "40px" }}>
          <Box sx={badgeSx}>
            <SparkIcon />
            About Anslation
          </Box>

          <Typography sx={{ fontWeight: 400, fontSize: "36px", textAlign: "center", pt: 2, fontFamily: font, color: "#fff" }}>
            Our Core Value
          </Typography>

          <Typography sx={{ fontSize: "16px", textAlign: "center", mt: 1, fontFamily: font, color: "#94A3B8" }}>
            The 7 Pillars That Drive Our Innovation and Success
          </Typography>

          {/* <Row>{coreValues.slice(0, 4).map((item) => <Card key={item.id} item={item} />)}</Row>
          <Row>{coreValues.slice(4).map((item) => <Card key={item.id} item={item} />)}</Row> */}

          <Row>
  {coreValues.map((item) => (
    <Card key={item.id} item={item} />
  ))}
</Row>
        </Box>
      </div>
    </div>
  );
}
