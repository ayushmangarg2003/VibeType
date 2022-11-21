import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className="nav-left">
        <img src={logo} className='logo' alt="Logo" />
        <p className="logo-text">VibeType</p>
      </div>
      <div className="nav-right">
        <a href="https://github.com/ayushmangarg2003" target= "_black"><li>Github</li></a>
        <a href="https://twitter.com/AyushmanGarg4" target= "_black"><li>Twitter</li></a>
        <a href="https://www.linkedin.com/in/ayushmangarg/" target= "_black"><li>LinkedIn</li></a>
      </div>
    </div>
  )
}

export default Nav
