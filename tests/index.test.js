import { expect, assert } from 'chai'
import { heightify } from '../src/index'

describe('Heightify', () => {
/*
  it('Throw when element is not defined', () => {

    const heightifyWithoutDOMElement = heightify({})
    expect(heightifyWithoutDOMElement).to.throw('Heightify requires a DOM node to match the height with.')

  })
*/
  it('should be ok if element is defined', () => {
    const heightifyWithDOMElement = heightify({
      element: 'div'
    })
    assert.isOk(heightifyWithDOMElement, 'OK' )
  })

})
