import React from 'react'
import HeroSection from './HeroSection'
import Portfolio from './Portfolio'
import Services from './Services'
import Package from './Package'
function Home() {
  return (
    <div>
      <section id='heroSection'>
        <HeroSection />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='package'>
        <Package/>
      </section>
    </div>
  )
}

export default Home