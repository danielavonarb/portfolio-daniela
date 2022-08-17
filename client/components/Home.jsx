import React from 'react'

import { Link } from 'react-router-dom'

function Home(){
  return (
    <section className = "intro" id = "home">
        <h1 className ="section__title section__title--intro">Hi, I am <strong>Daniela von Arb</strong></h1>
        <p className = "section__subtitle section__subtitle--intro">full-stack dev</p>
        <img src = "images/me2.jpeg" className = "intro__img" alt = ""></img>
    </section>
  )
}

export default Home