import React from 'react'

import { Link } from 'react-router-dom'

function Work(props){
  const projectsData = props.projectsData

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my projects</p>
        
      <div className="portfolio">
        {projectsData.map((project) => {
          return (
            <div>
              <h4 className='project-title'>{project.title}</h4>
              <h5 className='project-subtitle'>{project.subtitle}</h5>
            <div className='portfolio__item' key={project.id}>
              <Link to={`/projects/${project.id}`}><img className='portfolio__img' src={"../images/" + project.image}/></Link>
            </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Work