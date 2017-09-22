const fs = require('fs')
const css = fs.readFileSync('./node_modules/highlight.js/styles/default.css', 'utf8')

function insertStyle () {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style');
  style.type = 'text/css'
  if (style.styleSheet){
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
  head.appendChild(style);
}

function markbody () {
  insertStyle()
  const marked = require('marked')
  const defaults = {
    highlight: (code) => require('highlight.js').highlightAuto(code).value
  }
  const options = Object.assign({}, defaults, window.markedOptions)
  marked.setOptions(options)
  document.body.innerHTML = marked(document.body.innerHTML)
}

document.addEventListener('DOMContentLoaded', markbody)
