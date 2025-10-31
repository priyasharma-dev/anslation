import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import instagram from "../../../assets/Instagram 2.png";
import linked from "../../../assets/LinkedIn 2.png";
import Twitter from "../../../assets/Twitter.png";
import youtube from "../../../assets/Youtube.png";
import fac from "../../../assets/Facebook 2.png";

// ✅ Import Chat Support
import ChatSupport from "../footer/Footer_Services/Chat_Support/ChatSupport";

export default function Footer() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        background: "linear-gradient(to bottom, #0a0a0f, #00103a)",
        color: "white",
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 10, lg: 14 },
        mt: "auto",
        position: "relative",
      }}
    >
      <Divider
        sx={{ borderColor: "rgba(255,255,255)", pt: { md: 2, lg: 3 } }}
      />
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Grid
          container
          spacing={{ xs: 3, sm: 5, md: 6 }}
          alignItems="flex-start"
          justifyContent="flex-start"
          direction={{ xs: "column", sm: "column", md: "row" }}
          className="px-4"
        >
          {/* LEFT SIDE - Brand */}
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Typography fontSize={{ xs: 26, sm: 30, md: 34 }} fontWeight={600}>
              Anslatíon
            </Typography>
            <Typography fontSize={{ xs: 15, sm: 16 }} mb={2} lineHeight={1.6}>
              Driven by Questions.
              <br />
              Delivered as Solutions.
            </Typography>
            <div className="flex mb-4 gap-2">
              <img src={fac} alt="fac" className="w-5 h-5" />
              <img src={instagram} alt="instgram" className="w-5 h-5" />
              <img src={linked} alt="linked" className="w-5 h-5" />
              <img src={Twitter} alt="twitter" className="w-5 h-5" />
              <img src={youtube} alt="youtube" className="w-5 h-5" />
            </div>
          </Grid>

          {/* RIGHT SIDE - Links */}
          <Grid item xs={12} md={8} lg={8}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
                gap: { xs: 2, sm: 3, md: 4 },
                mt: 2,
              }}
            >
              {/* Product */}
              <Box>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                >
                  Product
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="inherit" underline="hover">
                    Ads-astra
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Anslatíon tools
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    OS.Anslation
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    K-tech tool
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Trackers
                  </Link>
                </Stack>
              </Box>

              {/* Service */}
              <Box>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                >
                  Service
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="inherit" underline="hover">
                    Performance Analytics
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Software Infrastructure
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Marketing Automation
                  </Link>

                  {/* 🔥 Chat Support Toggle Button */}
                  <Button
                    onClick={() => setOpenChat(!openChat)}
                    sx={{
                      color: "white",
                      textTransform: "none",
                      justifyContent: "flex-start",
                      padding: 0,
                      fontSize: { xs: 16, sm: 17, md: 18 },
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {openChat ? "Close Chat Support" : "Open Chat Support"}
                  </Button>
                </Stack>
              </Box>

              {/* Company */}
              <Box>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                >
                  Company
                </Typography>
                <Stack spacing={1}>
                  <Link href="/about" color="inherit" underline="hover">
                    About
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Contact us
                  </Link>
                  <Link href="/career" color="inherit" underline="hover">
                    Careers
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Culture
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Blog
                  </Link>
                </Stack>
              </Box>

              {/* Contact */}
              <Box>
                <Typography
                  fontSize={{ xs: 18, sm: 20, md: 22 }}
                  fontWeight={700}
                >
                  Contact us
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Email fontSize="small" />
                    <Typography fontSize={{ xs: 16, sm: 17, md: 18 }}>
                      Help@anslation.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" />
                    <Typography fontSize={{ xs: 16, sm: 17, md: 18 }}>
                      (414) 687 - 5892
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOn fontSize="small" />
                    <Typography fontSize={{ xs: 16, sm: 17, md: 18 }}>
                      Betul | Gurugram
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.3)",
            my: { xs: 3.5, sm: 5, md: 6 },
          }}
        />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <Typography fontSize={{ xs: 16, sm: 20 }}>
            Copyright © 2025
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Typography>All Rights Reserved</Typography>
            <Link href="#" underline="hover" color="inherit">
              Terms and Conditions
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Privacy Policy
            </Link>
          </Stack>
        </Box>
      </Container>

      {/* ✅ Chat Support Component Appears Here */}
      {openChat && (
        <Box
          sx={{
            position: "fixed",
            bottom: 90,
            right: 30,
            zIndex: 2000,
            boxShadow: "0 0 15px rgba(0,0,0,0.4)",
          }}
        >
          <ChatSupport />
        </Box>
      )}
    </Box>
  );
}
