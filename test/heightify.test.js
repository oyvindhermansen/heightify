import { expect, assert } from 'chai'
import { heightify } from '../src/heightify'

describe('Heightify', () => {

  describe('error messages', () => {

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

  describe('Main functionality', () => {

    it('should find the tallest number in array', () => {
      const h = heightify({element: 'div', hasImages: true})
      const fakeArray = [100, 400, 1000, 2, 5, 200, 232]
      expect(h.maxNumberInArray(fakeArray)).to.equal(1000)
    })
  })

})