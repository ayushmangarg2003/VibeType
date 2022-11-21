import React from 'react'
import TypeWriter from 'typewriter-effect'
import './Landing.css'
import hero from '../../assets/hero.png'

const Landing = () => {
  return (
    <div className='landing-container'>
      <div data-aos="fade-right" className="landing-left">
        <h1 className='landing-heading'>Can You Type</h1>
        <div className="type-writer-container">
          <h1><TypeWriter
            options={{
              strings: ['Faster ?', 'Better ?'],
              autoStart: true,
              loop: true
            }} />
            </h1>
        </div>
      </div>
      <div data-aos="fade-left" className="landing-right">
        <img src={hero} alt="Vibe Hai" />
      </div>
    </div>
  )
}

export default Landing
