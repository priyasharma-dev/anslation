
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
import { MailOutline } from "@mui/icons-material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
 import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { CheckIcon } from "lucide-react";


const theme = createTheme({
    typography: {
        fontFamily: "'Helvetica Neue', sans-serif",
        h1: {
            fontWeight: 900,
            fontSize: "3.75rem",
            lineHeight: 1.1,
            color: "#fff",
            "@media (max-width:600px)": {
                fontSize: "2.5rem",
            },
        },
        subtitle1: { fontWeight: 400, fontSize: "1rem", color: "#fff" },
        body1: { fontWeight: 400, fontSize: "1rem", color: "#fff" },
        caption: {
            fontWeight: 400,
            fontSize: "0.875rem",
            color: "#fff",
            letterSpacing: "0.05em",
        },
    },
});

function Always() {
    const onSubmit = (e) => {
        e.preventDefault();
        // handle submit here
    };

  return (
  <div className="w-full relative overflow-hidden m">
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Background Radial Effect */}
      <div
        style={{
          position: "absolute",
          width: "2038px",
          height: "1509px",
          left: "calc(50% - 2038px/2 + 44px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
          opacity: 0.4,
          zIndex: 0,
        }}
      ></div>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, sm: 6, md: 15 },
          py: { xs: 5, md: 15 },
          gap: { xs: 6, md: 0 },
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            maxWidth: { xs: "100%", md: 600 },
            color: "white",
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Stay Updated */}
          <Box
            sx={{
              bgcolor: "#004DFF40",
              px: 2,
              py: "6px",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              color: "#61A6FB",
              mb: 2,
             
              border: "0.5px solid #1F40B0",
              boxShadow: "0 0 6px rgba(31,64,176,0.45) inset",
              backdropFilter: "blur(5px)",
            }}
          >
            Stay Updated
          </Box>

          {/* BE ALWAYS IN TOUCH */}
          <Typography variant="h1" sx={{ mb: 2 }}>
            Be Always <br /> In Touch
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: "1.05rem",
              maxWidth: 520,
              color: "#A5AAB6",
              mb: 4,
            }}
          >
            You may be interested in what we can offer you. Stay connected and
            never miss an update about our latest solutions and innovations.
          </Typography>

          {/* Email Input Box */}
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 700,
              bgcolor: "#1A2333",
              borderRadius: "12px",
              px: 2,
              py: 1,
              mb: 4,
              border: "1px solid #2C3E55",
            }}
          >
            <InputBase
              placeholder="Enter your email address"
              sx={{ flexGrow: 1, color: "#fff" }}
            />
            <IconButton
              type="submit"
              sx={{
                bgcolor: "#2563FF",
                borderRadius: "10px",
                p: 1.5,
                "&:hover": { bgcolor: "#1D4FD8" },
              }}
            >
              <SendRoundedIcon sx={{ color: "#fff", transform: "rotate(-30deg)" , pb: 0.5,width: 38,
    height: 38, }} />
            </IconButton>
          </Box>

          {/* Bottom Row Email + Location */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ display: "flex", gap: 1.5 }}>
           <div className="bg-[#1E293B] w-9 h-9 rounded-sm p-1 flex items-center justify-center">
                <MailOutline sx={{ color: "#61A6FB" }} />
            </div>

              <Box sx={{ color: "#fff" }}>
                <Typography sx={{ fontSize: "1rem" ,fontWeight:400, opacity: 0.6 }}>
                  Email us
                </Typography>
                <Typography sx={{ fontSize: "1rem" ,fontWeight:400 }}>
                  we@anslation.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5 }}>
<div className="bg-[#1E293B] w-9 h-9 rounded-sm p-1 flex items-center justify-center">
     <LocationOnOutlinedIcon sx={{ color: "#61A6FB" }} />
</div>

         
              <Box sx={{ color: "#fff" }}>
                <Typography sx={{ fontSize: "1rem" ,fontWeight:400, opacity: 0.6 }}>
                  Location
                </Typography>
                <Typography sx={{ fontSize: "1rem" ,fontWeight:400, }}>
                  Betul | Gurugram
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Card */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              border: "1px solid #2C3953",
              px: 6,
              py: 6,
              textAlign: "center",
              maxWidth: 420,
            }}
          >
           <Box
  sx={{
    fontSize: "5rem",
    mb: 4,
    bgcolor: "#2563EB",
    width: 80,
    height: 80,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    position: "relative",  
  }}
>
  {/* Badge Check Icon */}
  <Box
    sx={{
      width: 22,
      height: 22,
      borderRadius: "50%",
      bgcolor: "#22C55E", // green success
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: -4,          // icon ko thoda bahar laane ke liye
      right: -4,
    }}
  >
    <CheckIcon sx={{ fontSize: 16, color: "#fff" }} /> {/* MUI icon */}
  </Box>

              <MailOutline sx={{ color: "#fff" }} />
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: "1.8rem", mb: 2,mt:4 }}>
              Connect With Us
            </Typography>
            <Typography sx={{ color: "#A2A9B5", fontSize: "1rem" }}>
              Join thousands of companies already transforming their digital
              presence with Anslation.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  </div>
);

}

export default Always;
