import React from 'react';
import Header from '../components/home/header/Header';
import Footer from '../components/home/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Ellipse81 } from '../gradient/gradienttop';
import Always from '../components/home/stayupdate/Always';

const GUTTER = 'clamp(16px, 6vw, 48px)';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    background: 'black',  // Keeps background color black
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100dvh',
    width: '100vw',  // Ensure the width is full screen
    margin: 0,  // Remove any margin on body or outer container
    padding: 0,  // Ensure no padding around the container
    ['--gutter']: GUTTER,
  },
  
  gutter: {
    paddingInline: 'var(--gutter)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',  // Ensures the content stretches fully across the screen
  },
  ellipseLayer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
  },
  main: {
    flex: 1,
    width: '100%',  // Ensure it stretches full width
    padding: 0,  // Remove any extra padding
  },
};

export default function MainLayout() {
  return (
    <div style={styles.app}>
      {/* Background (behind, untouchable) */}
      <div style={styles.ellipseLayer} aria-hidden="true">
        <Ellipse81 />
      </div>

      {/* Header */}
      <Header />

      {/* Main outlet */}
      <main style={{ ...styles.gutter, ...styles.content, ...styles.main }}>
        <Outlet />
      </main>

      {/* CTA + Footer */}
      <div style={styles.content}>
        <Always />
        <Footer />
      </div>
    </div>
  );
}

