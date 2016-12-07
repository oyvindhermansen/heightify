/* @flow */

import imagesLoaded from 'imagesloaded'

function findHeighestInArray(arr) {
  return Math.max(...arr)
}

function allHeights(listOfHeights) {
  return saveHeights(listOfHeights).map(item => item)
}

/**
* @param {any} element
* @param {Function} callback
* containImages is checking wether if the images is complete
* run the callback.
* @returns {Function} callback
*/

function containsImages(element, callback) {
  return imagesLoaded(element, (instance) => {
    if (instance.images.length === 0) {
      throw new Error(
        `It seems like you are setting images option ` +
        `to true, when imagesLoaded cannot find any images. ` +
        `Consider turning off images option or make sure your ` +
        `images are loading correctly.`
      )
    }

    if (instance.isComplete) {
      if (callback) {
        if (typeof callback !== 'function') {
          throw new Error(
            `You are specifying the callback as '${typeof callback}'. ` +
            `Please define a function instead.`
          )
        }
        return callback()
      }
    }
  })
}

/**
* @param {any} elements The elements you specify when
* running heightify().
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

function applyHeightsToElements(elements, tallestNum) {
  return elements.map((item, index) => {
    return elements[index].style.height = `${tallestNum}px`
  })
}

/**
* Heightify - the function you run when you want to give
* the specified DOM-element the same heights as the tallest
* element defined.
* @param {any} element DOM node to apply the heights on
* @param {Boolean}
* @returns {Object} options with the values specified.
*/

function heightify(element, hasImages) {
  const elements = document.querySelectorAll(element)
  const elementsToArray = [...elements]
  const tallestElement = findHeighestInArray(allHeights(elementsToArray))

  if (!element) {
    throw new Error(
      `You need to specify a DOM element ` +
      `as a first argument to apply the height ` +
      `with.`
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
      containsImages(
        element,
        () => {
          applyHeightsToElements(
            elementsToArray,
            tallestElement
          )
        }
      )
    }
  } else {
    /**
    * No images found. Run this the normal way.
    */
    applyHeightsToElements(elementsToArray, tallestElement)
  }

  return {
    element,
    hasImages
  }
}


export default heightify
