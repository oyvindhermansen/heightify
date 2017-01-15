/**
* TODO: This needs documentation
**/

function destroyOnSize(size) {
  const windowWidth = window.innerWidth
  if (size) {
    if (typeof size !== 'number') {
      throw new Error(
        `Expecting "size" to be an integer.`
      )
    }
    if (windowWidth > size) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

export default destroyOnSize
