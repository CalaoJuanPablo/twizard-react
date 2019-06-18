import React from 'react'
import Navigation from './Navigation'
import './Header.css'

function Header(props) {
  return (
    <header className="Header">
      <figure className="logo">
        <img src="" alt="Twizard" />
      </figure>
      <Navigation />
    </header>
  )
}

export default Header