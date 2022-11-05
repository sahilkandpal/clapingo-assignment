import React from 'react'
import BookATrial from '../components/BookATrial'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import WhatWeOffer from '../components/WhatWeOffer'

function Home() {
  return (
    <div className="home_page">
        <HeroSection/>
        <BookATrial/>
        <WhatWeOffer/>
        <HowItWorks/>
    </div>
  )
}

export default Home