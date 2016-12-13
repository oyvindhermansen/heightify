'use strict'
import { findHeighestInArray, isObject } from './helpers/helpers'
import containsImages from './containsImages'

/**
* @param {Array} listOfHeights
* @returns {any} - mapped items of listOfHeights
*/

function allHeights(listOfHeights) {
  return saveHeights(listOfHeights).map(item => item)
}

/**
* @param {any} elements The elements you specify when
* running heightify.
* This function loops the current specified DOM elements
* and pushes the clientHeight into an array.
* @returns {Array} storedHeights The array which holds
* the heights of the DOM nodes.
*/

function saveHeights(elements) {
  const storedHeights = []
  for (let i = 0; i < elements.length; i++) {
    storedHeights.push(elements[i].clientHeight)
  }
  return storedHeights
}

/**
* @param {any} elements
* @param {Number} tallestNum
* @return the mapped item of elements with the tallestNum
* as inline height.
*/

function applyHeightsToElements(elements, tallestNum) {
  return elements.map((item, index) => {
    return elements[index].style.height = `${tallestNum}px`
  })
}

/**
* Heightify - the function you run when you want to give
* the specified DOM-element the same heights as the tallest
* element defined.
* @param {Object} opts - Specify which element you would
* like to set equally heights on with the key: `element`.
* @return {Object} opts - The object with the options specified.
*/

function heightify(opts = {}) {
  /**
  * Setting the initial settings to heightify
  */
  opts = ({
    element: null,
    hasImages: false
  }, opts)

  const elements = document.querySelectorAll(opts.element)
  const elementsToArray = [...elements]
  const tallestElement = findHeighestInArray(allHeights(elementsToArray))
  const newStateOfElements = elementsToArray

  console.log(elements)

  if (!newStateOfElements.length) {
    throw new Error(
      `You are trying to set equal heights to the ` +
      `DOM-node '${opts.element}', which does not exists. ` +
      `Please check your code for possible spelling error.`
    )
  }

  if (!isObject(opts)) {
    throw new Error(
      `Argument specified for heightify is not a ${typeof opts}. ` +
      `Please use object with the keys 'element' and 'hasImages'.`
    )
  }

  if (!opts.hasOwnProperty('element')) {
    throw new Error(
      `You need to set a DOM element ` +
      `as an object key for specifying ` +
      `which elements you want the same heights on.`
    )
  }

  if (opts.hasImages) {
    if (typeof opts.hasImages !== 'boolean') {
      throw new Error(
        `The option of 'images' ` +
        `is either true or false - and not ` +
        `'${typeof opts.hasImages}'`
      )
    } else {
      // Images exists in specified element
      containsImages(
        opts.element,
        () => {
          /**
          * This is initiatet again with another
          * constant definition to recalculate
          * the correct heights with images inside.
          */
          const calculatedTallestElementWithImage = findHeighestInArray(
            allHeights(elementsToArray)
          )

          return applyHeightsToElements(
            newStateOfElements,
            calculatedTallestElementWithImage
          )
        }
      )
    }
  } else {
    // No images found. Run this the normal way.
    return applyHeightsToElements(newStateOfElements, tallestElement)
  }

  return opts
}


export default heightify
