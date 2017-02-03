import { isNumber } from '../helpers/helpers'

/**
* @param {number} size - This is the size of
* the screen width.
* @return {boolean}
**/

export default function destroyOnSize(size) {
  const windowWidth = window.innerWidth

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
