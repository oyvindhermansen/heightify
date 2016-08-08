import { expect, assert, should } from 'chai'
import { heightify } from '../src/index'

describe('Heightify', () => {

  it('should be ok if element is defined', () => {
    const heightifyWithDOMElement = heightify({
      element: 'div'
    })
    assert.isOk(heightifyWithDOMElement, 'OK' )
  })


  it('should throw if argument is not an object', () => {
    expect(() => {
      heightify('some options')
    }).to.throw('Expected \'some options\' to be an object.')
  })

  it('should throw when element is not defined', () => {
    expect(() => {
      heightify({})
    }).to.throw('Heightify requires a DOM node to match the height with.')
  })

  it('should throw when element is not a string', () => {
    expect(() => {
      heightify({element: ['div']})
    }).to.throw('\'div\' should be a type of string.')
  })

})
