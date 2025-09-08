import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
} from "@mui/material";
import { DarkMode, ArrowDropDown } from "@mui/icons-material";

export default function Header() {
    return (
        <AppBar
            position="static"
            sx={{
                background: "transparent",
                boxShadow: "none",
                zIndex: 10,
                // width:"100%",
                px: 2,
                py: 4,
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                        src="./logo/logo.png"
                        alt="logo"
                        width="150"
                        height="65"
                    />
                </Box>

                {/* Nav Links */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 , ml: 20,}}>
                    {["Products", "Solutions", "Resources"].map((item) => (
                        <Button
                            key={item}
                            endIcon={<ArrowDropDown />}
                            sx={{ color: "white", textTransform: "none", alignItems: "center", fontSize: "20px" }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* Right actions */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    <Button sx={{ color: "white", textTransform: "none", fontSize: "20px" }}>Join us</Button>
                    <Button
                        variant="outlined"
                        sx={{
                            color: "white",
                            borderColor: "white",
                            borderRadius: "9999px",
                            textTransform: "none",
                            fontSize: "16px",
                            "&:hover": { backgroundColor: "white", color: "#0A1929", },
                        }}
                    >
                        Contact
                    </Button>
                    <IconButton
                        sx={{
                            border: "1px solid white",
                            borderRadius: "9999px",
                            color: "white",
                            px: 2,
                            boxShadow: "0 0 20px #0B3BFF",
                            "&:hover": { boxShadow: "0 0 30px #0B3BFF" },
                        }}
                    >
                        <DarkMode fontSize="small" />
                        <Typography sx={{ ml: 1, fontSize: "1rem" }}>Dark</Typography>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
    