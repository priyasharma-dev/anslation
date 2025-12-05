import React from 'react'
import Header from '../components/home/header/Header'
import Footer from '../components/home/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Ellipse81 } from '../gradient/gradienttop'
import Always from '../components/home/stayupdate/Always'

const GUTTER = 'clamp(16px, 6vw, 48px)';
const GRID_SIZE = "132px"; 

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    backgroundColor: '#020617',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100dvh',
    ['--gutter']: GUTTER,
    ["--grid-size"]: GRID_SIZE,
  },
  
 gutter: { paddingInline:'var(--gutter)'},

  content: { position: 'relative', zIndex: 2 },

  ellipseLayer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
  },

 gridOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '90vh', // adjust to match your hero height (or use '60vh', etc.)
    zIndex: 1,       // above gradient, below main content
    pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)
    `,
     backgroundSize: "var(--grid-size) var(--grid-size)",
      backgroundPosition: "center top",
    mixBlendMode: 'normal',
    opacity: 0.7,
  },

  main: { flex: 1,
     position: "relative",
    zIndex: 2,
   },
   sectionStack: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(96px, 12vh, 160px)", // <- even vertical gap between sections
  },
}

export default function MainLayout() {
  return (
    <div style={styles.app}>
      {/* Background (behind, untouchable) */}
      <div style={styles.ellipseLayer} aria-hidden="true">
        <Ellipse81 />
         <div style={styles.gridOverlay} />
      </div>

      {/* Header */}
      {/* <div style={{ ...styles.gutter, ...styles.content }}> */}
        <Header />
      {/* </div> */}

      {/* Main outlet */}
      <main style={{ ...styles.content, ...styles.main, paddingInline: 0 }}>
         <div style={styles.sectionStack}>
        <Outlet />
        </div>
      </main>

      {/* CTA + Footer */}
     
      <div style={{ ...styles.content }}>
      <Always />
      <Footer />
      </div>
    </div>
  )
}


