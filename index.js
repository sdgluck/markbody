const marked = require('marked')
const stripIndent = require('strip-indent')

const css = `
/*Original highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>*/
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #F0F0F0;
}


/* Base color: saturation 0; */

.hljs,
.hljs-subst {
  color: #444;
}

.hljs-comment {
  color: #888888;
}

.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-doctag,
.hljs-name {
  font-weight: bold;
}


/* User color: hue: 0 */

.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #880000;
}

.hljs-title,
.hljs-section {
  color: #880000;
  font-weight: bold;
}

.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #BC6060;
}


/* Language color: hue: 90; */

.hljs-literal {
  color: #78A960;
}

.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #397300;
}


/* Meta color: hue: 200 */

.hljs-meta {
  color: #1f7199;
}

.hljs-meta-string {
  color: #4d99bf;
}


/* Misc effects */

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}`

const defaults = {
  root: document.body,
  marked: {
    highlight: (code) => {
      return require('highlight.js').highlightAuto(code).value
    }
  }
}

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
  const options = Object.assign({},
    defaults,
    window.markbody
  )

  if (!options.root) {
    throw new Error('expecting options.root to be string or HTMLElement')
  }

  if (typeof options.root === 'string') {
    options.root = document.querySelector(options.root)
    if (!options.root) {
      throw new Error(`did not find element with query "${options.root}"`)
    }
  }

  insertStyle()
  marked.setOptions(options.marked)
  options.root.innerHTML = marked(stripIndent(options.root.innerHTML))
}

document.addEventListener('DOMContentLoaded', markbody)
