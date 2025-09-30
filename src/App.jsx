import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";


function Contact() {
  return <h1>About h</h1>;
}

function App() {
  return (
    <Router>
      <Box>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route element={<MainLayout/>} >
          <Route path="/about" element={<About />} />        
          <Route path="/contact" element={<Contact/>}/>
          </Route>

        </Routes>
      </Box>
    </Router>
  );
}

export default App;
