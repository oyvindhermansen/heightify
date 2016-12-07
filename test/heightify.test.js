import { expect, assert } from 'chai'
import heightify from '../src/heightify'
import { findHeighestInArray, allHeights } from '../src/heightify'

describe('Heightify', () => {
  it('should be ok', () => {
    assert.isOk(heightify('div'), 'OK' )
    expect(heightify('div')).to.be.an('object')
  })

  it('should throw if heightify has no arguments defined', () => {
    expect(() => {
      heightify()
    }).to.throw(Error)
  })

  it('should throw if element contains no images', () => {
    expect(() => {
      heightify('div', 'set images to true')
    }).to.throw(Error)
  })
})
