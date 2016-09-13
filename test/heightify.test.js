import { expect, assert } from 'chai'
import { heightify } from '../src/heightify'
import isObject from '../src/utils/isObject'
import initialError from '../src/utils/initialError'

describe('Heightify', () => {
  describe('Utils', () => {
    describe('isObject', () => {
      it('should return true if object is passed, and false otherwise', () => {
        const obj = {}
        const array = []
        expect(isObject(obj)).to.be.true
        expect(isObject(array)).to.be.false
      })
    })
    describe('initialError', () => {
      it('should throw if heightify is not passed with an object as argument', () => {
        expect(initialError).to.throw(Error)
      })
    })
  })

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
      }).to.throw('Heightify requires a DOM node to match the height with. Please specify with the object key: \'element\'.')
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
