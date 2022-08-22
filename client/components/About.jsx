import React from 'react'

function About(){
  return (
    <section className = "about-me" id = "about">
      <h2 className = "section__title section__title--about">Who I am</h2>
      <p className = "section__subtitle section__subtitle--about">Developer based out of Wānaka, New Zealand</p>

      <div className = "about-me__body">
          <p>Kia ora! I’m a developer with a passion for learning and growing. Prior to changing careers and
            moving into tech, I have 10 years of experience as an Office Administrator/Executive Assistant gained
            in various industries. I have strong Human Skills and a talent for enhancing the team culture and
            bringing the best out of my team members. Team wellbeing and creating an environment with high
            psychological safety are important to me.</p>
          <p>I took a career break in 2021 because I felt I needed a long overdue change. The problem was that I
            didn’t really know what I wanted to do, so I signed up for Coursera and started learning. I loved it! I
            treated it as a full-time job and after completing many different courses, I discovered my passion for
            web development and luckily found out about the Dev Academy Bootcamp. I still remember how proud I felt after my first “Hello world!”. And working on my
            first website gave me so much joy. I also realised that I enjoy problem solving. In my previous career I
            developed excellent problem-solving skills. But solving problems in a web development context is so
            much more fun.</p>
      </div>
      <img src = "images/me.jpg" className = "about-me__img" alt=""></img>
    </section>
  )
}

export default About