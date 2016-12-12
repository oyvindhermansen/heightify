import { expect, assert } from 'chai'
import heightify from '../src/heightify'
import { findHeighestInArray, allHeights } from '../src/heightify'

describe('Heightify', () => {
  it('should be ok', () => {
    assert.isOk(heightify({element: 'div'}), 'OK' )
  })

  it('should throw if heightify has no arguments defined', () => {
    expect(() => {
      heightify()
    }).to.throw(Error)
  })

  it('should throw if heightify has wrong argument type defined', () => {
    expect(() => {
      heightify('yeeah')
    }).to.throw(Error)
  })

  it('should throw if hasImages contains wrong key type', () => {
    expect(() => {
      heightify({
        element: 'div',
        hasImages: 'this is an unwanted string'
      })
    }).to.throw(Error)
  })
})
