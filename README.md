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

heightify({
  element: document.querySelectorAll('div'),
  hasImages: true, // uses imagesLoaded
  destroyOnSize: 500
})

/**
* This also works great with jQuery selectors.
**/

```

## Options

The only required key for heightify is `element`.
The rest is optional.

* hasImages
* destroyOnSize

### Example on how it works with cards
![alt tag](examples/example.png)

### Development
`$ npm run dev`
This will run on both src/ and examples/

### Build:
For production:
`$ npm run build`

### Tests
* `$ npm test`
* `$ npm run test:watch`

### Contribute
If you want to contribute, just clone the repo and make a pull request or file an issue:)
