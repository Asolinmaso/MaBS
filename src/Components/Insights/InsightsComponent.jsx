import React from 'react'
import ClientsLogo from './ClientsLogo'
import Testimonial from './Testimonial'
import Footer from '../Footer/Footer'
import News from './News'
import ClientGrid from './ClientGrid'
import CallToAction from './CallToAction'
import SmartReads from './SmartRead'

const InsightsComponent = () => {
  return (
    <>
    <ClientsLogo/>
    <ClientGrid/>
    <Testimonial/>
    <SmartReads/>
    <News/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default InsightsComponent