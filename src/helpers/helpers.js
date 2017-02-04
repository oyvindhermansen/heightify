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
  const objType = typeof obj
  return !Array.isArray(obj) && objType === 'object'
}

/**
* @param {input} any
* @returns {Boolean}
*/

export function isNumber(input) {
  return typeof input === 'number'
}

/**
* @param {void}
* @returns {Boolean}
* This checks if the code is running production
* or development environment. If this returns false
* it will eliminate dead code such as warnings.
*/

export function devMode() {
  return typeof process !== 'undefined'
  && process.env.NODE_ENV !== 'production'
}
