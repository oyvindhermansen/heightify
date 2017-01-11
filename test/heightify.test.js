import chai, { expect, assert } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import heightify from '../src/heightify'
import destroyOnSize from '../src/destroyOnSize'

chai.use(sinonChai)

describe('Heightify', () => {
  describe('Error messages', () => {
    it('should be ok', () => {
      const el = document.createElement('div')
      const txt = document.createTextNode('hello world')
      el.appendChild(txt)
      document.body.appendChild(el)

      assert.isOk(heightify({element: 'div'}), 'OK' )
    })

    it('should throw if element doesnt exists in the DOM', () => {
      expect(() => {
        // Running normally - intended to work, but specifying a DOM-node
        // that doesnt exists for testing purposes
        heightify({ element: '.test', hasImages: true })
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

})
