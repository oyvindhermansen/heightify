# heightify

A module for setting the same heights on given element.

[![Build Status](https://travis-ci.org/oyvindhermansen/heightify.svg?branch=develop)](https://travis-ci.org/oyvindhermansen/heightify)

## Install
```
$ git clone https://github.com/oyvindhermansen/heightify.git
$ npm install
```

## Usage
```javascript
import heightify from 'heightify'

/**
* Sets all divs to the same height as the tallest div on the page
*/

heightify({
  element: 'div',
})

/**
* You can also pass a key called 'hasImages'.
* this will check wether your element contain images.
* If true, the heightify will run through imagesLoaded
* before setting the height. This will fix bug with a
* non-collapsing content.
*/

heightify({
  element: 'div',
  hasImages: true
})

```

## Dev
Currently no watch-flags or taskrunner for rapid development.
(Will implement before this merges to master)

When running dev, used use `$ npm run dev`,
and this will build new bundle and rebuild the
examples.

## Build:
For the heightify package itself:
`$ npm run build`

When testing the examples, run:
`$ npm run examples`

## Tests
* `$ npm test`
* `$ npm run test:watch`
