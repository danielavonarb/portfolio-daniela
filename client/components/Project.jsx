import React, {useState} from 'react'

import { useParams } from 'react-router-dom'

function Project(props){
  const projectsData = props.projectsData
 

  const {id} = useParams()

  const project = projectsData.find((project) => id == project.id)
  const paragraphs = project.paragraphs
  const images = project.images
  const [index, setIndex] = useState(0)

function clickHandlerPrev(){
  const isFirstSlide = index === 0
  const newIndex = isFirstSlide ? images.length - 1 : index - 1
  setIndex(newIndex)
}

function clickHandlerNext(){
  const isLastSlide = index === images.length - 1
  const newIndex = isLastSlide ? 0 : index + 1
  setIndex(newIndex)
}

  return (
    <>
    <section className = "intro">
      <h1 className ="section__title section__title--intro"><a className="project-link" target="_blank" href={project.link}><strong>{project.title}</strong></a></h1>
      <p className = "section__subtitle section__subtitle--intro">{project.subtitle}</p>
      <a className='intro__img__link' target="_blank" href={project.link}><img src={"../images/" + project.image} className = "intro__img" id = "indiv_portfolio_img" alt = ""></img></a>
    </section>

    <div className="portfolio-item-individual">
      {paragraphs.map((p) => {
        return (
          <p>{p}</p>
        )
      })}

      <div className = "carousel">
        <button onClick={clickHandlerPrev} className = "carousel__button--prev">Prev</button>
        <div className = "carousel__track-container">
          <img className = "carousel__track__slide" src={"../images/" + project.images[index]} alt="" />
        </div>
        <button onClick={clickHandlerNext} className = "carousel__button--next">Next</button>
      </div>
        {/* <a href = "/#work" className = "back-btn">Back</a> */}
      </div>

    </>
  )
}

export default Project