import React from "react";
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
} from "@mui/material";
import { DarkMode, ArrowDropDown, Menu } from "@mui/icons-material";
import { Ellipse81 } from "../../../gradient/gradienttop";
import { Link as RouterLink } from "react-router-dom";

const navItems = ["Products", "Solutions", "Resources"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width:960px)");
  const isTabletUp = useMediaQuery("(min-width:600px)");
  const isMobile = useMediaQuery("(max-width:599.98px)");

  const handleDrawerToggle = () => setMobileOpen((v) => !v);
  const handleMenuToggle = () => setMenuOpen((v) => !v);

  const showBackground = mobileOpen || menuOpen;

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
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <RouterLink
                to="/"
                style={{ display: "flex", alignItems: "center", textDecoration: "none", cursor: "pointer" , }}
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
                  <img src="./logo/logo.png" alt="logo" style={{ objectFit: "contain" }} />
                </Box>
              </RouterLink>
            </Box>

            {/* Nav Links */}
            <Box
              sx={{
                display: isDesktop ? "flex" : "none",
                gap: { md: 2, lg: 3 },
                flexGrow: 1,
                justifyContent: "center",
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
                    fontSize: { md: "18px", lg: "20px" },
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: "transparent" },
                    minWidth: "auto",
                  }}
                  onClick={handleMenuToggle}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Right actions */}
            <Box
              sx={{
                display: isTabletUp ? "flex" : "none",
                gap: { sm: 1, md: 2 },
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "9999px",
                  textTransform: "none",
                  fontSize: { md: "16px" },
                  px: { md: 2 },
                  display: { sm: "flex", md: "flex" },
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#0A1929",
                  },
                  ml: { sm: 1 },
                }}
              >
                Contact
              </Button>

              <IconButton
                sx={{
                  border: "1px solid white",
                  borderRadius: "9999px",
                  color: "white",
                  px: { sm: 1, md: 2 },
                  py: { sm: 0.5, md: 1 },
                  boxShadow: "0 0 20px #0B3BFF",
                  "&:hover": { boxShadow: "0 0 30px #0B3BFF" },
                  display: { sm: "flex", md: "flex" },
                  minWidth: "auto",
                }}
                size="small"
                aria-label="toggle dark mode"
              >
                <DarkMode fontSize="small" />
                <Typography
                  sx={{
                    ml: { sm: 0.5, md: 1 },
                    fontSize: { sm: "0.875rem", md: "1rem" },
                    display: { sm: "none", md: "inline" },
                  }}
                >
                  Dark
                </Typography>
              </IconButton>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              sx={{ display: isDesktop ? "none" : "flex", color: "white", ml: 1 }}
              onClick={handleDrawerToggle}
              size="large"
              aria-label="open navigation"
            >
              <Menu />
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
              backgroundColor: "transparent",
              boxShadow: "none",
              color: "white",
              width: { xs: "80vw", sm: "60vw" },
              p: { xs: 1.5, sm: 2 },
              overflowX: "hidden",
            },
          }}
          ModalProps={{ keepMounted: true }}
        >
          <Box sx={{ width: "100%" }}>
            <List sx={{ py: 0 }}>
              {navItems.map((item) => (
                <ListItemButton
                  key={item}
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
                    primary={item}
                    primaryTypographyProps={{ fontSize: { xs: "16px", sm: "18px" } }}
                  />
                </ListItemButton>
              ))}

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
                  primaryTypographyProps={{ fontSize: { xs: "16px", sm: "18px" } }}
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
                  <ListItemText primary="Contact" primaryTypographyProps={{ fontSize: { xs: "16px" } }} />
                </ListItemButton>
              )}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
}
