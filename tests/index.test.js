import { expect } from 'chai'
import { heightify } from '../src/index'

describe('Heightify', () => {
  it('should return a number', () => {
    expect(heightify('div')).to.be.a('number')
  })
  /*
  it('should set all divs to same height dispite different heights to begin with', () => {
    const heights = ['100', '50', '20', '50']

    for (let i = 0; i < heights.length; i++) {
      const divs = document.createElement('div')
      divs.style.height = `${heights[i]}px`

      console.log(heights[i])
    }
    heightify('div')
    expect(heightify('div')).to.equal(100)
  })
  */
})
