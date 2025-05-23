// src/Components/Layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Navbar from '../Navbar/Navbar.jsx'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default MainLayout
