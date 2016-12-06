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

heightify('div')

/**
* You can also pass a second argument: true/false.
* this will check wether your element contain images.
* If true, the heightify will run through imagesLoaded
* before setting the height. This will fix bug with a
* non-collapsing image.
*/

heightify('div', true)

```

## Build:
For the heightify package itself:
`$ npm run build`

When testing the examples, run:
`$ npm run examples`

## Tests
* `$ npm test`
* `$ npm run test:watch`
