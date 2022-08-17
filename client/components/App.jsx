import React, { useState, useEffect } from 'react'

import Header from './Header'
import Home from './Home'
import Services from './Services'
import About from './About'
import Work from './Work'
import Footer from './Footer'

function App(){

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <About></About>
      <Work></Work>
      <Footer></Footer>
    </>
  )
}

export default App
