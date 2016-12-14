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
```

## Options
Option | Type | Default value | Description
--- | --- | ---
hasImages | Boolean | false | If true, heightify will go through `imagesLoaded` and find the correct height with the images inside specified element. It also makes sure the heights are not set before all images are loaded.

## Dev
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

## Contribute
If you want to contribute, just clone the repo and make a pull request or file an issue:)
