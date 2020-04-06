/* global prismJs */

import loadScript from './app/load-script'
import galleryCard from './app/gallery-card'
import videoResponsive from './app/video-responsive'
import tableContent from './app/table-content'
import linksToTitle from './app/links-to-title'
import zoomImg from './app/medium-zoom'

const setup = () => {
  /* All Video Responsive
  /* ---------------------------------------------------------- */
  videoResponsive()

  /* Gallery Card
  /* ---------------------------------------------------------- */
  galleryCard()

  /* Table of Content for custom-kusi-doc.hbs
  /* ---------------------------------------------------------- */
  tableContent('.js-table-content')

  /* highlight prismjs
  /* ---------------------------------------------------------- */
  if (document.querySelectorAll('code[class*=language-]').length && typeof prismJs !== 'undefined') {
    loadScript(prismJs)
  }

  /* Add Link in the Title for custom-kusi-doc.hbs
  /* ---------------------------------------------------------- */
  linksToTitle('.post-kusi-doc .js-markdown')

  /* medium-zoom
  /* ---------------------------------------------------------- */
  zoomImg('.js-markdown img')

  /* Toggle Main Menu
  /* ---------------------------------------------------------- */
  const menuBurger = document.querySelector('.js-menu-burger')
  if (menuBurger) {
    menuBurger.addEventListener('click', e => {
      e.preventDefault()
      document.body.classList.toggle('has-menu')
    })
  }
}

window.addEventListener('load', setup)
