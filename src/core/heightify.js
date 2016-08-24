'use strict'
import imagesLoaded from 'imagesloaded'

/**
  @param {object} obj - Check for isPlainObject
  @return {obj} obj
*/

function isObject(obj) {
  if (Array.isArray(obj)) {
    throw new Error(`Expected a plain object`)
  } else if (typeof obj === 'object') {
    return obj
  }
}

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
    if (!isObject(opts)) {
      throw new Error(`Expected '${opts}' to be an object.`)
    } else if (!opts.hasOwnProperty('element')) {
      throw new Error(`Heightify requires a DOM node to match the height with.`)
    } else if (typeof opts.element !== 'string') {
      throw new Error(`'${opts.element}' should be a type of string.`)
    }
  }

  maxNumberInArray(arr) {
    return Math.max.apply(Math, arr)
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
