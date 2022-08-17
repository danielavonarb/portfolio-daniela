import React, { useState, useEffect } from 'react'

import Header from './Header'
import Home from './Home'
import Services from './Services'
import About from './About'
import Work from './Work'


function App(){

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <About></About>
      <Work></Work>
    </>
  )
}

export default App
