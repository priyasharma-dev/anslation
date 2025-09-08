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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: { xs: 3, sm: 6, md: 15 },
                    py: { xs: 5, md: 15 },
                    gap: { xs: 6, md: 0 },
                    // Optional: page background

                }}
            >
                {/* Left Column */}
                <Box sx={{ width: { xs: "100%", md: "50%" }, maxWidth: 600, color: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box sx={{ borderTop: "1px solid white", width: 64, mr: 2 }} />
                        <Typography sx={{ whiteSpace: "nowrap", fontSize: "20px" }}>
                            STAY UPDATED
                        </Typography>
                    </Box>

                    <Typography variant="h1" sx={{ fontSize: { xs: 48, md: 84 } }} gutterBottom>
                        Be Always
                        <br />
                        In Touch
                        <Box component="span" sx={{ color: "#135BFF", fontWeight: 900 }}>
                            .
                        </Box>
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 5, fontSize: "1rem", opacity: 0.9 }}>
                        You may be interested in what we can offer you.
                    </Typography>

                    {/* Email Input */}
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            maxWidth: "100%",
                            borderRadius: "12px",
                            backgroundColor: "#2C2C2C",
                            border: "1px solid rgba(255,255,255,0.5)",
                            px: 2,
                            py: 1,
                            boxShadow: "6px 6px 15px rgba(0,0,0,0.5)",
                            gap: 2,
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
                                fontSize: "1rem",
                                "& .MuiInputBase-input": {
                                    p: 1.5,
                                    "::placeholder": { color: "rgba(255,255,255,0.7)" },
                                },
                            }}
                        />

                        {/* Submit icon as a normal <img> via MUI Box */}
                        <IconButton
                            type="submit"
                            sx={{
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.5)",
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                backgroundColor: "transparent",
                                p: 0,

                            }}
                            aria-label="Submit email"
                        >
                            <Box
                                component="img"
                                src="/arrow.png" // make sure this file exists in your public/ folder
                                alt="Submit"
                                sx={{ width: 40, height: 40, display: "block" }}
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
                        minHeight: 300,
                    }}
                >
                    {/* Blur background blob */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: 480,
                            height: 480,
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
                            maxWidth: 750,
                            height: 400,
                            position: "relative",
                            zIndex: 1,
                            display: "block",
                        }}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Always;
