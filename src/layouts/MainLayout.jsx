import React from 'react'
import Header from '../components/home/header/Header'
import Footer from '../components/home/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Ellipse81 } from '../gradient/gradienttop'
import Always from '../components/home/stayupdate/Always'

const GUTTER = 'clamp(16px, 6vw, 48px)'

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    background: 'black',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100dvh',
  },
  
 gutter: { paddingInline: GUTTER },
  content: { position: 'relative', zIndex: 1 },
  ellipseLayer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
  },
  main: { flex: 1 },
}

export default function MainLayout() {
  return (
    <div style={styles.app}>
      {/* Background (behind, untouchable) */}
      <div style={styles.ellipseLayer} aria-hidden="true">
        <Ellipse81 />
      </div>

      {/* Header */}
      {/* <div style={{ ...styles.gutter, ...styles.content }}> */}
        <Header />
      {/* </div> */}

      {/* Main outlet */}
      <main style={{ ...styles.gutter, ...styles.content, ...styles.main }}>
        <Outlet />
      </main>

      {/* CTA + Footer */}
     
      <div style={{ ...styles.content }}>
      <Always />
      <Footer />
      </div>
    </div>
  )
}
