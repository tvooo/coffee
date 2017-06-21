'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _type = require('../design/type.json');

var _type2 = _interopRequireDefault(_type);

var _colors = require('../design/colors.json');

var _colors2 = _interopRequireDefault(_colors);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/timvonoldenburg/projects/coffee/components/Logo.js';


var LogoSvg = function LogoSvg(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({
    width: '64',
    height: '104',
    viewBox: '0 0 64 104',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), _react2.default.createElement('g', {
    id: 'Page-1',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react2.default.createElement('g', {
    id: '120---iPhone',
    transform: 'translate(-28 -2)'
  }, _react2.default.createElement('g', {
    id: 'Logo',
    transform: 'translate(30 4)'
  }, _react2.default.createElement('path', {
    id: 'Triangle',
    stroke: '#000',
    strokeWidth: '4',
    strokeLinejoin: 'round',
    d: 'M30 46L60 0H0zM30 100c22 0 22-24 22-24H8s0 24 22 24z'
  }), _react2.default.createElement('path', {
    d: 'M30.123 53l-2.861 6.212c-.695 1.509.04 3.078 1.646 3.487 0 0 .796.252 1.215.252.42 0 .94-.199.94-.199 1.593-.446 2.353-2.052 1.706-3.565L30.123 53z',
    id: 'Path-3',
    fill: '#000'
  }), _react2.default.createElement('path', {
    d: 'M52.214 76h3.961A3.828 3.828 0 0 1 60 79.826a3.828 3.828 0 0 1-3.824 3.825H52',
    id: 'Path-6',
    stroke: '#000',
    strokeWidth: '4',
    strokeLinejoin: 'round'
  })))));
};

exports.default = function () {
  return _react2.default.createElement('div', { className: 'Logo', 'data-jsx': 2636937616,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'Link', 'data-jsx': 2636937616,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(LogoSvg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), ' ', _react2.default.createElement('h2', {
    'data-jsx': 2636937616,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'prototyping.coffee'))), _react2.default.createElement(_style2.default, {
    styleId: 2636937616,
    css: '.Logo[data-jsx="2636937616"] {}h2[data-jsx="2636937616"] {font-size: ' + _type2.default.sizes[1] + ';color: black;}.Link[data-jsx="2636937616"] {cursor: pointer;display:-webkit-flex; display:flex;align-items: center;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;}.Link[data-jsx="2636937616"]:hover h2[data-jsx="2636937616"] {text-decoration: underline;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFDSCw4QkFFTixDQUVHLDJCQUNxQyx1Q0FDMUIsYUFDZCxDQUVNLDhCQUNXLGdCQUNGLG1DQUNNLG9CQUNHLGtGQUN4QixDQUVlLDhEQUNhLDJCQUU1QiIsImZpbGUiOiJjb21wb25lbnRzL0xvZ28uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RpbXZvbm9sZGVuYnVyZy9wcm9qZWN0cy9jb2ZmZWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuLi9kZXNpZ24vdHlwZS5qc29uJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vZGVzaWduL2NvbG9ycy5qc29uJztcbmltcG9ydCBMb2dvU3ZnIGZyb20gJy4uL3N2Z3MvbG9nby5zdmcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nTG9nbyc+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGlua1wiPlxuICAgICAgICA8TG9nb1N2ZyAvPiA8aDI+cHJvdG90eXBpbmcuY29mZmVlPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuTG9nbyB7XG5cbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6ICR7dHlwb2dyYXBoeS5zaXplc1sxXX07XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cblxuICAgICAgLkxpbmsge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5MaW5rOmhvdmVyIGgyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=components/Logo.js */'
  }));
};