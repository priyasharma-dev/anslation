import React from "react";
import { Box, Typography } from "@mui/material";

const Paragraph = ({ children }) => (
  <Typography
  sx={{
    fontFamily: `"Helvetica Neue", sans-serif`,
    fontSize: { xs: "15px", sm: "16px", md: "17px" },
    lineHeight: { xs: "20px", sm: "22px", md: "24px" },
    color: "#94A3B8",
    mt: "8px",

    // Responsive font weight
    fontWeight: {
      xs: 300,   // small screen → thinner
      sm: 400,   // medium screen → normal
      md: 500,   // large screen → slightly bold
    },

    wordBreak: "break-word",
  }}
>
    {children}
  </Typography>
);

export default function WeAre() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "flex-start", md: "space-between" },
        alignItems: "flex-start",
        width: "100%",
        maxWidth: "1248px",
        pt: { xs: "30px", sm: "40px", md: "50px" },
        pb: { xs: "20px", sm: "30px", md: "40px" },
        px: { xs: "20px", sm: "40px", md: "40px" }, // <-- horizontal spacing fixed
        mx: "auto",
        gap: { xs: "32px", sm: "48px", md: "64px" },
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* LEFT SIDE – Story */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: { xs: "1 1 100%", md: "0 0 592px" },
          gap: { xs: "12px", sm: "14px", md: "16px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: `"Helvetica Neue", sans-serif`,
            fontSize: { xs: "28px", sm: "32px", md: "36px" },
            lineHeight: { xs: "32px", sm: "36px", md: "40px" },
            fontWeight: 500,
            color: "#FFFFFF",
          }}
        >
          Our Story
        </Typography>

        <Paragraph>
          At Anslation, we are redefining the way businesses interact with technology.
          <br /> As a leading provider of innovative software solutions, we deliver
          cutting- <br />edge products that help organizations scale and thrive in the digital age.
        </Paragraph>

        <Paragraph>
          Founded with a vision to merge the worlds of marketing technology and <br />
          business automation, our team of passionate technologists and innovators <br />
          have built a suite of tools designed to optimize business operations
          and <br />elevate performance.
        </Paragraph>

        <Paragraph>
          Anslation started as a marketing software company but quickly realized the<br />
          potential to transform the tech landscape. Our journey from providing <br />
          marketing automation tools to becoming a tech-first company with enterprise-<br />
          level solutions has been driven by our commitment to innovation and <br />
          customer satisfaction.
        </Paragraph>
      </Box>

      {/* RIGHT SIDE – Image */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 280px" },
          height: { xs: "200px", sm: "230px", md: "250px" },
          borderRadius: "24px",
          overflow: "hidden",
          alignSelf: { xs: "center", md: "flex-start" }, 
        }}
      >
        <img
          src="/svg/story.png"
          alt="story"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}
