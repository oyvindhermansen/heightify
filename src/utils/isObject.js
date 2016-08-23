'use strict'

function isObject(obj) {
  if (Array.isArray(obj)) {
    throw new Error(`Expected a plain object`)
  } else if (typeof obj === 'object') {
    return obj
  }
}

export default isObject
