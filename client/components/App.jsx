import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Services from './Services'
import About from './About'
import Work from './Work'
import Project from './Project'
import Footer from './Footer'

import projectsData from '../data/projects'

function App(){

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<div><Home/><Services/><About/><Work projectsData={projectsData}/></div>} />
          <Route path='/projects/:id' element={<Project projectsData ={projectsData} />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
