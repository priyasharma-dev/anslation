import React from "react";
import {
  Box,
  InputBase,
  Typography,
  IconButton,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import MailOutline from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";


//  repeatable tag component
const Tag = ({ text }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      px: 3,
      py: 0.9,
      mb: 3,
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
        fontFamily: "Roboto",
        color: "#61A6FB",
      }}
    >
      {text}
    </Typography>
  </Box>
);


//  email & location item component
const ContactItem = ({ icon, title, subtitle }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
    <Box
      sx={{
        width: 42,
        height: 40,
        backgroundColor: "#1E293B",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </Box>

    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography sx={{ color: "#9CA3AF", fontSize: 16 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "white" }}>{subtitle}</Typography>
    </Box>
  </Box>
);


function Always() {
  const onSubmit = (e) => e.preventDefault();

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #0E1629 0%, #050A1C 100%)",
        overflow: "hidden",
        display: "block",
    position: "absolute",
    minHeight: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          py: { xs: 2, sm: 5, md: 7 },
          px: { xs: 1.5, sm: 3, md: 9 },
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
            position: "relative",
          }}
        >
          <Tag text="Stay Updated" />

          <Typography
            sx={{
              width: { xs: "100%", md: 340 },
              fontFamily: "Helvetica Neue",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "42px", md: "60px" },
              lineHeight: "100%",
              letterSpacing: 0,
            }}
          >
            Be Always <br /> In Touch
          </Typography>

          <Typography
            sx={{
              width: { xs: "100%", md: 455 },
              fontFamily: "Helvetica Neue",
              fontWeight: 500,
              fontSize: { xs: "15px", sm: "16px", md: "18px" },
              lineHeight: { xs: "24px", md: "28px" },
              opacity: 0.85,
              mt: 2,
            }}
          >
            You may be interested in what we can offer you. Stay connected and
            never miss an update about our latest solutions and innovations.
          </Typography>

          {/* Email Field */}
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              width: { xs: "100%", sm: 540, md: 591 },
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
              mt: 4,
            }}
          >
            <InputBase
              placeholder="Enter your email address"
              required
              sx={{
                flex: 1,
                color: "rgba(255,255,255,0.90)",
                fontSize: { xs: 14.5, sm: 15.5, md: 16 },
                "&::placeholder": { color: "rgba(255,255,255,0.55)" },
              }}
            />

            <IconButton
              type="submit"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "8px",
                backgroundColor: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.25s",
                "&:hover": {
                  backgroundColor: "#1E54D7",
                  transform: "scale(1.05)",
                },
              }}
            >
              <SendRoundedIcon sx={{ fontSize: 22, color: "#fff" }} />
            </IconButton>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            <ContactItem
              icon={<MailOutline sx={{ fontSize: 22, color: "#2563EB" }} />}
              title="Email Us"
              subtitle="we@anslation.com"
            />

            <ContactItem
              icon={
                <LocationOnOutlinedIcon
                  sx={{ fontSize: 22, color: "#3B82F6" }}
                />
              }
              title="Location"
              subtitle="Betul | Gurugram"
            />
          </Box>
        </Box>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <Box
          sx={{
            width: { xs: "100%", md: 489 },
            height: { xs: "auto", md: 392 },
            background: `linear-gradient(135deg, #0E172A 0%, rgba(30, 50, 90, 0.14) 100%)`,
            borderRadius: "12px",
            border: "0.2px solid #334156",
            backdropFilter: "blur(4.2px)",
            px: { xs: 4, sm: 5, md: 6 },
            py: { xs: 5, sm: 6.5, md: 7 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
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
              fontFamily: "Helvetica Neue",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              color: "white",
              mb: 1.5,
            }}
          >
            Connect With Us
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 430,
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
