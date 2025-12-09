import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  DarkMode,
  ArrowDropDown,
  Menu,
  Close,
  LightMode,
} from "@mui/icons-material";
import { Ellipse81 } from "../../../gradient/gradienttop";
import { Link as RouterLink, useNavigate} from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import DarkModeIcon from "../../../assets/icons/DarkMode.svg";

const siteBg = "#0A1929";
const navItems = ["Products", "Solutions", "Resources"];

export default function Header() {
  const [themeMode, setThemeMode] = useState("Dark");
   const [mobileOpen, setMobileOpen] = useState(false);
   const navigate = useNavigate();

 const changeThemeMode = () => {
  setThemeMode((prev) => (prev === "Dark" ? "Light" : "Dark"));
};

  useEffect(() => {
    const root = document.documentElement; 

    if (themeMode === "Light") {
      root.style.backgroundColor = "#ffffff";
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    } else {
      root.style.backgroundColor = "#0A1929";
      document.body.style.backgroundColor = "#0A1929";
      document.body.style.color = "#ffffff";
    }
  }, [themeMode]);

  const isDesktop = useMediaQuery("(min-width:960px)");
  const isTabletUp = useMediaQuery("(min-width:600px)");
  const isMobile = useMediaQuery("(max-width:599.98px)");
  const isDark = themeMode === "Dark";

  const handleDrawerToggle = () => setMobileOpen((v) => !v);

  const showBackground = mobileOpen;
 const handleProductsClick = () => {
    navigate("/", { state: { openProducts: true } });
  };
  return (
    <>
      {/* Show background only when the navbar or drawer is toggled */}
      {showBackground && (
        <Box sx={{ position: "absolute", inset: 0, zIndex: -1 }}>
          <Ellipse81 />
        </Box>
      )}

      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          zIndex: 100,
          px: 2,
          py: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", xl: 1440 },
            mx: { xs: 0, md: "auto" },
            px: { xs: 1, sm: 3, md: 4, lg: 2, xl: 2 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: { xs: 56, sm: 64 },
              width: "100%",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pl:16,
                height: "100%",
              }}
            >
              <RouterLink
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    "& img": {
                      height: { xs: 40, sm: 50, md: 55, lg: 60 },
                      width: "auto",
                      maxWidth: { xs: 100, sm: 110, md: 115, lg: 120 },
                    },
                  }}
                >
                  <img
                    src={logo}
                    alt="logo"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </RouterLink>
            </Box>

            {/* Nav Links (desktop) */}
            <Box
              sx={{
                display: isDesktop ? "flex" : "none",
                gap: { md: 2, lg: 3 },
                flexGrow: 1,
                justifyContent: "center",
             fontFamily:`"Helvetica Neue",sans-serif`,
                pl:12,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  endIcon={<ArrowDropDown fontSize="small" />}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    alignItems: "center",
                    fontSize: { md: "20px", lg: "22px" },
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: "transparent" },
                    minWidth: "auto",
                    
                  }}
                  onClick={item === "Products"?handleProductsClick :undefined}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Right actions */}
            <Box
              sx={{
                display: isTabletUp ? "flex" : "none",
                gap: { sm: 0.5, md: 1 },
                alignItems: "center",
                flexShrink: 0,
                pr:12,
              }}
            >
             {/* JOIN US (desktop text link) */}
              <Button
                component={RouterLink}
                to="/join-us" 
                sx={{
                  fontFamily:`"Helvetica Neue",sans-serif`,
                  textTransform: "none",
                  color: "#FFFFFF",
                  fontSize: { sm: "0.8rem", md: "1.13rem" },
                  fontWeight: 500,
                  px: { sm: 1, md: 1.5 },
                  minWidth: "auto",
                  letterSpacing:"0.2px",
                  background: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: 4,
                  },
                }}
              >
                Join us
              </Button>

               {/* CONTACT US */}
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "999px",
                 px: { sm: 2.8, md: 3.4 },
                 py: { sm: 0.8, md: 1 },
                 fontSize: { sm: "0.9rem", md: "1.13rem" },
                 fontWeight: 500,
                 fontFamily:`"Helvetica Neue",sans-serif`,
                 background:
                   "linear-gradient(126deg, #2A65CC 0%, #42B4D1 100%)",
                 color: "#FFFFFF",
                 border: "1px solid rgba(255,255,255,0.85)",
                //  boxShadow: "0 0 26px rgba(0, 122, 255, 0.85)",
                 whiteSpace: "nowrap",
                 "&:hover": {
                   background:
                     "linear-gradient(126deg, #3B74D5 0%, #54C6E3 100%)",
                   boxShadow: "0 0 32px rgba(0, 155, 255, 0.95)",
                 },
                }}
                component={RouterLink}
                to="/contact"
              >
                Contact Us
              </Button>

              {/* THEME TOGGLE */}
              <Button 
              onClick={changeThemeMode}
              sx={{
                 ml: { sm: 0.5, md: 1 },
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 gap: 0.75, 
                 borderRadius: "999px",
                 fontFamily:`"Helvetica Neue",sans-serif`,
                 px: { sm: 2.6, md: 3 },
                 py: { sm: 0.85, md: 0.95 },
                 minWidth: "auto",
                 textTransform: "none",
                 background: isDark
                ? "linear-gradient(126deg, #2A65CC 0%, #42B4D1 100%)"
               : "linear-gradient(126deg, #1D3F80 0%, #2F7690 100%)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow:
                 "0 0 20px rgba(0, 122, 255, 0.65), 0 0 45px rgba(0, 122, 255, 0.45)",
                color: "#FFFFFF",
                "&:hover": {
                  background: isDark
                    ? "linear-gradient(126deg, #3B74D5 0%, #54C6E3 100%)"
                    : "linear-gradient(126deg, #275097 0%, #3998AA 100%)",
                  boxShadow:
                    "0 0 26px rgba(0, 155, 255, 0.85), 0 0 55px rgba(0, 155, 255, 0.55)",
                },
              }}
              >
                {isDark ? (
                  <img src={DarkModeIcon} alt="Dark Mode" style={{ width: 27, height: 27 }}
                  />
                ) : (
                  <LightMode sx={{ fontSize: 18, color: "#FFFFFF" }} />
                )}
                 
                  <Typography
                    sx={{
                      ml: { sm: 0.5, md: 1 },
                      fontSize: { sm: "0.8rem", md: "0.95rem" },
                      display: { sm: "none", md: "inline" },
                    }}
                  >
                    {themeMode}
                  </Typography>
             
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              sx={{
                display: isDesktop ? "none" : "flex",
                color: "white",
                ml: 1,
                width: 44,
                height: 44,
                borderRadius: "9999px",
                transition:
                  "transform .2s ease,background .2s ease,box-shadow .2s ease", 
                transform: mobileOpen ? "rotate(180deg)" : "none",
                ...(mobileOpen && {
                  backgroundColor: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 8px 24px rgba(0,0,0,.35)",
                }),
              }}
              onClick={handleDrawerToggle}
              size="large"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileOpen ? (
                <Close htmlColor="#fff" />
              ) : (
                <Menu htmlColor="#fff" />
              )}
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      {!isDesktop && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: "block",
            "@media (min-width:960px)": { display: "none" },
            "& .MuiDrawer-paper": {
              backgroundColor: siteBg,
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
              color: "white",
              width: { xs: "80vw", sm: "60vw" },
              p: 0,
              overflowX: "hidden",
              // boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            },
          }}
          ModalProps={{ keepMounted: true }}
        >
          {/* 1) CLOSE BUTTON — place this as the FIRST child */}
          <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Close navigation"
              sx={{
                color: "#fff",
                width: 40,
                height: 40,
                borderRadius: "9999px",
                backgroundColor: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,.35)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.45)" },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* glow */}
          <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <Box
              sx={{
                position: "absolute",
                right: "-30%",
                top: "-20%",
                width: "180%",
                height: "140%",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0,81,255,0.48) 49.04%, rgba(0,111,255,0) 100%)",
                opacity: 0.45,
                filter: "blur(38px)",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              pt: { xs: 6, sm: 8 },
              px: { xs: 1.5, sm: 2 },
            }}
          >
            <List
              sx={{
                width: "100%",
                py: 0,
                "& .MuiListItemButton-root": {
                  my: 0.8,
                  borderRadius: 1.5,
                  px: 1.5,
                },
              }}
            >
              {navItems.map((item) => (
                <ListItemButton
                  key={item}
                  onClick={() => {
                    handleDrawerToggle();
                    if (item === "Products") {
                      setTimeout(() => {
                        handleProductsClick();
                      }, 200);
                    }
                  }}
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    py: { xs: 1.2, sm: 1.4 },
                    borderRadius: 1,
                    mx: 0.5,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: { xs: "16px", sm: "18px" },
                    }}
                  />
                </ListItemButton>
              ))}
              <Divider sx={{ my: { xs: 1, sm: 1.5 }, opacity: 0.25 }} />

              {/* Join us — on MOBILE & TABLET (<960px) */}
              <ListItemButton
                onClick={handleDrawerToggle}
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  py: { xs: 1, sm: 1.5 },
                  borderRadius: 1,
                  mx: 0.5,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemText
                  primary="Join us"
                  primaryTypographyProps={{
                    fontSize: { xs: "16px", sm: "18px" },
                  }}
                />
              </ListItemButton>

              {isMobile && (
                <ListItemButton
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    py: { xs: 1, sm: 1.5 },
                    borderRadius: 1,
                    mx: 0.5,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <ListItemText
                    primary="Contact"
                    primaryTypographyProps={{ fontSize: { xs: "16px" } }}
                  />
                </ListItemButton>
              )}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
}
