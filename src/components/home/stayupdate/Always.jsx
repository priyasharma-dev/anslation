


import React from "react";
import {
  Box,
  CssBaseline,
  InputBase,
  Typography,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import MailOutline from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";



const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

function Always() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #0E1629 0%, #050A1C 100%)",
        overflow: "hidden",
      }}
    >
      
        {/* <CssBaseline /> */}

        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            py: { xs: 7, sm: 10, md: 14 },
            px: { xs: 2.5, sm: 4, md: 10 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 6, md: 0 },
          }}
        >
          {/* ---------------- LEFT SIDE ---------------- */}
          <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              textAlign: { xs: "center", md: "left" },
              color: "white",
            }}
          >
            {/* TAG: STAY UPDATED */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                
                px: { xs: 2.3, sm: 2.7, md: 3 },
                py: { xs: 0.7, sm: 0.8, md: 0.9 },
                mb: { xs: 2, sm: 3 },
                borderRadius: "100px",
                background: "rgba(17, 30, 61, 0.65)",
                border: "1px solid #1F40B0",
                boxShadow: "0 0 12px rgba(31,64,176,0.45) inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12.5, sm: 13.2, md: 14 },
                  fontWeight: 400,
                  fontFamily:"Roboto",
                  fontSize:"12px",
                  // letterSpacing: "0.09em",
                  color: "#61A6FB",
                }}
              >
                Stay Updated
              </Typography>
            </Box>

            {/* HEADING */}
            <Typography
  sx={{
    width: { xs: "100%", md: 340 },
    height: { xs: "auto", md: 146 },
    fontFamily: "Helvetica Neue",
    fontWeight: 700,
    fontSize: {
      xs: "32px",      // mobile
      sm: "42px",      // tablet
      md: "60px",      // desktop (Figma value)
    },
    lineHeight: "100%",
    letterSpacing: 0,
    display: "flex",
    alignItems: "center",    // vertical middle alignment
  }}
>
  Be Always <br /> In Touch
</Typography>


            {/* DESCRIPTION */}
         <Typography
  sx={{
    width: { xs: "100%", md: 455 },
    height: { xs: "auto", md: 84 },
    fontFamily: "Helvetica Neue",
    fontWeight: 500,
    fontSize: { xs: "15px", sm: "16px", md: "18px" },
    lineHeight: { xs: "24px", md: "28px" },
    letterSpacing: 0,
    display: "flex",
    alignItems: "center",
    opacity: 0.85,
    mt: 2,
  }}
>
  You may be interested in what we can offer you. Stay connected and
  never miss an update about our latest solutions and innovations.
</Typography>



            {/* EMAIL FIELD (Figma perfect) */}
          <Box
  component="form"
  onSubmit={onSubmit}
  sx={{
    width: { xs: "100%", sm: 540, md: 591 },   // Fill width exactly like Figma
    height: 70,
    backgroundColor: "#1E293B",
    borderRadius: "12px",
    border: "1px solid #475569",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2.2,
    mx: "auto",
    mt: { xs: 4, sm: 4.5 },
  }}
>
  <InputBase
    placeholder="Enter your email address"
    required
    sx={{
      flex: 1,
      color: "rgba(255,255,255,0.90)",
      fontSize: { xs: 14.5, sm: 15.5, md: 16 },
      "&::placeholder": {
        color: "rgba(255,255,255,0.55)",
      },
    }}
  />

 <IconButton
  type="submit"
  sx={{
    width: 50,
    height: 50,
    minWidth: 50,
    borderRadius: "8px",
    backgroundColor: "#2563EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s ease",
    "&:hover": {
      backgroundColor: "#1E54D7", // shade darker (Figma hover feel)
      transform: "scale(1.05)",
    },
  }}
>
  <SendRoundedIcon sx={{ fontSize: 22, color: "#ffffff" }} />
</IconButton>

</Box>






<Box
  sx={{
    display: "flex",
    flexDirection: "row",          
    alignItems: "center",
    gap: "32px",                   
    width: { xs: "100%", md: "590.59px" },
    height: { xs: "auto", md: "48px" },   
    position: { md: "absolute" },
    top: { md: 521 },
    left: { md: 168 },
    justifyContent: { xs: "center", md: "flex-start" },
    mt:"15px",
  }}
