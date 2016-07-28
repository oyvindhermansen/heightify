'use strict'
import imagesLoaded from 'imagesloaded'
import isPlainObject from 'lodash/isPlainObject'

class Heightify {
  constructor(opts) {

    this.opts = ({
      element: null,
      hasImages: false,
    }, opts)

    this.el = document.querySelectorAll(this.opts.element)
    this.storedHeights = []

    this.throwError(opts.element, opts)
    this.init()
  }

  init() {
    if (this.opts.hasImages) {
      this.hasImages()
    } else {
      this.heightify()
    }
  }

  throwError(element, opts) {
    if (!isPlainObject(opts)) {
      throw new Error(`Expected '${opts}' to be an object.`)
    } else if (!element) {
      throw new Error(`Heightify requires a DOM node to match the height with.`)
    } else if (typeof element !== 'string') {
      throw new Error(`'${element}' should be a type of string.`)
    }
  }

  heightify() {
    let largest

    for (let i = 0; i < this.el.length; i++) {
      this.storedHeights.push(this.el[i].clientHeight)
    }

    this.storedHeights.map((number, index) => {
      largest = Math.max.apply(Math, this.storedHeights)
      this.el[index].style.height = `${largest}px`
    })

    return largest
  }

  hasImages() {
    imagesLoaded(this.opts.element, () => {
      this.heightify()
    })
  }
}

export const heightify = opts => new Heightify(opts)
