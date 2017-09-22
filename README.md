<p><h1 align="center">markbody</h1></p>

<p align="center">Parse a webpage as markdown</p>

<p align="center">Made with ❤ at <a href="http://www.twitter.com/outlandish">@outlandish</a></p>
  
<p align="center">
    <a href="http://badge.fury.io/js/markbody"><img alt="npm version" src="https://badge.fury.io/js/markbody.svg" /></a>
</p>

<hr/>

Parse the body of a webpage as markdown and replace it with the result...

- easy peasy lemon squeezy
- uses default settings of [`marked`](https://github.com/chjj/marked)
- highlights code blocks with [`highlight.js`](https://highlightjs.org)

## Usage

```html
<!doctype html>
<html>
<head>
    <title>markbody</title>
    <script>
        window.markbody = {
          //query selector or element, defaults to document.body
          root: '#root',
          //your own options for `marked` here (override, not merged)
          marked: {}
        }
    </script>
    <script src="https://unpkg.com/markbody@1.0.2/dist/markbody.min.js"></script>
</head>
<body>
    <div id="root">
        # header1
        ## header2
        ```js
        var spongebob = 'squarepants'
        // comment
        ```
    </div>
</body>
</html>
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](github.com/sdgluck)