>



   <Box
  sx={{
    width: "42px",
    height: "40px",
    backgroundColor: "#1E293B",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>

  <MailOutline sx={{ fontSize: 22, color: "#2563EB" }} />
</Box>
  <Box
  sx={{
    display: "flex",
    flexDirection: "column", // Vertical flow
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content", // Hug width
    height: "fit-content", // Hug height
    maxWidth: "134px", // Figma max width
    maxHeight: "48px", // Figma max height
  }}
>
  <Typography
  sx={{
   
    fontFamily: "Helvetica Neue",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0%",
    color: "#9CA3AF", 
  }}
>
  Email Us
</Typography>
  <Typography> we@anslation.com</Typography>
</Box>
  <Box
  sx={{
    width: 42,
    height: 40,
    borderRadius: "6px",
    backgroundColor: "#1E293B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      borderColor: "#60A5FA",
    },
  }}
>
  <LocationOnOutlinedIcon sx={{ fontSize: 22, color: "#3B82F6" }} />
</Box>

  <Box
  sx={{
    display: "flex",
    flexDirection: "column", // Vertical flow
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content", // Hug width
    height: "fit-content", // Hug height
    maxWidth: "134px", // Figma max width
    maxHeight: "48px", // Figma max height
  }}
>
  <Typography
  sx={{
   
    fontFamily: "Helvetica Neue",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0%",
    color: "#9CA3AF", 
    display: "flex",
  }}
>
  Location
</Typography>
  <Typography>Betul | Gurugram</Typography>
</Box>


</Box>

 












<Box>


</Box>




          </Box>

          {/* ---------------- RIGHT SIDE ---------------- */}
          {/* <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                background: "rgba(21, 32, 52, 0.55)",
                backdropFilter: "blur(16px)",
                borderRadius: "22px",
                width: { xs: "95%", sm: "80%", md: "85%" },
                maxWidth: 520,
                py: { xs: 7, sm: 7.5, md: 8 },
                px: { xs: 4, sm: 4.5, md: 6 },
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Box
                component="img"
                src="/mail-badge.png"
                alt="Mail verified"
                sx={{ width: { xs: 70, sm: 85, md: 100 }, mb: 3 }}
              />

             <Typography
  sx={{
    width: { xs: "100%", md: 219 },
    height: { xs: "auto", md: 24 },
    fontFamily: "Helvetica Neue",
    fontWeight: 500,
    fontSize: { xs: "20px", sm: "24px", md: "28px" },
    lineHeight: { xs: "24px", md: "24px" },
    letterSpacing: 0,
    display: "flex",
    alignItems: "center",   // vertical middle alignment
    color: "white",
    mb: 1.5,
  }}
>
  Connect With Us
</Typography>
              <Typography
                sx={{
                  fontSize: { xs: 13.5, sm: 14.5, md: 15.5 },
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: 360,
                  mx: "auto",
                  lineHeight: 1.55,
                }}
              >
                Join thousands of companies already transforming their digital
                presence with Anslatíon.
              </Typography>
            </Box>




          </Box> */}


          <Box
  sx={{
    width: { xs: "100%", md: 489 },
    height: { xs: "auto", md: 392 },
    background: `
      linear-gradient(135deg, #0E172A 0%, rgba(30, 50, 90, 0.14) 100%)
    `,
    borderRadius: "12px",
    border: "0.2px solid #334156",
    backdropFilter: "blur(4.2px)",
    WebkitBackdropFilter: "blur(4.2px)",
    px: { xs: 4, sm: 5, md: 6 },
    py: { xs: 5, sm: 6.5, md: 7 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    // Desktop Figma position but safe on mobile
    position: { md: "absolute" },
    top: { md: 136 },
    left: { md: 820 },
  }}
>
  <Box
    component="img"
    src="/mail-badge.png"
    alt="Mail verified"
    sx={{
      width: { xs: 70, sm: 85, md: 100 },
      mb: 3,
    }}
  />

  <Typography
    sx={{
      width: { xs: "100%", md: 219 },
      height: { xs: "auto", md: 24 },
      fontFamily: "Helvetica Neue",
      fontWeight: 500,
      fontSize: { xs: "20px", sm: "24px", md: "28px" },
      lineHeight: { xs: "24px", md: "24px" },
      letterSpacing: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      mb: 1.5,
    }}
  >
    Connect With Us
  </Typography>

 <Typography
  sx={{
    width: 430,
    height: 48,
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(255,255,255,0.85)",
    mx: "auto",
  }}
>
  Join thousands of companies already transforming their digital
  presence with Anslatíon.
</Typography>

</Box>

        </Box>
      
    </div>
  );
}

export default Always;

