// src/Components/Layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import AnimatedCursor from 'react-animated-cursor'
import Navbar from '../Navbar/Navbar.jsx'
// Hide pointer (hand) cursor for all links and clickable elements
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    a, button, [role="button"], [tabindex], input[type="button"], input[type="submit"], input[type="reset"] {
      cursor: none !important;
    }
    *:hover {
      cursor: none !important;
    }
  `;
  document.head.appendChild(style);
}

const MainLayout = () => {
  return (
    <>
     /* <AnimatedCursor
        innerSize={0}
        outerSize={35}
        innerScale={0}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          backgroundImage: 'url(/public/cursor.png)',
          backgroundSize: 'cover',
          cursor: 'none', // Ensures all default cursors are hidden
          pointerEvents: 'none',
          linkselect: 'none'
        }}
        trailingSpeed={1}
      />*/
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default MainLayout
