// src/Components/Layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Custom_Navbar from '../Custom_Navbar/Custom_Navbar'
import AnimatedCursor from 'react-animated-cursor';

const MainLayout = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={35}
        innerScale={0}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          backgroundImage: 'url(/public/cursor.png)',
          backgroundSize: 'cover',
          cursor: 'none'
        }}
      />
      <Custom_Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default MainLayout
