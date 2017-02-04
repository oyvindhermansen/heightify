import { isNumber, devMode } from '../helpers/helpers'

/**
* @param {number} size - This is the size of
* the screen width.
* @return {boolean}
**/

export default function destroyOnSize(size) {
  const windowType = typeof window
  const windowWidth = window.innerWidth

  if (windowType === 'undefined') {
    if (devMode()) {
      console.warn(
        `Window is undefined. Make sure you are in ` +
        `a browser environment when using heightify ` +
        `with the "destroyOnSize" option.`
      )
    }
  }

  if (!size) {
    return false
  }

  if (!isNumber(size)) {
    throw new Error(
      `Expected the value of destroyOnSize ` +
      `to be an integer.`
    )
  }

  return size > windowWidth
}
