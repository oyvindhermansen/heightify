'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heightify = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _imagesloaded = require('imagesloaded');

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  @param {object} opts - The settings for heightify
*/

var Heightify = function () {
  function Heightify(opts) {
    _classCallCheck(this, Heightify);

    this.opts = ({
      element: null,
      hasImages: false
    }, opts);

    this.el = document.querySelectorAll(this.opts.element);
    this.storedHeights = [];

    this.checkOpts(opts);
    this.checkElement(this.opts.element);
    this.init();
  }

  _createClass(Heightify, [{
    key: 'init',
    value: function init() {
      if (this.opts.hasImages) {
        this.hasImages();
      } else {
        this.heightify();
      }
    }
  }, {
    key: 'checkOpts',
    value: function checkOpts(opts) {
      if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object') {
        throw new Error('Expected \'' + opts + '\' to be an object.');
      }
    }
  }, {
    key: 'checkElement',
    value: function checkElement(element) {
      if (!element) {
        throw new Error('Heightify requires a DOM node to match the height with.');
      } else if (typeof element !== 'string') {
        throw new Error('\'' + element + '\' should be a type of string.');
      } else {
        return element;
      }
    }
  }, {
    key: 'heightify',
    value: function heightify() {
      var _this = this;

      var largest = void 0;

      for (var i = 0; i < this.el.length; i++) {
        this.storedHeights.push(this.el[i].clientHeight);
      }

      this.storedHeights.map(function (number, index) {
        largest = Math.max.apply(Math, _this.storedHeights);
        _this.el[index].style.height = largest + 'px';
      });

      return largest;
    }
  }, {
    key: 'hasImages',
    value: function hasImages() {
      var _this2 = this;

      (0, _imagesloaded2.default)(this.opts.element, function () {
        _this2.heightify();
      });
    }
  }]);

  return Heightify;
}();

var heightify = exports.heightify = function heightify(opts) {
  return new Heightify(opts);
};
