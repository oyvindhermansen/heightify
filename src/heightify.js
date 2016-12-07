import imagesLoaded from 'imagesloaded'

function findHeighestInArray(arr) {
  return Math.max(...arr)
}

function allHeights(listOfHeights) {
  return saveHeights(listOfHeights).map(item => item)
}


function isObject(obj) {
  var objType = typeof obj
  if (!Array.isArray(obj) && objType === 'object' ) {
    return true
  }
  return false
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
      console.warn(
        `It seems like you are setting the images option ` +
        `to true, when imagesLoaded cannot find any images. ` +
        `Consider turning off the 'hasImages' option or make sure your ` +
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
* @param {Boolean} hasImages
* @returns {Object} options with the values specified.
*/

function heightify(opts = {}) {
  // needs check for plain Object
  opts = ({
    element: null,
    hasImages: false
  }, opts)

  const elements = document.querySelectorAll(opts.element)
  const elementsToArray = [...elements]
  const tallestElement = findHeighestInArray(allHeights(elementsToArray))

  if (!isObject(opts)) {
    throw new Error(
      `Argument specified for heightify is not a ${typeof opts}. ` +
      `Please use object with the keys 'element' and 'hasImages'.`
    )
  }

  if (!opts.element) {
    throw new Error(
      `You need to specify a DOM element ` +
      `as a first argument to apply the height ` +
      `with.`
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
      containsImages(
        opts.element,
        () => {
          applyHeightsToElements(
            elementsToArray,
            tallestElement
          )
        }
      )
    }
  } else {
    // No images found. Run this the normal way.
    applyHeightsToElements(elementsToArray, tallestElement)
  }

  return opts
}


export default heightify
