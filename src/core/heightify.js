import { findHeighestInArray, isObject } from '../helpers/helpers'
import containsImages from './containsImages'
import destroyOnSize from './destroyOnSize'

/**
* @param {any} elements The elements you specify when
* running heightify.
* This function loops the current specified DOM elements.
* @returns {array} mapped elements with clientHeight
*/

function getClientHeight(elements) {
  return elements.map((index, item) => {
    return elements[item].clientHeight
  })
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
* @param {object} opts - Specify which element you would
* like to set equally heights on with the key: `element`.
* @return {object} opts - The object with the options specified.
*/

function heightify(opts) {

  const {
    element,
    hasImages,
    destroyOnSize,
  } = opts

  const elementsToArray = [...element]
  const tallestElement = findHeighestInArray(getClientHeight(elementsToArray))
  const newStateOfElements = elementsToArray

  if (!newStateOfElements.length) {
    throw new Error(
      `You are trying to set equal heights ` +
      `to a DOM-node which does not exists. ` +
      `Please check your code for possible ` +
      `spelling error.`
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
      `Heightify is expecting the key ` +
      `"element" to calculate height from.`
    )
  }

  if (hasImages) {
    if (typeof hasImages !== 'boolean') {
      throw new Error(
        `Expected "hasImages" to be a boolean value`
      )
    } else {
      // Images exists in specified element
      containsImages(
        element,
        () => {
          /**
          * redefine constant definition to recalculate
          * the correct heights with images inside.
          */
          const calculatedTallestElementWithImage = findHeighestInArray(
            getClientHeight(elementsToArray)
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
