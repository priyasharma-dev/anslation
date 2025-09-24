import React from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
    Paper,
    Stack,
    Chip,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// ---- Theme ----
const theme = createTheme({
    typography: { fontFamily: "'Inter', sans-serif" },
    palette: {
        primary: { main: "#2a6aff", light: "#4db0ff" },
        background: { default: "#030c1f", paper: "#040e2a" },
        text: { primary: "#fff", secondary: "#cbd5e1" },
    },
});

// ---- Small Card Item ----
function AlertItem({ color, label, icon }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: "9999px",
                px: 2,
                py: 1,
                fontSize: 14,
                color: "white",
                userSelect: "none",
                border: "1px solid rgba(163,177,212,0.18)",
            }}
        >
            <Box
                sx={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    bgcolor: color,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: icon === "close" ? "#1f2937" : "inherit",
                    fontSize: 14,
                }}
            >
                {icon === "close" ? <CloseIcon sx={{ fontSize: 14 }} /> : null}
            </Box>
            {label}
        </Box>
    );
}

// ---- Alerts Card ----
function AlertsBox({ title, alerts, sx }) {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                width: 360,
                p: 2.5,
                borderRadius: 4,
                color: "white",
                userSelect: "none",
                border: "1px solid rgba(163,177,212,0.22)",
                background:
                    "linear-gradient(180deg, rgba(16,76,194,.9), rgba(8,28,82,.95))",
                boxShadow: "0 10px 30px rgba(0,0,0,.55)",
                ...sx,
            }}
        >
            <Typography
                variant="body2"
                fontWeight={600}
                mb={2}
                sx={{ textAlign: "left", fontSize: 15 }}
            >
                {title}
            </Typography>

            <Stack spacing={1}>
                {alerts.map(({ color, label, icon }, i) => (
                    <AlertItem key={i} color={color} label={label} icon={icon} />
                ))}
            </Stack>

            <Box
                sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    display: "flex",
                    gap: 1,
                    color: "#cbd5e1",
                    cursor: "pointer",
                }}
            >
                <ChevronLeftIcon fontSize="small" />
                <ChevronRightIcon fontSize="small" />
            </Box>
        </Paper>
    );
}

// ---- Main Section ----
export default function DataVerseSection() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ p: { xs: 2, md: 6 } }}>
                <h2 className="timeline-title">
                    Data verse <br />
                    <span className="timeline-subtitle">Learn about your users</span>
                </h2>
                <Box
                    sx={{
                        position: "relative",
                        mx: "auto",
                        maxWidth: 1440,
                        width: "100%",
                        p: { xs: 3, md: 6 },
                        borderRadius: 6,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        background:
                            "linear-gradient(180deg, rgba(20,35,75,1) 0%, rgba(3,12,31,1) 100%)",
                        boxShadow: "0 20px 60px rgba(0,0,0,.65)",
                        color: "white",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", lg: "1fr 500px" }, // also increase right column a bit
                        columnGap: { xs: 3, md: 8 }, // more spacing between text and cards
                        rowGap: 4,
                        alignItems: "start",
                        mt: 8,
                    }}
                >

                    {/* Close button in the container */}
                    <IconButton
                        aria-label="close"
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            bgcolor: "rgba(163,177,212,0.2)",
                            color: "white",
                            width: 36,
                            height: 36,
                            "&:hover": { bgcolor: "rgba(163,177,212,0.3)" },
                        }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>

                    {/* LEFT: Text + buttons */}
                    <Box sx={{ textAlign: "left" }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: 32, md: 52 },
                                lineHeight: 1.1,
                                fontWeight: 800,
                                mb: 2,
                            }}
                        >
                            Notifications or Alerts
                        </Typography>

                        <Box
                            component="ul"
                            sx={{
                                listStyleType: "disc",
                                pl: 3,
                                mb: 4,
                                fontSize: 17,
                                lineHeight: "26px",
                            }}
                        >
                            <li>
                                Critical alerts (e.g., lab results flagged, patient emergencies).
                            </li>
                            <li>
                                System reminders (e.g., "Follow-up overdue for Patient X").
                            </li>
                        </Box>

                        <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
                            <Chip
                                label="Critical alerts in red to take quick action"
                                sx={{
                                    bgcolor: "#4b5563",
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    height: 36,
                                    borderRadius: 3,
                                }}
                            />
                            <Chip
                                label="Collapsable reminders"
                                sx={{
                                    bgcolor: "#4b5563",
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    height: 36,
                                    borderRadius: 3,
                                }}
                            />
                        </Stack>

                        <Chip
                            label="Use arrow to see more alerts and reminders"
                            sx={{
                                bgcolor: "#4b5563",
                                color: "white",
                                fontWeight: 600,
                                fontSize: 15,
                                height: 36,
                                borderRadius: 3,
                                mb: 4,
                            }}
                        />

                        <Stack direction="row" spacing={3} flexWrap="wrap">
                            <Button
                                variant="contained"
                                sx={{
                                    background: "linear-gradient(180deg, #2a6aff, #1b56f0)",
                                    fontSize: 17,
                                    fontWeight: 600,
                                    borderRadius: 9999,
                                    minWidth: 180,
                                    px: 6,
                                    py: 1.5,
                                    textTransform: "none",
                                    boxShadow: "0 10px 30px rgba(0,123,255,.35)",
                                    "&:hover": {
                                        background: "linear-gradient(180deg, #3a86ff, #2a66ff)",
                                    },
                                }}
                            >
                                Go to Data verse
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "rgba(255,255,255,0.5)",
                                    color: "white",
                                    fontSize: 17,
                                    fontWeight: 600,
                                    borderRadius: 9999,
                                    minWidth: 140,
                                    px: 6,
                                    py: 1.5,
                                    textTransform: "none",
                                    "&:hover": {
                                        borderColor: "rgba(255,255,255,0.7)",
                                        backgroundColor: "rgba(255,255,255,0.05)",
                                    },
                                }}
                            >
                                Go Back
                            </Button>
                        </Stack>
                    </Box>

                    {/* RIGHT: Stacked cards */}
                    <Box sx={{ position: "relative", height: 420 }}>
                        <AlertsBox
                            title="Critical alerts"
                            alerts={[
                                { color: "#2a6aff", label: "Emergencies alert" },
                                { color: "#2a6aff", label: "Emergencies alert" },
                                { color: "#2a6aff", label: "Emergencies alert" },
                            ]}
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 110,
                                borderRadius: 6,
                                zIndex: 1,
                            }}
                        />
                        <AlertsBox
                            title="Data to be replaced"
                            alerts={[
                                { color: "#cbd5e1", label: "Follow-up overdue", icon: "close" },
                                { color: "#cbd5e1", label: "Follow-up overdue", icon: "close" },
                                { color: "#cbd5e1", label: "Follow-up overdue", icon: "close" },
                            ]}
                            sx={{
                                position: "absolute",
                                top: 160,
                                right: -8,
                                borderRadius: 6,
                                zIndex: 2,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
