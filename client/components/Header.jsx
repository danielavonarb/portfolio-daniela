import React, { useState, useEffect } from 'react'

function Header(){
  const [navbarOpen, setNavbarOpen] = useState(false)


  function handleToggle(event){
    setNavbarOpen(!navbarOpen)
    // event.currentTarget.classList.toggle('nav-open');
    document.body.classList.toggle('nav-open')
    
    

  }
  return (
  
    <header className = {navbarOpen ? 'non_sticky' : null}>
      <div className = "logo">
        <img src = "images/devjane.png" id = "logo" alt=""></img>
      </div>
      <button onClick={handleToggle} className = "nav-toggle" aria-label = "toggle navigation">
      {/* <button onClick={handleToggle} className={navbarOpen ? 'nav-open-toggle' : 'nav-toggle'}> */}
        <span className = "hamburger"></span>
      </button>
      {/* <nav className = {navbarOpen ? 'nav-open-nav' : 'nav'}> */}
      <nav className = 'nav'>
        <ul className = "nav__list">
          <li className = "nav__item"><a href = "#home" className = "nav__link">Home</a></li>
          <li className = "nav__item"><a href = "#services" className = "nav__link">My Services</a></li>
          <li className = "nav__item"><a href = "#about" className = "nav__link">About Me</a></li>
          <li className = "nav__item"><a href = "#work" className = "nav__link">My Work</a></li>
        </ul>
      </nav>
    </header>
   
  )
}

export default Header

// onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}
// <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>

// <NavLink
//   to={link.path}
//   activeClassName="active-link"
//   onClick={() => closeMenu()}
//   exact
// >
//   {link.text}
// </NavLink>

// const closeMenu = () => {
//   setNavbarOpen(false)
// }



