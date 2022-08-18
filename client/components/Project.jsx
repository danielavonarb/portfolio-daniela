import React from 'react'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import projectsData from '../data/projects'

function Project(){

  // const {id} = useParams()
  // const {image} = projectsData
  

  return (
    <section class = "intro">
        <h1 class ="section__title section__title--intro">The title <strong>of my project</strong></h1>
        <p class = "section__subtitle section__subtitle--intro">a short subtitle</p>
        <img src = "images/studio-ghibli.png" class = "intro__img" id = "indiv_portfolio_img" alt = "" />
    </section>
  )
}

export default Project