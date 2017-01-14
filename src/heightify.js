'use strict'
import { findHeighestInArray, isObject } from './helpers/helpers'
import containsImages from './containsImages'
import destroyOnSize from './destroyOnSize'

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
  let storedHeights = []
  elements.map((index, item) => {
    storedHeights.push(elements[item].clientHeight)
  })
  return storedHeights
}

/**
* @param {any} elements
* @param {number} tallestNum
* @return the mapped item of elements with the tallestNum
* as inline height.
*/

function applyHeightsToElements(elements, tallestNum) {
  return elements.map((item, index) => {
    return elements[index].style.height = `${tallestNum}px`
  })
}

/**
* @param {number} size
* @param {any} elements
* @param {number} tallestElement
* @return {function} applyHeightsToElements -
* This function returns and render the heights
* on each element, and at the same time, checks
* wether a destroyOnSize is specified.
*/

function render(size, elements, tallestElement ) {
  if (!destroyOnSize(size)) {
    return applyHeightsToElements(
      elements,
      tallestElement
    )
  }
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
  const {
    element,
    hasImages,
    destroyOnSize,
  } = opts

  const elementsToArray = [...element]
  const tallestElement = findHeighestInArray(allHeights(elementsToArray))
  const newStateOfElements = elementsToArray

  if (!newStateOfElements.length) {
    throw new Error(
      `You are trying to set equal heights to the ` +
      `DOM-node '${element}', which does not exists. ` +
      `Please check your code for possible spelling error.`
    )
  }

  if (!isObject(opts)) {
    throw new Error(
      `Argument specified for heightify is ` +
      `not a ${typeof opts}. Please use an object instead.`
    )
  }

  if (!opts.hasOwnProperty('element')) {
    throw new Error(
      `You need to set a DOM element ` +
      `as an object key for specifying ` +
      `which elements you want the same heights on.`
    )
  }

  if (hasImages) {
    if (typeof hasImages !== 'boolean') {
      throw new Error(
        `The option of 'images' ` +
        `is either true or false - and not ` +
        `'${typeof hasImages}'`
      )
    } else {
      // Images exists in specified element
      containsImages(
        element,
        () => {
          /**
          * This is initiatet again with another
          * constant definition to recalculate
          * the correct heights with images inside.
          */
          const calculatedTallestElementWithImage = findHeighestInArray(
            allHeights(elementsToArray)
          )

          return render(
            opts.destroyOnSize,
            newStateOfElements,
            calculatedTallestElementWithImage
          )
        }
      )
    }
  } else {
    // No images found. Run this the normal way.
    return render(
      destroyOnSize,
      newStateOfElements,
      tallestElement
    )
  }

  return opts
}


export default heightify
