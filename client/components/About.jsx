import React from 'react'

function About(){
  return (
    <section className = "about-me" id = "about">
      <h2 className = "section__title section__title--about">Who I am</h2>
      <p className = "section__subtitle section__subtitle--about">Web Developer based out of Wānaka</p>

      <div className = "about-me__body">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat possimus nemo perferendis eius neque! Cumque, vero. Ratione in et aspernatur a modi provident voluptate explicabo ipsam, illum quibusdam beatae repudiandae quod eaque commodi fugit facilis itaque officiis fuga iure repellat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates laborum saepe officia officiis quos exercitationem cumque quam repellendus id, explicabo perferendis excepturi quas dolore nobis nemo, neque labore nam consequuntur nulla? Dolorem modi aliquid, ullam fugiat delectus distinctio exercitationem.</p>
      </div>
      <img src = "images/me.jpg" className = "about-me__img" alt=""></img>
    </section>
  )
}

export default About