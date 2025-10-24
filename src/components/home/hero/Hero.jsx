// src/components/home/hero/Hero.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay:0.1, ease: "easeOut" }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontFamily: "Helvetica Neue",
          mb: 2,
        
        }}
      >
        Driven by Questions. <br />
        Delivered as Solutions
      </Typography>
    </motion.div>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "rgba(255,255,255,0.8)",
            mb: 4,
            fontSize: { xs: "0.95rem", md: "1.1rem" },
          }}
        >
          Join the next generation of companies using Anslation to build scalable
          platforms, automate processes, integrate smart solutions, and accelerate
          digital transformation.
        </Typography>

        {/* Button */}
        <motion.button
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          whileHover={{
            scale: 1.1, transition: { duration: 0.1 }, background: "linear-gradient(90deg, #0033cc, #0066dd)",
            boxShadow: "0 0 25px rgba(0, 120, 255, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.7 , delay:0.1 }}

          style={{
            paddingBottom: "12px",
            paddingTop: "12px",
            paddingLeft: "24px",
            paddingRight: "24px",
            cursor: "pointer",
            borderRadius: "40px",
            fontSize: "1.2rem",
            background: "linear-gradient(90deg, #0040ff, #0078ff)",
            boxShadow: "0 0 20px rgba(0, 120, 255, 0.6)",



          }}

        >
          Let’s get started
        </motion.button>
      </Container>

    </Box>

  );
};

export default Hero;
