import React from 'react'
import ClientsLogo from './ClientsLogo'
import Testimonial from './Testimonial'
import Footer from '../Footer/Footer'
import News from './News'
import ClientGrid from './ClientGrid'
import CallToAction from './CallToAction'

const InsightsComponent = () => {
  return (
    <>
    <ClientsLogo/>
    <ClientGrid/>
    <Testimonial/>
    <News/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default InsightsComponent