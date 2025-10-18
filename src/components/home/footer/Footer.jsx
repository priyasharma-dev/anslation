import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import instagram from "../../../assets/Instagram 2.png"
import linked from "../../../assets/LinkedIn 2.png"
import Twitter from "../../../assets/Twitter.png"
import youtube from "../../../assets/Youtube.png"
import fac from '../../../assets/Facebook 2.png'


export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "transparent",
        background: "linear-gradient(to bottom, #0a0a0f, #00103a)",
        color: "white",
        mt: "auto",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      }}
    >
        <Divider sx={{ borderColor: "rgba(255,255,255)", }} />
      <Container maxWidth="xl" sx={{ py: 6 }}     >
        {/* IMPORTANT: remove space-between so the right side isn't forced to the edge */}
        <Grid container spacing={40} alignItems="flex-start" className="px-4 "   >
          {/* LEFT SIDE - Brand */}
          <Grid item xs={12} md={5}>
            <div  >
              <Typography fontSize={32} fontWeight={500} mb={2}>
                Anslatíon
              </Typography>
              <Typography fontSize={18} mb={3} lineHeight={1.6}>
                Driven by Questions.
                <br />
                Delivered as Solutions
              </Typography>
              <div className="flex justify-between mb-5 gap-2">
                <img src={fac} alt="fac" className="w-5 h-5" />
                <img src={instagram} alt="instgram" className="w-5 h-5" />
                <img src={linked} alt="linked" className="w-5 h-5" />
                <img src={Twitter} alt="twitter" className="w-5 h-5" />
                <img src={youtube} alt="youtube" className="w-5 h-5" />
              </div>
            </div>


            <Stack direction="row" spacing={2}>
              <IconButton aria-label="Facebook" href="#" sx={{ color: "white" }}>
                <i className="fab fa-facebook-f" />
              </IconButton>
              <IconButton aria-label="Twitter" href="#" sx={{ color: "white" }}>
                <i className="fab fa-twitter" />
              </IconButton>
              <IconButton aria-label="Instagram" href="#" sx={{ color: "white" }}>
                <i className="fab fa-instagram" />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="#" sx={{ color: "white" }}>
                <i className="fab fa-linkedin-in" />
              </IconButton>
              <IconButton aria-label="YouTube" href="#" sx={{ color: "white" }}>
                <i className="fab fa-youtube" />
              </IconButton>
            </Stack>
          </Grid>

          {/* RIGHT SIDE - 4 columns */}
          {/* Small left shift with negative margin if you want it a bit closer */}
          <Grid item xs={12} md={7} >
            <Grid container spacing={10}>
              {/* Product */}
              <Grid item xs={6} sm={3}>
                <Typography fontSize={22} fontWeight={700} mb={3}>
                  Product
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Ads-astra</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Anslatíon tools</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">OS.Anslation</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">K-tech tool</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Trackers</Link>
                </Stack>
              </Grid>

              {/* Service */}
              <Grid item xs={6} sm={3}>
                <Typography fontSize={22} fontWeight={700} mb={3}>
                  Service
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Performance Analytics</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Software Infrastructure</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Marketing Automation</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Chat support</Link>
                </Stack>
              </Grid>

              {/* Company */}
              <Grid item xs={6} sm={3}>
                <Typography fontSize={22} fontWeight={700} mb={3}>
                  Company
                </Typography>
                <Stack spacing={1}>
                  <Link
                    href="/about"
                    color="inherit"
                    fontSize={18}
                    underline="hover"
                  >
                    About
                  </Link>                 
                   <Link href="#" color="inherit" fontSize={18} underline="hover">Contact us</Link>
                  <Link href="/career" color="inherit" fontSize={18} underline="hover">Careers</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Culture</Link>
                  <Link href="#" color="inherit" fontSize={18} underline="hover">Blog</Link>
                </Stack>
              </Grid>

              {/* Contact */}
              <Grid item xs={6} sm={3}>
                <Typography fontSize={22} fontWeight={700} mb={3}>
                  Contact us
                </Typography>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Email fontSize="small" />
                    <Typography fontSize={18}>Help@anslation.com</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone fontSize="small" />
                    <Typography fontSize={18}>(414) 687 - 5892</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOn fontSize="small" />
                    <Typography fontSize={18}>Betul | Gurugram</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", my: 6 }} />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.95rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
            gap: 2,
          }}
        >
          <Typography fontSize={20}>Copyright © 2025</Typography>
          <Box fontSize={18}>
            All Rights Reserved |{" "}
            <Link href="#" underline="hover" fontSize={18} color="inherit">Terms and Conditions</Link>{" "}
            |{" "}
            <Link href="#" underline="hover" fontSize={18} color="inherit">Privacy Policy</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
