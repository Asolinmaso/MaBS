// src/Components/Layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Navbar from '../Navbar/Navbar'
import Custom_Navbar from '../Custom_Navbar/Custom_Navbar'

const MainLayout = () => {
  return (
    <>
      <Custom_Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default MainLayout
