/**
* @param {object} obj - Check for isPlainObject
* @return {boolean}
*/

export default function isObject(obj) {
  var objType = typeof obj
  if (!Array.isArray(obj) && objType === 'object' ) {
    return true
  }
  return false
}
