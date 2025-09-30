import React from 'react'
import AboutSection from '../components/Aboutus/AboutSection'
import Header from '../components/home/header/Header'
import { Ellipse81 } from '../gradient/gradienttop'
import { Box } from '@mui/material'
import WeAre from '../components/Aboutus/WeAre'
import AnslationPillar from '../components/Aboutus/AnslationPillar'
import OurTeam from '../components/Aboutus/OurTeam'
import Always from '../components/home/stayupdate/Always'
import Footer from '../components/home/footer/Footer'

const About = () => {
  return (
  <>
  <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative", 
        overflow: "hidden",
      }}
  >
      <AboutSection/>
      <WeAre/>
      <AnslationPillar/>
      <OurTeam/>
  </Box>
  </>
  )
}

export default About
