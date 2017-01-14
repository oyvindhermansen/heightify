import imagesLoaded from 'imagesloaded'

/**
* @param {any} element
* @param {Function} callback
* containImages is checking if the
* images is complete, then run the callback.
* @returns {Function} callback
*/

function containsImages(element, callback) {
  imagesLoaded(element, (instance) => {
    /**
    * Checking if the instance actually contains any images.
    * If not, run console.warn
    *
    * TODO: Only warn in development mode
    */
    if (instance.images.length === 0) {
      console.warn(
        `It seems like you are setting the images option ` +
        `to true, when imagesLoaded cannot find any images. ` +
        `Consider turning off the 'hasImages' option or ` +
        `make sure your images are loading correctly.`
      )
    }

    /**
    * Checking if the images inside your specified elements
    * is broken. If one or some are, run console.warn
    *
    * TODO: Only warn in development mode
    */
    if (instance.hasAnyBroken) {
      console.warn(
        `It looks like one or several images ` +
        `in your element is broken.`
      )
    }

    /**
    * Checking if the images inside your specified elements
    * is done loading. If they are, return the callback
    */
    if (instance.isComplete) {
      if (callback) {
        if (typeof callback === 'function') {
          return callback()
        }
      }
    }
  })
}

export default containsImages
