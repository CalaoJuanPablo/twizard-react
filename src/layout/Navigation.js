import React from 'react'
import './Navigation.css'

function Navigation(props) {
  return (
    <nav className="Navigation">
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li className="new-twiz">New Twiz</li>
        <li>Notifications</li>
        <li>Profile</li>
      </ul>
    </nav>
  )
}

export default Navigation