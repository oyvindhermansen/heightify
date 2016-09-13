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
import { heightify } from 'heightify'

// sets all divs to the same height as the tallest div on the page
heightify({
  element: 'div',
  hasImages: true // Default is false
})
```
or if you would like to specify multiple elements, just define
the element key with an array of elements.
```javascript
heightify({
  element: [
    '.someClass',
    '.someOtherClass'
  ],
})
```
If `hasImages` is set to `true`, it will use `imagesLoaded` before applying
the height.

## Build:
For the heightify package itself:
`$ npm run build`

When testing the examples, run:
`$ npm run examples`

## Tests
* `$ npm test`
* `$ npm run test:watch`
