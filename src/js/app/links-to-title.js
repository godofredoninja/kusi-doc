export default jsSelector => {
  const markdown = document.querySelector(jsSelector)

  if (!markdown) return

  const argTitles = ['h1', 'h2', 'h3']
  const titles = markdown.querySelectorAll(argTitles.join(','))

  titles.forEach(el => {
    el.classList = 'hover-title'

    const titleLink = document.createElement('a')
    titleLink.href = `#${el.getAttribute('id')}`
    titleLink.setAttribute('aria-hidden', 'true')
    titleLink.innerHTML = '<svg class="fill-current w-5 h-5" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>'
    titleLink.classList = 'anchor px-3 inline-block invisible opacity-0 -ml-10 text-gray-500'

    el.insertBefore(titleLink, el.childNodes[0])
  })
}
