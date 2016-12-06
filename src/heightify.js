import imagesLoaded from 'imagesloaded'

function containsImages(element, callback) {
  return imagesLoaded(element, (instance) => {
    if (instance.complete) {
      if (callback && typeof callback === 'function') {
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

function findHeighestInArray(arr) {
  return Math.max(...arr)
}

function allHeights(listOfHeights) {
  return saveHeights(listOfHeights).map(item => item)
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
        `The option of 'hasImages' ` +
        `is either true or false - and not ` +
        `'${typeof hasImages}'`
      )
    } else {
      /**
      * TODO This is bugging, and text is not collapsing.
      * Need to handle this properly with imagesloaded.
      */
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
