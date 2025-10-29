
import React from "react";
import { Box, Typography, Button, IconButton, Paper, Stack, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Small Card Component
function AlertItem({ color, label, icon }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: "9999px",
                px: { xs: 1.5, sm: 2 },
                py: 1,
                fontSize: { xs: 12, sm: 14 },
                color: "white",
                border: "1px solid rgba(163,177,212,0.18)",
            }}
        >
            <Box
                sx={{
                    width: { xs: 20, sm: 22 },
                    height: { xs: 20, sm: 22 },
                    borderRadius: "50%",
                    bgcolor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: icon === "close" ? "#1f2937" : "inherit",
                    fontSize: { xs: 12, sm: 14 },
                }}
            >
                {icon === "close" && <CloseIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />}
            </Box>
            {label}
        </Box>
    );
}

// Alerts Card Component
function AlertsBox({ title, alerts, sx }) {
    return (
        <Paper
            elevation={0}
            sx={{
                width: { xs: "100%", sm: 360 },
                p: { xs: 2, sm: 2.5 },
                borderRadius: 4,
                color: "white",
                border: "1px solid rgba(163,177,212,0.22)",
                background: "linear-gradient(180deg, rgba(16,76,194,.9), rgba(8,28,82,.95))",
                boxShadow: "0 10px 30px rgba(0,0,0,.55)",
                ...sx,
            }}
        >
            <Typography variant="body2" fontWeight={600} mb={2} sx={{ fontSize: { xs: 14, sm: 15 } }}>
                {title}
            </Typography>

            <Stack spacing={1}>
                {alerts.map(({ color, label, icon }, i) => (
                    <AlertItem key={i} color={color} label={label} icon={icon} />
                ))}
            </Stack>

            <Box sx={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 1, color: "#cbd5e1" }}>
                <ChevronLeftIcon fontSize="small" />
                <ChevronRightIcon fontSize="small" />
            </Box>
        </Paper>
    );
}

