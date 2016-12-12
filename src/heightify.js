import imagesLoaded from 'imagesloaded'

/**
* @param {Array} arr
* @returns {Number} - the heighest
* integer in given array
*/

function findHeighestInArray(arr) {
  return Math.max(...arr)
}

/**
* @param {Array} listOfHeights
* @returns {any} - mapped items of listOfHeights
*/

function allHeights(listOfHeights) {
  return saveHeights(listOfHeights).map(item => item)
}

/**
* @param {Object} obj
* @returns {Boolean}
*/

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
  imagesLoaded(element, (instance) => {
    if (instance.images.length === 0) {
      console.warn(
        `It seems like you are setting the images option ` +
        `to true, when imagesLoaded cannot find any images. ` +
        `Consider turning off the 'hasImages' option or ` +
        `make sure your images are loading correctly.`
      )
    }

    if (instance.hasAnyBroken) {
      console.log('----- ONE OR MORE IS BROKEN ------')
    }

    if (instance.isComplete) {
      console.log('----- INSTANCE IS COMPLETE -----')
      if (callback) {
        console.log('----- CALLBACK EXISTS -----')
        if (typeof callback !== 'function') {
          throw new Error(
            `You are specifying the callback as '${typeof callback}'. ` +
            `Please define a function instead.`
          )
        }
        console.log('----- HEIGHT IS APPLYED -----')
        return callback()
      }
    } else {
      console.log('---IMAGES WERE NOT COMPLETE FOR SOME REASON----')
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

  if (!isObject(opts)) {
    throw new Error(
      `Argument specified for heightify is not a ${typeof opts}. ` +
      `Please use object with the keys 'element' and 'hasImages'.`
    )
  }

  if (!opts.hasOwnProperty('element')) {
    throw new Error(
      `You need to specify a DOM element ` +
      `as a first object key for specifying ` +
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
      console.log('---- IMAGES FOUND -----')
      containsImages(
        opts.element,
        () => {
          applyHeightsToElements(
            newStateOfElements,
            tallestElement
          )
        }
      )
    }
  } else {
    console.log('---- NO HASIMAGES SPECIFIED -----')
    // No images found. Run this the normal way.
    applyHeightsToElements(newStateOfElements, tallestElement)
  }

  return opts
}


export default heightify
