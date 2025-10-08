// src/components/home/hero/Hero.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

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
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "4rem" },
            fontFamily: "Helvetica Neue",
            mb: 2,
          }}
        >
          Driven by Questions. <br />
          Delivered as Solutions
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "rgba(255,255,255,0.8)",
            mb: 4,
          }}
        >
          Join the next generation of companies using Anslation to build scalable
          platforms, automate processes, integrate smart solutions, and accelerate
          digital transformation.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: "40px",
            textTransform: "none",
            background: "linear-gradient(90deg, #0040ff, #0078ff)",
            boxShadow: "0 0 20px rgba(0, 120, 255, 0.6)",
            "&:hover": {
              background: "linear-gradient(90deg, #0033cc, #0066dd)",
              boxShadow: "0 0 25px rgba(0, 120, 255, 0.8)",
            },
          }}
        >
          Let’s get started
        </Button>
      </Container>
      
    </Box>
    
  );
};

export default Hero;
