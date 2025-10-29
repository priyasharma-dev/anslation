import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import instagram from "../../../assets/Instagram 2.png";
import linked from "../../../assets/LinkedIn 2.png";
import Twitter from "../../../assets/Twitter.png";
import youtube from "../../../assets/Youtube.png";
import fac from "../../../assets/Facebook 2.png";

export default function Footer() {
  const footerLinks = {
    product: [
      { label: "Ads-astra", href: "#" },
      { label: "Anslatíon tools", href: "#" },
      { label: "OS.Anslation", href: "#" },
      { label: "K-tech tool", href: "#" },
      { label: "Trackers", href: "#" },
    ],
    service: [
      { label: "Performance Analytics", href: "#" },
      { label: "Software Infrastructure", href: "#" },
      { label: "Marketing Automation", href: "#" },
      { label: "Chat support", href: "#" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact us", href: "#" },
      { label: "Careers", href: "/career" },
      { label: "Culture", href: "#" },
      { label: "Blog", href: "#" },
    ],
  };

  const socialIcons = [
    { src: fac, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: linked, alt: "LinkedIn" },
    { src: Twitter, alt: "Twitter" },
    { src: youtube, alt: "YouTube" },
  ];

  return (
    <div>
      <Divider sx={{ borderColor: "rgba(255,255,255)", mb: { xs: 4, md: 6 } }} />
        <Box
      component="footer"
      sx={{
        width: "100%",
        background: "linear-gradient(to bottom, #0a0a0f, #00103a)",
        color: "white",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 , lg:0},
      }}
    >
      <Container maxWidth="xl" className="w-full" >
        <Grid container spacing={{ xs: 4, md: 6 }} className="lg:flex   lg:justify-evenly" >
          {/* Brand Section */}
        
          <Grid item xs={12} md={4} lg={3}  >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 20, sm: 24, lg:32 },
                mr: { lg: 6 }, // smaller margin for that range
                '@media (min-width:1024px) and (max-width:1154px)': {
                  mr: 0,
                  textAlign: 'center',
                },
              }}
            >
              Anslatíon
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16, lg:20 },
                mb: 2,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Driven by Questions.
              <br />
              Delivered as Solutions
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              {socialIcons.map((icon) => (
                <Link
                  key={icon.alt}
                  href="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    transition: "opacity 0.2s",
                    "&:hover": { opacity: 0.7 },
                  }}
                  aria-label={icon.alt}
                >
                  <Box
                    component="img"
                    src={icon.src}
                    alt={icon.alt}
                    sx={{ width: 20, height: 20 }}
                  />
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={8} lg={9}>
            <Grid container spacing={{ xs: 3, sm: 4, md: 3 }}>
              {/* Product */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 18, sm: 20, md: 22 },
                    fontWeight: 700,
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  Product
                </Typography>
                <Stack spacing={1.5}>
                  {footerLinks.product.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      color="inherit"
                      underline="hover"
                      sx={{
                        fontSize: { xs: 15, sm: 16, md: 17 },
                        color: "rgba(255,255,255,0.85)",
                        transition: "color 0.2s",
                        "&:hover": { color: "white" },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Service */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 18, sm: 20, md: 22 },
                    fontWeight: 700,
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  Service
                </Typography>
                <Stack spacing={1.5}>
                  {footerLinks.service.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      color="inherit"
                      underline="hover"
                      sx={{
                        fontSize: { xs: 15, sm: 16, md: 17 },
                        color: "rgba(255,255,255,0.85)",
                        transition: "color 0.2s",
                        "&:hover": { color: "white" },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Company */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 18, sm: 20, md: 22 },
                    fontWeight: 700,
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  Company
                </Typography>

                 <Stack spacing={{ xs: 0.6, sm: 1, md: 1.4, lg: 2 }}>
                  <Link
                    href="/about"
                    color="inherit"
                    fontSize={{ xs: 16, sm: 17, md: 18 }}
                    underline="hover"
                  >
                    About
                  </Link>                 
                   <Link href="#" color="inherit" fontSize={{ xs: 16, sm: 17, md: 18 }} underline="hover">Contact us</Link>
                  <Link href="/career" color="inherit" fontSize={{ xs: 16, sm: 17, md: 18 }} underline="hover">Careers</Link>
                  <Link href="#" color="inherit" fontSize={{ xs: 16, sm: 17, md: 18 }} underline="hover">Culture</Link>
                  <Link href="/blog" color="inherit" fontSize={{ xs: 16, sm: 17, md: 18 }} underline="hover">Blog</Link>
                   </Stack> 
              </Grid>

              {/* Contact */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 18, sm: 20, md: 22 },
                    fontWeight: 700,
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  Contact us
                </Typography>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Email sx={{ fontSize: 18 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: 15, sm: 16, md: 17 },
                        color: "rgba(255,255,255,0.85)",
                        wordBreak: "break-word",
                      }}
                    >
                      Help@anslation.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone sx={{ fontSize: 18 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: 15, sm: 16, md: 17 },
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      (414) 687 - 5892
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOn sx={{ fontSize: 18 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: 15, sm: 16, md: 17 },
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      Betul | Gurugram
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
        

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: { xs: 4, md: 6 } }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
            Copyright © 2025
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            sx={{ fontSize: { xs: 14, sm: 16 } }}
          >
            <Typography>All Rights Reserved</Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, opacity: 0.6 }}>|</Box>
            <Link href="#" color="inherit" underline="hover">
              Terms and Conditions
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" }, opacity: 0.6 }}>|</Box>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Stack>
        </Box>
      </Container>
        </Box>
    </div>
  );
}