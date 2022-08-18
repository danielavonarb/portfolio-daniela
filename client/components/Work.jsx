import React from 'react'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import projectsData from '../data/projects'

function Work(){

  // const {id} = useParams()
  // const {image} = projectsData
  

  return (
    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
        
        <div className="portfolio">
          {projectsData.map((project) => {
            return (
              <div className='portfolio__item' key={project.id}>
               <img className='portfolio__img' src={"../images/" + project.image}/>
              </div>
            )
          })}
          {/* <a href="#" className="portfolio__item">
            <img src="images/portfolio-02.jpg" alt="" className="portfolio__img"></img>
          </a>
            
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-03.jpg" alt="" className="portfolio__img"></img>
          </a>
            
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-04.jpg" alt="" className="portfolio__img"></img>
          </a>
            
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-05.jpg" alt="" className="portfolio__img"></img>
          </a>
     
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-06.jpg" alt="" className="portfolio__img"></img>
          </a>
            
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-07.jpg" alt="" className="portfolio__img"></img>
          </a>
            
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-08.jpg" alt="" className="portfolio__img"></img>
          </a>
            
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-09.jpg" alt="" className="portfolio__img"></img>
          </a>
        
          <a href="#" className="portfolio__item">
            <img src="images/portfolio-10.jpg" alt="" className="portfolio__img"></img>
          </a> */}
        </div>
    </section>
  )
}

export default Work