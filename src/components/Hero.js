import React from 'react'
import photoGrid from '../images/photo-grid.png'

function Hero() {
  return (
    <section className='hero'>
      <img src={photoGrid} alt="Photo grid." />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts --all without leaving home.</p>
    </section>
  )
}

export default Hero
