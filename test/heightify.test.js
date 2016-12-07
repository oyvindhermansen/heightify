import { expect, assert } from 'chai'
import heightify from '../src/heightify'

describe('Heightify', () => {
  it('should return correct values when specifying element', () => {
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    expect(
      heightify('div')
    ).to.equal(
      {
        element: 'div',
        hasImages: false
      }
    )
  })
})
