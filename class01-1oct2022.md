## Javascript can be used to create-
- Web/mobile apps
- Realtime networking apps
- Commandline tools
- Browser games

### javascript runs on browser or node:
browser has a javascript engine like,
- *in firefox: spiderMonkey*
- *in chrome: v8*

### Node is a c++ program that includes google's javascript engine!
**advantage:** 
Now javascript can be run outside of a browser in a command line interface, and can build backend for our apps for web and mobile
*browser and node both provide runtime env for js code.*

### ECMAScript Vs JavaScript:
- ECMA is a specification and Javascript is a programming language
- ECMA defines standards

### ECMA releases:
- 1st 1997
- in 2015 es2015/es6 (includes a lot of ground breaking changes)

### Tips for writing in javascript:
**write on the bottom of the body section in html file.**
*reason:*
- the browser will load the body first which is a good practice, site becomes faster as a result
- in order to be able to use js on the elements first it needs to be present or rendered! before js code is rendered

### How to write Javascript in html file:
- If Js code is in external file then src points the file path with extension. Below code need to be included inside body tag of the HTML file.
`<script src="mewmew.js" type="text/javascript"></script>`
- If Js code needs to be in the same HTML file then-
*`<script src="mewmew.js" type="text/javascript">`*
*`Js codes here`*
*`</script>`*