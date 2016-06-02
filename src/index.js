'use strict'

export default function heightify(element) {
  if (!element) throw new Error('You need to set an element')
  const el = document.querySelectorAll(element)
  const storedHeights = []
  let largest

  for (let i = 0; i < el.length; i++) {
    storedHeights.push(el[i].clientHeight)
  }

  storedHeights.map((number, index) => {
    largest = Math.max.apply(Math, storedHeights)
    el[index].style.height = `${largest}px`
  })

  return largest
}
