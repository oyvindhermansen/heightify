# heightify

A module for setting the same height on given element.

## Install
```
$ git clone https://github.com/oyvindhermansen/heightify.git
$ npm install
```
## Running

Locally:
`npm run dev` or `gulp`

Production:
`npm run build`

## Usage
```javascript
import { heightify } from 'heightify'

// sets all divs to the same height as the tallest
// div on the page
heightify('div')
```
