import mediumZoom from 'medium-zoom'

export default img => {
  document.querySelectorAll(img).forEach(el => !el.closest('a') && el.classList.add('kusi-doc-zoom'))

  mediumZoom('.kusi-doc-zoom', {
    margin: 20,
    background: 'hsla(0,0%,100%,.85)'
  })
}
