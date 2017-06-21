'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _colors = require('../design/colors.json');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/timvonoldenburg/projects/coffee/components/Layout.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', { className: 'Layout', 'data-jsx': 3173016274,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), props.children, _react2.default.createElement(_style2.default, {
    styleId: 3173016274,
    css: '\n      @font-face {\n        font-family: \'sweden_sansregular\';\n        src: url(\'static/fonts/swedensans-webfont.eot\');\n        src: url(\'static/fonts/swedensans-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n             url(\'static/fonts/swedensans-webfont.woff2\') format(\'woff2\'),\n             url(\'static/fonts/swedensans-webfont.woff\') format(\'woff\'),\n             url(\'static/fonts/swedensans-webfont.ttf\') format(\'truetype\'),\n             url(\'static/fonts/swedensans-webfont.svg#sweden_sansregular\') format(\'svg\');\n        font-weight: normal;\n        font-style: normal;\n      }\n\n      @font-face {\n        font-family: \'sweden_sansregular\';\n        src: url(\'static/fonts/swedensansbold-webfont.eot\');\n        src: url(\'static/fonts/swedensansbold-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n             url(\'static/fonts/swedensansbold-webfont.woff2\') format(\'woff2\'),\n             url(\'static/fonts/swedensansbold-webfont.woff\') format(\'woff\'),\n             url(\'static/fonts/swedensansbold-webfont.ttf\') format(\'truetype\'),\n             url(\'static/fonts/swedensansbold-webfont.svg#sweden_sansregular\') format(\'svg\');\n        font-weight: bold;\n        font-style: normal;\n      }\n\n      body {\n        margin: 0;\n        padding: 2rem;\n        background-color: #f4f4f4;\n        background-color: ' + _colors2.default.gray[0] + ';\n        font-family: sweden_sansregular, sans-serif;\n        color: ' + _colors2.default.black + ';\n      }\n\n      button {\n        font-family: sweden_sansregular, sans-serif;\n      }\n\n      .Layout {\n        max-width: 1400px;\n        margin: 0 auto;\n      }\n    '
  }));
};

exports.default = Layout;