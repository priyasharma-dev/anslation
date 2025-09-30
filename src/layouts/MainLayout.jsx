import React from 'react'
import Header from '../components/home/header/Header'
import Footer from '../components/home/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Ellipse81 } from '../gradient/gradienttop'
import Always from '../components/home/stayupdate/Always'

function MainLayout() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        fontFamily: "sans-serif",
        background: "black",
        position: "relative", 
        overflow: "hidden",
      }}>
        <Header/>
        <Ellipse81/>
        <div>
            <Outlet/>
        </div>
        <div>
            <Always/>
        <Footer/>
        </div>
        
    </div>
  )
}

export default MainLayout