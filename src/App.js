import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './App.css'

function App(props) {
  return (
    <React.Fragment>
      <Header />
      <h1>I am in the app</h1>
      <Footer />
    </React.Fragment>
  )
}

export default App