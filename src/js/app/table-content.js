/* global tocbot */

import loadscript from './load-script'

export default box => {
  const jsTableContent = document.querySelector(box)

  if (!jsTableContent) return

  loadscript('https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.10.1/tocbot.min.js', () => {
    tocbot.init({
      tocSelector: box,
      contentSelector: '.js-markdown',
      hasInnerContainers: true,
      linkClass: 'toc-link',
      extraLinkClasses: 'px-2 py-1 text-gray-600 border-l-2 border-transparent my-1 font-medium block hover:text-gray-900 -mx-2',
      activeLinkClass: 'is-active-link border-l-2 border-blue-500 text-gray-900',
      collapsibleClass: 'ml-2'
    })
  })
}
