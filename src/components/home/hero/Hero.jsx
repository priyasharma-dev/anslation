import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import AiPowered from "../Ai/AiPowered";
import HeroCardsSection from "../newSvg/HeroCardsSection";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "40vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        px: { xs: 2, md: 12 },
        pt: { xs: 10, md: 14 },
        pb: { xs: 18, md: 16 },
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* AI-Powered pill */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 4,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          top: { xs: 72, md: 41 },
        }}
      >
        <AiPowered />
      </Box>

      {/* Floating icon cards (arc) */}
      <HeroCardsSection />

      {/* Main text + button */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          // p: 10,
          // gap: "10px",
          // slight margin so heading sits nicely under the arc (close to Figma)
          mt: { xs: 22, md: 25 },
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              maxWidth: 420,
              mx: "auto",
              textAlign: "center",
              fontWeight: 700,
              fontFamily:
                '"Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont',
              fontSize: { xs: "2rem", md: "35px" },
              lineHeight: "1.1",
              letterSpacing: "-2.716px",
              mb: 2, // a bit tighter to match Figma
            }}
          >
            <Box component="span" sx={{ color: "#FFFFFF", display: "block" }}>
              Driven by Questions.
            </Box>

            <Box
              component="span"
              sx={{
                display: "block",
                background:
                  "linear-gradient(90deg, #5DA7FA 0%, #31C8F0 48.56%, #2DD4C8 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                fontFamily:
                '"Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont',
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "40px" },
                lineHeight: "1.1",
                letterSpacing: "-2.716px",
              }}
            >
              Delivered as Solutions
            </Box>
          </Typography>
        </motion.div>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "rgba(255,255,255,0.8)",
            mb: 3.2, // a touch tighter before the button
            fontSize: { xs: "0.98rem", md: "1.05rem" },
            maxWidth: 650,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Join the next generation of companies using Anslation to build
          scalable platforms, automate processes, integrate smart solutions,
          and accelerate digital transformation.
        </Typography>

        {/* CTA button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5}}>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 10px 30px rgba(42, 101, 204, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Button
              sx={{
                px: 5,
                py: 1.25,
                borderRadius: "39px",
                border: "none",
                background:
                  "linear-gradient(126deg, #2A65CC 0%, #42B4D1 100%)",
                outline: "1px solid rgba(255, 255, 255, 0.9)",
                outlineOffset: "-1px",
                backdropFilter: "blur(2px)",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                color: "#FFFFFF",
                fontSize: "20px",
                fontFamily:
                  '"Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500,
                lineHeight: "24px",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(42, 101, 204, 0.6)",
                textTransform: "none",
                "&:hover": {
                  background:
                    "linear-gradient(126deg, #2A65CC 0%, #42B4D1 100%)",
                  boxShadow: "0 12px 34px rgba(42, 101, 204, 0.95)",
                },
              }}
            >
              Let&apos;s get started
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
