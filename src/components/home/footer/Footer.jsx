
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

// Social Icons
import instagram from "../../../assets/Instagram 2.png";
import linked from "../../../assets/LinkedIn 2.png";
import Twitter from "../../../assets/Twitter.png";
import youtube from "../../../assets/Youtube.png";
import fac from "../../../assets/Facebook 2.png";

export default function Footer() {
  const socialIcons = [
    { src: fac, alt: "Facebook", link:"https://www.facebook.com/people/Anslation-PvtLtd/pfbid0rZsF7kb8QXNUS5cKSviE72mMSd4vWD5CRoTPqNTkkTryapM3C6iMFo3vpDGwzHTkl/?mibextid=wwXIfr&rdid=FcVSZRwUYySTFyJ1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16StUHySDq%2F%3Fmibextid%3DwwXIfr"},
    { src: instagram, alt: "Instagram" ,link:"https://www.instagram.com/anslation_official/" },
    { src: linked, alt: "LinkedIn",link:"https://www.linkedin.com/company/anslation/" },
    { src: Twitter, alt: "Twitter" ,link:"https://x.com/AnslationPvtLtd?ref_src=twsrc%5Etfw"},
    { src: youtube, alt: "YouTube" ,link:"https://www.youtube.com/@anslation-r3j" },
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
      {/* <Divider sx={{ borderColor: "rgba(255,255,255,0.4)" }} /> */}

      <Box
        component="footer"
        sx={{
          py: { xs: 6, sm: 7, md: 8 },
          px: { xs: 2, sm: 4, md: 6, lg: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 6, sm: 8, md: 10, lg: 14 }}
            justifyContent="space-between"
         
          >
            {/* Brand */}
            <Grid item xs={12} sm={6} md={3}>
              <img src="/svg/anslation-logo.svg" alt="logo" style={{
    width: 120,           
    display: "block",     
    margin: "3 auto",     
    marginBottom: "5px", 
  }} />
              <Typography sx={{ fontSize: 18, lineHeight: 1.6, mt: 3, color:"#9DA3AF" }}>
                Driven by Questions.
                <br />
                Delivered as Solutions.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 3, flexWrap: "wrap", gap: 1 }}
              >
                {socialIcons.map((icon, i) => (

               <Link  key={i} 
                href={icon.link}
                target="_blank"
                rel="nooperner noreferrer"
                sx={{textDecoration :"none"}}>


                  <Box
                    key={i}
                    sx={{
                      width: 34,
                      height: 34,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "15%",
                      backgroundColor: "#1F2937",
                      cursor: "pointer",
                      transition: "all .3s",
                      "&:hover": {
                        transform: "scale(1.15)",
                        background:
                          icon.alt === "Facebook"
                            ? "#1877F2"
                            : icon.alt === "Instagram"
                            ? "linear-gradient(45deg,#515BD4,#8134AF,#DD2A7B,#FEDA77,#F58529)"
                            : icon.alt === "LinkedIn"
                            ? "#0A66C2"
                            : icon.alt === "Twitter"
                            ? "#1DA1F2"
                            : icon.alt === "YouTube"
                            ? "#FF0000"
                            : "#1F2937",
                      },
                    }}
                  >
                    <img src={icon.src} alt={icon.alt} width={16} height={16} />
                  </Box>
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Column Generator */}
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
                  
                  { label: "Performance Analytics", path: "/performance-analytics" },
                  { label: "Software Infrastructure", path: "/software-infrastructure" },
                  { label: "Marketing Automation", path: "/marketing-automation" },
                  { label: "Chat support", path: "" },
                ],
              },
              {
  heading: "Company",
  items: [
    { label: "About", path: "/about" },
    { label: "Contact us", path: "/contact" },
    { label: "Careers", path: "/careers" },
    { label: "Culture", path: "/culture" },
    { label: "Blog", path: "/blog" },
  ],
},
              {
                heading: "Contact Us",
                items: [
                  { label: "we@anslation.com", path: "mailto:we@anslation.com" },
                  { label: "012-345-6789", path: "tel:012-345-6789" },
                  { label: "Betul | Gurugram", path: "" }
                ],
              },
            ].map((block, idx) => (
              <Grid key={idx} item xs={6} sm={6} md={2.25}>
                <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 18 }}>
                  {block.heading}
                </Typography>
                <Stack spacing={1}>
                  {block.items.map((x, i) => (
                    <Link
                      key={i}
                        component="a"
                        href={ x.path }
                      underline="hover"
                      color="#9DA3AF"
                      sx={{
                        fontSize: 16,
                        cursor: "pointer", 
                        wordBreak: "break-word",
                        "&:hover": { color: "blue" },
                      }}
                    >
                       { x.label }
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Bottom */}
          <Divider sx={{ borderColor: "rgba(255,255,255,0.18)", my: 5 }} />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ fontSize: 13, textAlign: "center",  }}
          >
            <Typography sx={{fontsize:16 , color:"#9DA3AF"}}>
              © 2025 Anslatíon — All Rights Reserved.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Link underline="hover" color="#9DA3AF" sx={{fontSize:15}}>
                Terms & Conditions
              </Link>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "rgba(255,255,255,0.4)" }}
              />
              <Link underline="hover" color="#9DA3AF" sx={{fontSize:16}}>
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
