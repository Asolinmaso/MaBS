// src/Components/Layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Navbar from '../Navbar/Navbar'
import Custom_Navbar from '../Custom_Navbar/Custom_Navbar'

const MainLayout = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={0} // Set innerSize to 0 to completely remove the inner cursor point
        outerSize={35}
        innerScale={0} // Ensure no scaling for the inner cursor
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
