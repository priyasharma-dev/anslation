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


const theme = createTheme({
    typography: {
        fontFamily: "'Inter', sans-serif",
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
           <div className=" w-full  relative overflow-hidden m ">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div 
               style={{
                     position: "absolute",
                     width: "2038px",
                     height: "1509px",
                     left: "calc(50% - 2038px/2 + 44px)",
                    //  top: "470px",
                     background:
                       "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
                     opacity: 0.4,
                    //  filter: "blur(37.2px)",
                     zIndex: 0,
               }}
                >

               </div>
                
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
                <Box sx={{ width: { xs: "100%", md: "55%" },
                 maxWidth:{ xs: "100%", md: 600 } , 
                 color: "white",
                 textAlign: { xs: "center", md: "left" },
                 display:"flex",
                 flexDirection:"column",
                 alignItems: { xs: "center", md: "flex-start" },
                 }}>
                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: { xs: "center", md: "flex-start" },
                        mb:{ xs: 1.5, sm: 2 },
                         gap: 2, 
                         }}
                         >

                        <Box sx={{ borderTop: "1px solid white", width: { xs: 40, sm: 56, md: 64 } }} />
                        <Typography sx={{ whiteSpace: "nowrap", fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            STAY UPDATED
                        </Typography>
                    </Box>


                    <Typography 
                    variant="h1" 
                    sx={{
                         fontWeight: 900,
                         lineHeight: { xs: 1.15, md: 1.1 },
                         fontSize: { xs: 32, sm: 44, md: 64, lg: 84},
                         letterSpacing: { xs: -0.2, sm: -0.4, md: -0.6 },
                          }} 
                          gutterBottom>
                        Be Always
                        <br />
                        In Touch
                        <Box component="span" sx={{ color: "#135BFF", fontWeight: 900 }}>
                            .
                        </Box>
                    </Typography>

                    <Typography
                     variant="body1" 
                     sx={{
                         mb: { xs: 4, sm: 4, md: 5 },
                          fontSize:  { xs: 14, sm: 15, md: 16 }, 
                          opacity: 0.9,
                           maxWidth: 520,
                          textAlign: { xs: "center", md: "left" }, }}>
                        You may be interested in what we can offer you.
                    </Typography>

                    {/* Email Input */}
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                             maxWidth: { xs: "100%", sm: 460,md: 560 },
                            borderRadius: { xs: "12px", md: "14px" },
                            backgroundColor: "#2C2C2C",
                            border: "1px solid rgba(255,255,255,0.5)",
                            px: { xs: 1.5, sm: 2, md: 2.25 },
                            py:{ xs: 0.5, sm: 1, md:1.5 } ,
                            boxShadow: "6px 6px 15px rgba(0,0,0,0.5)",
                            gap: { xs: 1, sm: 1.5, md: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <InputBase
                            placeholder="Email ID"
                            type="email"
                            fullWidth
                            required
                            sx={{
                                color: "white",
                                fontSize: { xs: 15,sm: 15, md: 16 },
                                "& .MuiInputBase-input": {
                                    p: { xs: 1, md: 1.5, lg: 1.5 },
                                    
                                    "::placeholder": { color: "rgba(255,255,255,0.7)" },
                                     textAlign: { xs: "left", md: "left" },
                                },
                            }}
                        />

                        {/* Submit icon as a normal <img> via MUI Box */}
                        <IconButton
                            type="submit"
                            sx={{
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.5)",
                                width: { xs: 44, sm: 48, md: 52 },
                                height:{ xs: 44, sm: 48, md: 52 } ,
                                borderRadius: "50%",
                                backgroundColor: "transparent",
                                p: 0,
                                flexShrink: 0,

                            }}
                            aria-label="Submit email"
                        >
                            <Box
                                component="img"
                                src="/arrow.png" // make sure this file exists in your public/ folder
                                alt="Submit"
                                sx={{ width:{ xs: 20, sm: 22, md: 22 } ,
                                     height: { xs: 20, sm: 22, md: 22 },
                                      display: "block" }}
                            />
                        </IconButton>
                    </Box>
                </Box>

                {/* Right Image */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "45%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        minHeight: { xs: 200, sm: 250, md: 300 },
                    }}
                >
                    {/* Blur background blob */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: { xs: 250, sm: 350, md: 480 },
                            height: { xs: 250, sm: 350, md: 480 },
                            borderRadius: "50%",

                            zIndex: 0,
                            top: "45%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />

                    {/* Foreground image */}
                    <Box
                        component="img"
                        src="/alyays.png" // make sure this file exists in your public/ folder
                        alt="Illustration"
                        sx={{
                            width: "100%",
                            maxWidth: { xs: 280, sm: 400, md: 550 },
                            maxHeight: { xs: 220, sm: 300, md: 410 },
                            // height: 400,
                            position: "relative",
                            zIndex: 1,
                            display: "block",
                        }}
                    />
                </Box>
            </Box>
        
        </ThemeProvider>
        </div>
    );
}

export default Always;
