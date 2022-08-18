import React from 'react'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Project(props){
  const projectsData = props.projectsData

  // const {id} = useParams()
  // const {image} = projectsData


  const {id} = useParams()
  console.log(id)

  const project = projectsData.find((project) => id == project.id)
  

  return (
    <>
    <section className = "intro">
        <h1 className ="section__title section__title--intro">{project.title}</h1>
        <p class = "section__subtitle section__subtitle--intro">{project.subtitle}</p>
        <img src={"../images/" + project.image} class = "intro__img" id = "indiv_portfolio_img" alt = ""></img>

    </section>

  <div class="portfolio-item-individual">
  <p>{project.paragraphs}</p>

  <div class = "carousel">
      <button class = "carousel__button--prev">Prev</button>
      <div class = "carousel__track-container">
          <img class = "carousel__track__slide" src={"../images/" + project.image} alt="" />
      </div>
      <button class = "carousel__button--next">Next</button>
  </div>

  <h3><a href={project.link}>{project.title}</a></h3>
  </div>
  </>

    
  )
}

export default Project