// Main Component
export default function DataVerse() {
    return (
        <Box sx={{ p: { xs: 1, sm: 3, md: 4, lg: 6 } }}>
            {/* Header */}
            <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 4 }}>
                <Typography sx={{ 
                    fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.2
                }}>
                    Data verse
                </Typography>
                <Typography sx={{ 
                    fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                    color: "#cbd5e1",
                    mt: 0.5
                }}>
                    Learn about your users
                </Typography>
            </Box>
            

            {/* Main Container */}
            <Box
                sx={{
                    position: "relative",
                    mx: "auto",
                    maxWidth: 1440,
                    width: "100%",
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 4,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: "linear-gradient(180deg, rgba(20,35,75,1) 0%, rgba(3,12,31,1) 100%)",
                    boxShadow: "0 20px 60px rgba(0,0,0,.65)",
                    color: "white",
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: { xs: 3, sm: 4 },
                    alignItems: "flex-start",
                }}
            >

                {/* Close Button */}
                <IconButton
                    aria-label="close"
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor: "rgba(163,177,212,0.2)",
                        color: "white",
                        width: { xs: 28, sm: 32 },
                        height: { xs: 28, sm: 32 },
                        "&:hover": { bgcolor: "rgba(163,177,212,0.3)" },
                    }}
                >
                    <CloseIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
                </IconButton>

                {/* Left Content */}
                <Box sx={{ 
                    flex: 1, 
                    width: "100%",
                    textAlign: { xs: "left", md: "left" }
                }}>
                    {/* Main Title */}
                    <Typography
                        sx={{
                            fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                            lineHeight: 1.2,
                            fontWeight: 700,
                            mb: { xs: 2, sm: 3 },
                            wordWrap: "break-word",
                            overflowWrap: "break-word"
                        }}
                    >
                        Notifications or Alerts
                    </Typography>

                    {/* List Items */}
                    <Box
                        component="ul"
                        sx={{
                            listStyleType: "disc",
                            pl: { xs: 2, md: 3 },
                            mb: { xs: 3, sm: 4 },
                            fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                            lineHeight: 1.5,
                            '& li': { 
                                mb: { xs: 1.5, sm: 2 },
                                wordWrap: "break-word"
                            }
                        }}
                    >
                        <li>Critical alerts (e.g., lab results flagged, patient emergencies).</li>
                        <li>System reminders (e.g., "Follow-up overdue for Patient X").</li>
                    </Box>

                    {/* Chips */}
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mb: { xs: 2, sm: 3 } }}>
                        <Chip
                            label="Critical alerts in red"
                            sx={{
                                bgcolor: "#4b5563",
                                color: "white",
                                fontWeight: 600,
                                fontSize: { xs: 11, sm: 12, md: 13 },
                                height: { xs: 28, sm: 32 },
                                borderRadius: 2,
                                width: { xs: "fit-content", sm: "auto" }
                            }}
                        />
                        <Chip
                            label="Collapsable reminders"
                            sx={{
                                bgcolor: "#4b5563",
                                color: "white",
                                fontWeight: 600,
                                fontSize: { xs: 11, sm: 12, md: 13 },
                                height: { xs: 28, sm: 32 },
                                borderRadius: 2,
                                width: { xs: "fit-content", sm: "auto" }
                            }}
                        />
                    </Stack>

                    {/* Single Chip */}
                    <Chip
                        label="Use arrow to see more alerts"
                        sx={{
                            bgcolor: "#4b5563",
                            color: "white",
                            fontWeight: 600,
                            fontSize: { xs: 11, sm: 12, md: 13 },
                            height: { xs: 28, sm: 32 },
                            borderRadius: 2,
                            mb: { xs: 3, sm: 4 },
                            width: { xs: "fit-content", sm: "auto" }
                        }}
                    />

                    {/* Buttons */}
                    <Stack 
                        direction={{ xs: "column", sm: "row" }} 
                        spacing={2} 
                        sx={{ 
                            width: "100%",
                            justifyContent: { xs: "center", md: "flex-start" }
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                background: "linear-gradient(180deg, #2a6aff, #1b56f0)",
                                fontSize: { xs: 13, sm: 14, md: 15 },
                                fontWeight: 600,
                                borderRadius: 2,
                                width: { xs: "100%", sm: "auto" },
                                minWidth: { xs: "100%", sm: 140, md: 160 },
                                px: { xs: 2, sm: 3, md: 4 },
                                py: { xs: 1.25, sm: 1.5 },
                                textTransform: "none",
                                boxShadow: "0 10px 30px rgba(0,123,255,.35)",
                                whiteSpace: "nowrap",
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
                                fontSize: { xs: 13, sm: 14, md: 15 },
                                fontWeight: 600,
                                borderRadius: 2,
                                width: { xs: "100%", sm: "auto" },
                                minWidth: { xs: "100%", sm: 120, md: 140 },
                                px: { xs: 2, sm: 3, md: 4 },
                                py: { xs: 1.25, sm: 1.5 },
                                textTransform: "none",
                                whiteSpace: "nowrap",
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

                {/* Right Cards */}
                <Box sx={{ 
                    width: { xs: "100%", lg: "auto" },
                    display: "flex", 
                    flexDirection: { xs: "column", sm: "row", lg: "column" },
                    gap: { xs: 2, sm: 3 },
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <AlertsBox
                        title="Critical alerts"
                        alerts={[
                            { color: "#2a6aff", label: "Emergencies alert" },
                            { color: "#2a6aff", label: "Emergencies alert" },
                            { color: "#2a6aff", label: "Emergencies alert" },
                        ]}
                    />
                    <AlertsBox
                        title="Data to be replaced"
                        alerts={[
                            { color: "#cbd5e1", label: "Follow-up overdue", icon: "close" },
                            { color: "#cbd5e1", label: "Follow-up overdue", icon: "close" },
                            { color: "#cbd5e1", label: "Follow-up overdue", icon: "close" },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
}