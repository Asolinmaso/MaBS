// src/Components/Layout/MainLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Navbar from '../Navbar/Navbar'

const MainLayout = () => {
  return (
    <>
    <Navbar></Navbar>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default MainLayout
