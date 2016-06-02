'use strict'

export const heightify = (element) => {
  if (!element) throw new Error('You need to set an element')
  const el = document.querySelectorAll(element)
  const storedHeights = []
  let largest

  for (let i = 0; i < el.length; i++) {
    storedHeights.push(el[i].clientHeight)
  }

  largest = Math.max.apply(Math, storedHeights)

  for (let j = 0; j < el.length; j++) {
    el[j].style.height = `${largest}px`
  }
  return largest
}
