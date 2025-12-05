import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Career from "./pages/Career";
import CareerProfile from "./components/Career/CareerProfile";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Culture from "./pages/Culture";
import Gradiant from "./gradient/gradiant";
import CenterAnimation from "./gradient/centerAnimation";
import Contact from "./pages/Contact";
import Form from "./Admin/Form";

// import CenterAnimation from "./gradient/centerAnimation";

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route element={<MainLayout/>} >
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />   
          <Route path="/career" element={<Career/>} />
          <Route path="/career/:id" element={<CareerProfile/>} />
          <Route  path="/product" element={<Product/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogDetail/>}/>
          <Route path="/culture" element={<Culture/>}/>
          <Route path="/contact" element={<Contact/>} />
          
        
          </Route>
          
          <Route path="/gradiant" element={<Gradiant />} />
          <Route path="/animation" element={<CenterAnimation />} />
          <Route path="/admin/form" element={<Form/>} />
          
          

          {/* {Footer Routes} */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
