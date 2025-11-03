import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Career from "./pages/Career";
import CareerProfile from "./components/Career/CareerProfile";
import Product from "./pages/Product";
import Gradiant from "./gradient/gradiant";

import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CenterAnimation from "./gradient/centerAnimation";


function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:id" element={<CareerProfile />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Route>
          <Route path="/gradiant" element={<Gradiant />} />
          <Route path="/animation" element={<CenterAnimation />} />

          {/* {Footer Routes} */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
