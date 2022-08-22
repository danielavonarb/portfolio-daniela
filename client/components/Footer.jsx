import React from 'react'

function Footer(){
  return (
    <footer className = "footer">
      <a href="mailto:daniela.vonarb@gmail.com" className="footer__link">daniela.vonarb@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item"><a className="social-list__link" target="_blank" href="https://www.linkedin.com/in/daniela-von-arb-203a3a90/"><i className = "fab fa-linkedin"></i></a></li>
        <li className="social-list__item"><a className="social-list__link" target="_blank" href="https://github.com/danielavonarb"><i className = "fab fa-github"></i></a></li>
      </ul>
    </footer>
  )
}

export default Footer