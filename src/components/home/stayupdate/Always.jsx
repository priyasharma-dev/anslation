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
import { LuMail, LuSend } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const theme = createTheme({
    typography: {
        fontFamily: "'Helvetica Neue', sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.1,
            color: "#fff",
            "@media (max-width:1536px)": { fontSize: "3rem" },
            "@media (max-width:1280px)": { fontSize: "2.7rem" },
            "@media (max-width:1024px)": { fontSize: "2.4rem" },
            "@media (max-width:600px)": { fontSize: "2rem" },
        },
    },
});

function Always() {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full relative overflow-hidden">
            <ThemeProvider theme={theme}>
                <CssBaseline />

                {/* Background Glow */}
                <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(257.85deg, #0E1629 -0.99%, #050A1C 103.46%)",
        }}>
        

                <Box
                    sx={{
                        position:"relative",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: { xs: 3, sm: 6, md: 10, lg: 14, xl: 20 },
                        py: { xs: 6, sm: 8, md: 12, lg: 14, xl: 18 },
                       gap: { xs: 4, sm: 4, md: 6, lg: 6, xl: 8 },
                        
                        zIndex: 10,
                    }}
                >
                    {/* ---------- LEFT COLUMN ---------- */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "55%" },
                            maxWidth: { xs: "100%", md: 650, lg: 700 },
                            color: "white",
                            textAlign: { xs: "center", md: "left" },
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        {/* Stay Updated Badge */}
                        <Box
                            sx={{
                                bgcolor: "#111E3D",
                                px: { xs: 1.2, sm: 1.7 },
                                py: "3px",
                                borderRadius: "9999px",
                                fontSize: { xs: "0.8rem", md: "0.9rem" },
                                color: "#61A6FB",
                                border: "0.5px solid #1F40B0",
                                boxShadow: "0 0 6px rgba(31,64,176,0.45) inset",
                                backdropFilter: "blur(5px)",
                                alignSelf: { xs: "center", md: "flex-start" },
                            }}
                        >
                            Stay Updated
                        </Box>

                        {/* Heading */}
                        <Typography variant="h1">
                            Be Always <br /> In Touch
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: {
                                    xs: "0.95rem",
                                    sm: "1rem",
                                    md: "1.05rem",
                                    lg: "1.15rem",
                                },
                                maxWidth: 520,
                                color: "#A5AAB6",
                                mt: 1,
                                mb: 3,
                            }}
                        >
                            You may be interested in what we can offer you. Stay connected
                            and never miss an update about our latest<br/> solutions and innovations.
                        </Typography>

                        {/* Input Box */}
                        <Box
                            component="form"
                            onSubmit={onSubmit}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                maxWidth: 700,
                                bgcolor: "#1E293B",
                                borderRadius: "12px",
                                px: { xs: 1.5, sm: 2 },
                                py: { xs: 0.8, sm: 1 },
                                mb: 4,
                                border: "1px solid #475569",
                            }}
                        >
                            <InputBase
                                placeholder="Enter your email address"
                                sx={{
                                    flexGrow: 1,
                                    color: "#fff",
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                }}
                            />
                            <IconButton
                                type="submit"
                                sx={{
                                    bgcolor: "#2563FF",
                                    borderRadius: "10px",
                                    p: { xs: 1, sm: 2 },
                                    "&:hover": { bgcolor: "#1D4FD8" },
                                }}
                            >
                               <LuSend
                              style={{
                             color: "#fff",
  
                              width: "28px",
                             height: "28px",
                             }}
                               />
                            </IconButton>
                        </Box>

                        {/* Email + Location */}
                        <Box
                            sx={{
                                p:0,
                                mt: 0,
                                display: "flex",
                                gap: { xs: 3, sm: 4 },
                                flexWrap: "wrap",
                                justifyContent: { xs: "center", md: "flex-start" },
                            }}
                        >
                            {/* email */}
                            <Box sx={{ display: "flex", gap: 1.5 }}>
                                <div className="bg-[#1E293B] w-11 h-11 rounded-sm p-1 flex items-center justify-center">
                                    {/* <MailOutline sx={{ color: "#61A6FB" }} /> */}
                                    <LuMail  size={28} color="#61A6FB" /> 
                                </div>

                                <Box sx={{ color: "#fff" }}>
                                    <Typography sx={{ opacity: 0.6, fontSize: "0.95rem" ,fontWeight:400}}>
                                        Email us
                                    </Typography>
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        we@anslation.com
                                    </Typography>
                                </Box>
                            </Box>

                            {/* location */}
                            <Box sx={{ display: "flex", gap: 1.5 }}>
                                <div className="bg-[#1E293B] w-11 h-11 rounded-sm p-1 flex items-center justify-center">
                                    {/* <LocationOnOutlinedIcon sx={{ color: "#61A6FB" }} /> */}
                                    <GrLocation size={28} color="#61A6FB" />
                                </div>

                                <Box sx={{ color: "#fff" }}>
                                    <Typography sx={{ opacity: 0.6, fontSize: "0.95rem",fontWeight:400 }}>
                                        Location
                                    </Typography>
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        Betul | Gurugram
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* ---------- RIGHT CARD ---------- */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "45%" },
                            mt: { xs: 6, md: 0 },
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >


                        <Box
                            sx={{
                                bgcolor: "rgba(255,255,255,0.05)",
                                borderRadius: "15px",
                                border: "1px solid #2C3953",
                                px: { xs: 4, sm: 5, md: 6 },
                                py: { xs: 5, sm: 6, md: 7 },
                                textAlign: "center",
                                maxWidth: 550,
                                minHeight: { xs: 350, md: 420 },
                            }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    fontSize: "5rem",
                                    mb: 4,
                                    bgcolor: "#2563EB",
                                   width: { xs: 120, sm: 130 },
                                    height: { xs: 120, sm: 130 },
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto",
                                    position: "relative",
                                            overflow: "visible",
                                }}
                            >
                                <Box
                                    sx={{
                                       width: 32,
                                     height: 32,
                                        borderRadius: "50%",
                                        bgcolor: "#22C55E",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "absolute",
                                        top: -1,
                                      right: -1,
 
                                    }}
                                >
                                    <CheckIcon sx={{ fontSize: 18, color: "#fff" }} />
                                </Box>

                                <MailOutline sx={{ color: "#fff", fontSize: "3.8rem" }} />
                            </Box>

                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: { xs: "1.4rem", sm: "1.7rem", md: "1.9rem" },
                                    mb: 2,
                                    mt: 4,
                                }}
                            >
                                Connect With Us
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#A2A9B5",
                                    fontWeight: 400,
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                }}
                            >
                                Join thousands of companies transforming their digital presence with Anslation.
                            </Typography>
                              </Box>
                        </Box>
                    </Box> 



                    
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default Always;
