import React from 'react'

function Services(){
  return (
    <section className = "my-services" id = "experience">
      <h2 className = "section__title section__title--services">Experience</h2>
      <div className = "services">
        <div className = "service">
          <h3>Dev Academy Aotearoa Bootcamp</h3>
          <p>This was a 15 week full immersion software development bootcamp that mimics a real-life
            development team as closely as possible. The course taught us a modern web development stack
            with a strong emphasis on human skills, empathy, collaboration, and working in teams using agile
            methodology.</p>
          <p>During the bootcamp I spent over 600 hours working on a tech stack and developed skills through daily code challenges, pair-programming and contributing to weekly group
            projects. </p>
          <p>Discovered the power of Human Skills and how they can transform teams and culture in record time
            by creating an environment with high levels of psychological safety.</p>
        </div>
        <div className = "service">
          <h3>Skills</h3>
          <p><strong>Technical:</strong> JavaScript (ES6), React, Redux, Node.js, SQLite3, Knex, Express.js, Jest and Testing Library,
            RESTful APIs, HTML5, CSS3, Git, GitHub, Python, data analysis with R</p>
          <p><strong>Personal Qualities:</strong> self-starter, highly motivated, positive and proactive, calm under pressure, team
            player, empathetic, good listener, enhancing team culture, fluent in German and English, intermediate
            level in French</p>
          <h3>Self-study</h3>
          <p>Python for beginners | Data Analysis | Software Product Management | Agile Project Management | TypeScript | AWS | DevOps | Web Accessibility</p>
        </div>
      </div>
      <a href = "#work" className = "btn">My Work</a>
    </section>
  )
}

export default Services