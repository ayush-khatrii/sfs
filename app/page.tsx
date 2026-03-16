import Footer from '@/components/Footer'
import HeroCarousel from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div className='h-500'>
      <HeroCarousel />
      <Services />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default page