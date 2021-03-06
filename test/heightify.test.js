import chai, { expect, assert } from 'chai'
import heightify from '../src/core/heightify'
import destroyOnSize from '../src/core/destroyOnSize'
import containsImages from '../src/core/containsImages'
import { findHeighestInArray, isObject, isNumber } from '../src/helpers/helpers'


describe('Heightify', () => {
  describe('Error messages', () => {
    it('should be ok', () => {
      const el = document.createElement('div')
      const txt = document.createTextNode('hello world')
      el.appendChild(txt)
      document.body.appendChild(el)

      assert.isOk(heightify(
        {
          element: document.querySelectorAll('div')
        }
      ), 'OK' )
    })

    it('should throw if element doesnt exists in the DOM', () => {
      expect(() => {
        // Running normally - intended to work, but specifying a DOM-node
        // that doesnt exists for testing purposes
        heightify({ element: document.querySelectorAll('.test'), hasImages: true })
      }).to.throw(Error)
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

    it('destroyOnSize should trow error if argument type is not a number', () => {
      expect(() => {
        destroyOnSize('500') // correct error because of string declaration of size
      }).to.throw(Error)
    })
  })

  describe('API', () => {
    describe('destroyOnSize', () => {
      it('destroyOnSize should return false if input is not given', () => {
        expect(destroyOnSize()).to.equal(false)
      })
    })
  })

  describe('Helpers', () => {
    describe('findHeighestInArray', () => {
      it('should return the highest integer inside array', () => {
        const array = [1, 400, 1034, 40, 11, 100]
        expect(findHeighestInArray(array)).to.equal(1034)
      })
    })
    describe('isObject', () => {
      it('should return true if input is plain object', () => {
        const plainObject = { key: 'value' }
        expect(isObject(plainObject)).to.equal(true)
      })

      it('should throw if not a plain object', () => {
        const notPlainObject = [{ key: 'value' }]
        expect(isObject(notPlainObject)).to.equal(false)
      })
    })
    describe('isNumber', () => {
      it('should return true if input type is number', () => {
        expect(isNumber(500)).to.equal(true)
      })

      it('should return false if input type is not a number', () => {
        expect(isNumber('wrongString')).to.equal(false)
      })
    })
  })
})
