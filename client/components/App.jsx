import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Services from './Services'
import About from './About'
import Work from './Work'
import Footer from './Footer'

function App(){

  return (
    <>
      <Header />
   
        <Home />
        <Services />
        <About />
        <Work />
  
      <Footer />
    </>
  )
}

export default App
