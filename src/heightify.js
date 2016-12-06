//import imagesLoaded from 'imagesloaded'

/**
 SOME DESCRIPTION (helper)
*/
function saveHeights(elements) {
  const storedHeights = []
  for (let i = 0; i < elements.length; i++) {
    storedHeights.push(elements[i].clientHeight)
  }
  return storedHeights
}

/**
 SOME DESCRIPTION (helper)
*/
function findHeighestInArray(arr) {
  return Math.max(...arr)
}

/**
 SOME DESCRIPTION (helper)
*/
function allHeights(listOfHeights) {
  return saveHeights(listOfHeights).map(item => item)
}

/**
 SOME DESCRIPTION (helper)
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
      * TODO this is currently working as if there are no images.
      * Need to handle this with imagesloaded or something.
      */
      applyHeightsToElements(elementsToArray, tallestElement)
    }
  } else {
    // no images
    applyHeightsToElements(elementsToArray, tallestElement)
  }

  return {
    element,
    hasImages
  }
}


export default heightify
