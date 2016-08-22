'use strict'
import imagesLoaded from 'imagesloaded'

/**
  @param {object} opts - The settings for heightify
*/

class Heightify {
  constructor(opts) {
    this.opts = ({
      element: null,
      hasImages: false,
    }, opts)

    this.el = document.querySelectorAll(this.opts.element)
    this.storedHeights = []

    this.checkOpts(opts)
    this.checkElement(this.opts.element)
    this.init()
  }

  init() {
    if (this.opts.hasImages) {
      this.hasImages()
    } else {
      this.heightify()
    }
  }

  checkOpts(opts) {
    if (typeof opts !== 'object') {
      throw new Error(`Expected '${opts}' to be an object.`)
    }
  }

  checkElement(element) {
    if (!element) {
      throw new Error(`Heightify requires a DOM node to match the height with.`)
    } else if (typeof element !== 'string') {
      throw new Error(`'${element}' should be a type of string.`)
    } else {
      return element
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