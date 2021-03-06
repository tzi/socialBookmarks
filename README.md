# Lightweight Social Bookmarks

«Lightweight Social Bookmarks» is a simple way to create Share buttons.

## Usage 

### HTML

```html
<nav id="share">
  <a href="http://twitter.com/?status={Title} {Link} via {@username}">Tweet</a>
  <a href="http://www.facebook.com/sharer/sharer.php?u={Link}">Share</a>
  <a href="https://plusone.google.com/_/+1/confirm?url={Link}">+1</a>
</nav>
```
### JavaScript

```js
document.socialBookmarks(container)
```

### Arguments 

* `container` : (`Element`) Links container (`nav#share` in the example)

### Note

You should wait for the DOM to be ready

## MIT License
Copyright (c) 2012, Matthias Le Brun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.