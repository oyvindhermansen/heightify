/**
  @param {object} obj - Check for isPlainObject
  @return {object} obj
*/

function isObject(obj) {
  if (Array.isArray(obj) || typeof obj !== 'object') {
    throw new Error('Expected a plain object')
  }
  return obj
}

export default isObject
