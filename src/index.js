'use strict'

import { warning } from './util/warning'

export const heightify = (element) => {
  if (!element) throw new Error('You need to set an element')
  const el = document.querySelectorAll(element)
  const storedHeights = []
  let largest

  for (let i = 0; i < el.length; i++) {
    storedHeights.push(el[i].clientHeight)
    largest = Math.max.apply(Math, storedHeights)
    el[i].style.height = `${largest}px`
  }
}
