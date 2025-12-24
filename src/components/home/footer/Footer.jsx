import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import { MessageCircle } from "lucide-react";
import ChatSupport from "../footer/Footer_Services/Chat_Support/ChatSupport";
import { FaFacebookF, FaInstagram, FaLinkedinIn,  FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// // Social Icons
// import instagram from "../../../assets/Instagram 2.png";
// import linked from "../../../assets/LinkedIn 2.png";
// import Twitter from "../../../assets/Twitter.png";
// import youtube from "../../../assets/YouTube.png";
// import fac from "../../../assets/Facebook 2.png";

export default function Footer() {
  const socialIcons = [
  {title: "Facebook", icon: <FaFacebookF size={18} />, link: "https://www.facebook.com/people/Anslation-PvtLtd/pfbid0rZsF7kb8QXNUS5cKSviE72mMSd4vWD5CRoTPqNTkkTryapM3C6iMFo3vpDGwzHTkl/?mibextid=wwXIfr&rdid=FcVSZRwUYySTFyJ1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16StUHySDq%2F%3Fmibextid%3DwwXIfr" },

  {title: "Instagram", icon: <FaInstagram size={18} />, link: "https://www.instagram.com/anslation_official/" },

  {title: "LinkedIn", icon: <FaLinkedinIn size={18} />, link: "https://www.linkedin.com/company/anslation/" },
  {title: "Twitter", icon: <FaXTwitter size={18} />, link: "https://x.com/AnslationPvtLtd?ref_src=twsrc%5Etfw" },

  {title: "YouTube", icon: <FaYoutube size={18} />, link: "https://www.youtube.com/@anslation-r3j" },
];


  const [openChat, setOpenChat] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ background: "#000", color: "#fff" }}>
      <Box
        component="footer"
        sx={{
          py: { xs: 5, sm: 6, md: 7, lg: 8 },
          px: { xs: 2, sm: 4, md: 6, lg: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{
              xs: 4,
              sm: 5,
              md: 4,
              lg: 8,
              xl: 10,
            }}
            justifyContent="space-between"
          >
            {/* Brand */}
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="/svg/anslation-logo.svg"
                alt="logo"
                style={{
                  width: 130,
                  marginBottom: 12,
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16, md: 17, lg: 18 },
                  lineHeight: 1.6,
                  mt: 2,
                  color: "#9DA3AF",
                }}
              >
                Driven by Questions.
                <br /> Delivered as Solutions.
              </Typography>

              {/* Social Icons */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ mt: 3, flexWrap: "wrap" }}
              >
                {socialIcons.map((icon, i) => (
                  <Link
                    key={i}
                    href={icon.link}
                    target="_blank"
                    underline="none"
                  >
                    <Box
                      sx={{
                        width: { xs: 30, sm: 34 },
                        height: { xs: 30, sm: 34 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "12%",
                        backgroundColor: "#1F2937",
                        transition: ".3s",
                        "&:hover": { transform: "scale(1.15)",
background:
              icon.title === "Facebook"
                ? "#1877F2"
                : icon.title === "Instagram"
                ? "linear-gradient(45deg,#515BD4,#8134AF,#DD2A7B,#FEDA77,#F58529)"
                : icon.title === "LinkedIn"
                ? "#0A66C2"
                : icon.title === "Twitter"
                ? "#000000"
                : icon.title === "YouTube"
                ? "#FF0000"
                : "#1F2937",

                        },
                      }}
                    >
                      
                   {React.cloneElement(icon.icon, { color: "white"})}
                        
                       
                    
                    </Box>
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Auto Columns */}
            {[
              {
                heading: "Product",
                items: [
                  { label: "Ads-astra", path: "/ads-astra" },
                  { label: "Anslatíon tools", path: "/anslatíon-tools" },
                  { label: "OS Anslation", path: "/os-anslation" },
                  { label: "K-tech tool", path: "/k-tech-tool" },
                  { label: "Trackers", path: "/trackers" },
                ],
              },
              {
                heading: "Service",
                items: [
                  {
                    label: "Performance Analytics",
                    path: "/performance-analytics",
                  },
                  {
                    label: "Software Infrastructure",
                    path: "/software-infrastructure",
                  },
                  {
                    label: "Marketing Automation",
                    path: "/marketing-automation",
                  },
                  { label: "Chat support", path: "" },
                ],
              },
              {
  heading: "Company",
  items: [
    { label: "About", path: "/about" },
    { label: "Contact us", path: "/contact" },
    { label: "Careers", path: "/career" },
    { label: "Culture", path: "/culture" },
    { label: "Blog", path: "/blog" },
  ],
},
               
              {
                heading: "Contact Us",
                items: [
                  { label: "we@anslation.com", path: "mailto:we@anslation.com" },
                  { label: "012-345-6789", path: "tel:012-345-6789" },
                  { label: "Betul | Gurugram", path: "" },
                ],
              },
            ].map((block, idx) => (
              <Grid
                key={idx}
                item
                xs={6}
                sm={4}
                md={2.5}
                lg={2.25}
                xl={2}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: 16, sm: 17, md: 18 },
                  }}
                >
                  {block.heading}
                </Typography>

                <Stack spacing={0.8}>
                  {block.items.map((x, i) => (
                    <Link
                      key={i}
                      href={x.path}
                      underline="none"
                      color="#9DA3AF"
                      sx={{
                        fontSize: { xs: 14, sm: 15, md: 16 },
                        "&:hover": { color: "#61A6FB" },
                      }}
                    >
                      {x.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Bottom */}
          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.2)",
              my: { xs: 4, sm: 5 },
            }}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ textAlign: "center" }}
          >
            <Typography sx={{ color: "#9DA3AF", fontSize: 15 }}>
              © 2025 Anslatíon — All Rights Reserved.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Link underline="hover" color="#9DA3AF" sx={{ fontSize: 15 }}>
                Terms & Conditions
              </Link>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "rgba(255,255,255,0.4)" }}
              />
              <Link underline="hover" color="#9DA3AF" sx={{ fontSize: 15 }}>
                Privacy Policy
              </Link>
            </Stack>
          </Stack>
        </Container>

        {/* Floating Chat */}
        {footerInView && (
          <Box
            sx={{
              position: "fixed",
              bottom: { xs: 18, md: 30 },
              right: { xs: 18, md: 30 },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              zIndex: 3000,
            }}
          >
            {showMessage && !openChat && (
              <Paper
                elevation={4}
                sx={{
                  background: "#1976d2",
                  color: "white",
                  px: 2,
                  py: 1,
                  mb: 1,
                  borderRadius: 2,
                  fontSize: { xs: 11, sm: 13 },
                }}
              >
                💬 Need help? Talk to our bot!
              </Paper>
            )}

            <IconButton
              onClick={() => setOpenChat(!openChat)}
              sx={{
                background: "#1976d2",
                color: "#fff",
                "&:hover": { background: "#1565c0" },
              }}
            >
              <MessageCircle size={24} />
            </IconButton>
          </Box>
        )}

        {openChat && (
          <Box
            sx={{
              position: "fixed",
              bottom: { xs: 95, md: 110 },
              right: { xs: 18, md: 30 },
              width: { xs: 300, sm: 360 },
              height: { xs: 380, sm: 430 },
              zIndex: 4000,
            }}
          >
            <ChatSupport />
          </Box>
        )}
      </Box>
    </Box>
  );
}
