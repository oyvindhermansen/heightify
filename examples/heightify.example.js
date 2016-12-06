(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var heightify = require('../lib/heightify').default
heightify('.lol', true)
heightify('.test')

},{"../lib/heightify":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//import imagesLoaded from 'imagesloaded'

/**
 SOME DESCRIPTION (helper)
*/
function saveHeights(elements) {
  var storedHeights = [];
  for (var i = 0; i < elements.length; i++) {
    storedHeights.push(elements[i].clientHeight);
  }
  return storedHeights;
}

/**
 SOME DESCRIPTION (helper)
*/
function findHeighestInArray(arr) {
  return Math.max.apply(Math, _toConsumableArray(arr));
}

/**
 SOME DESCRIPTION (helper)
*/
function allHeights(listOfHeights) {
  return saveHeights(listOfHeights).map(function (item) {
    return item;
  });
}

/**
 SOME DESCRIPTION (helper)
*/
function applyHeightsToElements(elements, tallestNum) {
  return elements.map(function (item, index) {
    return elements[index].style.height = tallestNum + 'px';
  });
}

/**
* Heightify - the function you run when you want to give
* the specified DOM-element the same heights as the tallest
* element defined.
* @param {any} element DOM node to apply the heights on
* @param {Boolean}
* @returns {Object} options with the values specified.
*/

function heightify(element, hasImages) {
  var elements = document.querySelectorAll(element);
  var elementsToArray = [].concat(_toConsumableArray(elements));
  var tallestElement = findHeighestInArray(allHeights(elementsToArray));

  if (!element) {
    throw new Error('You need to specify a DOM element ' + 'as a first argument to apply the height ' + 'with.');
  }

  if (hasImages) {
    if (typeof hasImages !== 'boolean') {
      throw new Error('The option of \'hasImages\' ' + 'is either true or false - and not ' + ('\'' + (typeof hasImages === 'undefined' ? 'undefined' : _typeof(hasImages)) + '\''));
    } else {
      /**
      * TODO this is currently working as if there are no images.
      * Need to handle this with imagesloaded or something.
      */
      applyHeightsToElements(elementsToArray, tallestElement);
    }
  } else {
    // no images
    applyHeightsToElements(elementsToArray, tallestElement);
  }

  return {
    element: element,
    hasImages: hasImages
  };
}

exports.default = heightify;
},{}]},{},[1]);
