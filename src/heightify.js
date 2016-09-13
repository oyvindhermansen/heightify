import imagesLoaded from 'imagesloaded'
import isObject from './utils/isObject'
import initialError from './utils/initialError'

/**
* Heightify - the function you run when you want to give
* the specified DOM-element the same heights as the tallest
* element defined.
* @param {object} opts - Specify which element you would
* like to set equally heights on with the key: `element`.
* @return {object} opts - The object with the options specified.
*/

class Heightify {
  constructor(opts = initialError()) {
    this.opts = ({
      element: null,
      hasImages: false,
    }, opts)

    this.el = document.querySelectorAll(this.opts.element)
    this.storedHeights = []

    this.handleErrorMessages(opts)
    this.init()
  }

  init() {
    if (this.opts.hasImages) {
      this.hasImages()
    } else {
      this.heightify()
    }
  }

  handleErrorMessages(opts) {
    if (!isObject(opts)) {
      throw new Error(`Expected '${opts}' to be an object.`)
    }

    if (!opts.hasOwnProperty('element')) {
      throw new Error(
        `Heightify requires a DOM node ` +
        `to match the height with. ` +
        `Please specify with the ` +
        `object key: 'element'.`
      )
    }
  }

  maxNumberInArray(arr) {
    return Math.max(...arr)
  }

  heightify() {
    for (let i = 0; i < this.el.length; i++) {
      this.storedHeights.push(this.el[i].clientHeight)
    }

    return this.storedHeights.map((number, index) => {
      this.el[index].style.height = `${this.maxNumberInArray(this.storedHeights)}px`
    })
  }

  hasImages() {
    imagesLoaded(this.opts.element, () => {
      this.heightify()
    })
  }
}

export const heightify = opts => new Heightify(opts)
