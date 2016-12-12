'use strict'
import imagesLoaded from 'imagesloaded'

/**
* @param {any} element
* @param {Function} callback
* containImages is checking wether if the images is complete
* run the callback.
* @returns {Function} callback
*/

function containsImages(element, callback) {
  imagesLoaded(element, (instance) => {
    console.log(instance)
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
      console.warn(
        `It looks like one or several images ` +
        `in your specified element is broken.`
      )
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
    }

  })
}

export default containsImages
