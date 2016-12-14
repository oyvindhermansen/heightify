/**
* @param {Array} arr
* @returns {Number} - the heighest
* integer in given array
*/

export function findHeighestInArray(arr) {
  return Math.max(...arr)
}

/**
* @param {Object} obj
* @returns {Boolean}
*/

export function isObject(obj) {
  var objType = typeof obj
  if (!Array.isArray(obj) && objType === 'object' ) {
    return true
  }
  return false
}
