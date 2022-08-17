import React from 'react'

import { Link } from 'react-router-dom'

function Footer(){
  return (
    <footer class = "footer">
      <a href="mailto:daniela.vonarb@gmail.com" class="footer__link">daniela.vonarb@gmail.com</a>
      <ul class="social-list">
        <li class="social-list__item"><a class="social-list__link" href="https://twitter.com"><i class = "fab fa-twitter"></i></a></li>
        <li class="social-list__item"><a class="social-list__link" href="https://github.com"><i class = "fab fa-github"></i></a></li>
      </ul>
    </footer>
  )
}

export default Footer