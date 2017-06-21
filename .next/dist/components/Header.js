'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _H = require('./H');

var _H2 = _interopRequireDefault(_H);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/timvonoldenburg/projects/coffee/components/Header.js';

exports.default = function () {
  return _react2.default.createElement('div', { style: { margin: '2rem 0 4rem 0' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('div', { style: { display: 'none', justifyContent: 'space-between', marginTop: '4rem' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Coffee basics'), _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Brew methods'), _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Recipes')));
};