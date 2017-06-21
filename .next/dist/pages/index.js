'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _H = require('../components/H');

var _H2 = _interopRequireDefault(_H);

var _colors = require('../design/colors.json');

var _colors2 = _interopRequireDefault(_colors);

var _recipes = require('../data/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/timvonoldenburg/projects/coffee/pages/index.js?entry';


var Chemex = function Chemex(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({
    width: '401',
    height: '655',
    viewBox: '0 0 401 655',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), _react2.default.createElement('g', {
    id: 'Page-1',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react2.default.createElement('g', {
    transform: 'translate(2 2)',
    id: 'Chemex',
    strokeWidth: '4'
  }, _react2.default.createElement('path', {
    d: 'M311.021 651c38.727 0 103.841-62.7 80.875-138.37l-97.092-212.528c-11.474-25.116-10.302-65.261 2.617-89.668l94.475-178.478c4.075-17.247-3.61-31.23-17.164-31.23H22.038C8.482.725.796 14.708 4.87 31.955l103.363 184.536c13.494 24.09 14.325 63.593 1.852 88.238L4.87 512.63C-19.03 595.851 55.75 651 94.475 651H311.02z',
    id: 'Caraffe',
    stroke: '#000',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }), _react2.default.createElement('path', {
    d: 'M93.807 364.124c-22.095-.073-32.457-16.369-23.138-36.41l20.535-44.16c7.22-15.527 6.909-40.55-.695-55.892l-18.947-38.23c-9.808-19.79.145-36.083 22.232-36.393l109.517-1.532 109.202 1.892c22.089.383 32.011 16.724 22.164 36.496l-18.826 37.801c-7.63 15.323-7.99 40.333-.794 55.879l20.654 44.619c9.278 20.043-1.105 36.291-23.193 36.291H203l-109.193-.361z',
    id: 'Handle',
    stroke: '#00FF4F',
    fill: '#00FF4F'
  }))));
};

var V60 = function V60(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({
    width: '339',
    height: '222',
    viewBox: '0 0 339 222',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), _react2.default.createElement('g', {
    id: 'Page-1',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react2.default.createElement('g', {
    transform: 'translate(-1 2)',
    id: 'V60',
    stroke: '#000',
    strokeWidth: '4'
  }, _react2.default.createElement('path', {
    d: 'M4.28 9.036C1.916 4.046 4.474 0 10.003 0h279.994c5.525 0 8.087 4.045 5.723 9.036L210 190h61.995a3.006 3.006 0 0 1 3.005 3v4c0 1.657-1.345 3-3.004 3H28.004A3.006 3.006 0 0 1 25 197v-4a3 3 0 0 1 3.005-3H90L4.28 9.036z',
    id: 'Body',
    strokeLinejoin: 'round'
  }), _react2.default.createElement('path', {
    id: 'Bottom',
    d: 'M75 200v18h150v-18'
  }), _react2.default.createElement('path', {
    d: 'M219.035 175.491s122.708-75.97 117.972-104.775c-4.737-28.805-61.38-12.566-61.38-12.566',
    id: 'Handle',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))));
};

var Icon = function Icon(_ref) {
  var Comp = _ref.Comp;
  return _react2.default.createElement('div', { className: 'Icon', 'data-jsx': 2945006181,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(Comp, { width: '40px', height: 'auto', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 2945006181,
    css: '#Chemex {stroke-width: 4px;}#Chemex #Handle {stroke: black !important;fill: white !important;}.Icon[data-jsx="2945006181"] {display: inline-block;height: 80px;width: 40px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUNRLFNBQW1CLGtCQUFFLENBQ0osaUJBQTBCLHlCQUF3Qix1QkFBRSxDQUNoRiw4QkFDaUIsc0JBQ1QsYUFDRCxZQUNiIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aW12b25vbGRlbmJ1cmcvcHJvamVjdHMvY29mZmVlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgSCBmcm9tICcuLi9jb21wb25lbnRzL0gnO1xuXG5pbXBvcnQgQ2hlbWV4IGZyb20gJy4uL3N2Z3MvY2hlbWV4LnN2Zyc7XG5pbXBvcnQgVjYwIGZyb20gJy4uL3N2Z3MvdjYwLnN2Zyc7XG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vZGVzaWduL2NvbG9ycy5qc29uJztcbmltcG9ydCByZWNpcGVzIGZyb20gJy4uL2RhdGEvcmVjaXBlcyc7XG5cbmNvbnN0IEljb24gPSAoe0NvbXB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiSWNvblwiPlxuICAgIDxDb21wIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cImF1dG9cIiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoI0NoZW1leCkgeyBzdHJva2Utd2lkdGg6IDRweDsgfVxuICAgICAgOmdsb2JhbCgjQ2hlbWV4KSA6Z2xvYmFsKCNIYW5kbGUpIHsgc3Ryb2tlOiBibGFjayAhaW1wb3J0YW50OyBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50OyB9XG4gICAgICAuSWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ2hlbWV4SWNvbiA9IEljb24oQ2hlbWV4KTtcbmNvbnN0IFY2MEljb24gPSBJY29uKFY2MCk7XG5cbmNvbnN0IFJlY2lwZUNhcmQgPSAoe1xuICByZWNpcGUsXG4gIGNoaWxkcmVuLFxufSkgPT4gKFxuICA8Q2FyZCBocmVmPXtgL2dlYXI/Z2Vhcj0ke3JlY2lwZS5tZXRob2QudG9Mb3dlckNhc2UoKX1gfSBjbGFzc05hbWU9XCJSZWNpcGVDYXJkXCI+XG4gICAgPGRpdj5cbiAgICAgIDxJY29uIENvbXA9e3JlY2lwZS5JY29ufSAvPlxuICAgICAgPGgyPnsgcmVjaXBlLm1ldGhvZCB9PC9oMj5cbiAgICAgIHtcbiAgICAgICAgcmVjaXBlLnJlY2lwZSAmJiA8cCBjbGFzc05hbWU9XCJDYXJkX19zdW1tYXJ5XCI+eyByZWNpcGUucmVjaXBlLnN1bW1hcnkgfTwvcD5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuQ2FyZF9fc3VtbWFyeSB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9DYXJkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+cHJvdG90eXBpbmcu4piV77iPPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPC9IZWFkPlxuICAgIHsvKiA8SD5MZWFybiBob3cgdG8gYnJldyBncmVhdCBjb2ZmZWU8L0g+XG4gICAgPEg+QnJldyBtZXRob2RzPC9IPlxuICAgIDxIPkZpa2E8L0g+XG4gICAgPEg+UMOldMOlcjwvSD4gKi99XG4gICAgey8qIDxwPlxuICAgICAgQnJld2luZ1xuICAgICAgRmlsdGVyXG4gICAgICBCbG9vbVxuICAgICAgRHJpcFxuICAgICAgQ29mZmVlXG4gICAgPC9wPiAqL31cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9wL0JSZmw0ZWZnY0xSL21lZGlhLz9zaXplPW1cIiAvPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3AvQk80YWtEd2dwRncvbWVkaWEvP3NpemU9bVwiIC8+XG4gICAgPHA+XG4gICAgICBHcmluZC4gUmluc2UuIEJsb29tLiBCcmV3LiBSZXBlYXQuXG4gICAgPC9wPlxuICAgIDxIPkJhc2ljczwvSD5cbiAgICA8cD5cbiAgICAgIEdyaW5kLCBXYXRlciwgVGVtcGVyYXR1cmUsIC4uLlxuICAgIDwvcD5cbiAgICA8SD5FcXVpcG1lbnQ8L0g+XG4gICAgPHA+XG4gICAgICBEcmlwcGVyLCBHcmluZGVyLCBTY2FsZSwgVGltZXJcbiAgICA8L3A+XG4gICAgPEg+UmVjaXBlczwvSD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlY2lwZXMpLm1hcChyZWNpcGUgPT4gPFJlY2lwZUNhcmQga2V5PXtyZWNpcGV9IHJlY2lwZT17cmVjaXBlc1tyZWNpcGVdfSAvPilcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FyZHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

var ChemexIcon = Icon(Chemex);
var V60Icon = Icon(V60);

var RecipeCard = function RecipeCard(_ref2) {
  var recipe = _ref2.recipe,
      children = _ref2.children;
  return _react2.default.createElement(_Card2.default, { href: '/gear?gear=' + recipe.method.toLowerCase(), className: 'RecipeCard', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 4187368228,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(Icon, { Comp: recipe.Icon, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('h2', {
    'data-jsx': 4187368228,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, recipe.method), recipe.recipe && _react2.default.createElement('p', { className: 'Card__summary', 'data-jsx': 4187368228,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, recipe.recipe.summary)), _react2.default.createElement(_style2.default, {
    styleId: 4187368228,
    css: '.Card__summary[data-jsx="4187368228"] {color: gray;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDZ0IsQUFDTSx1Q0FDRixZQUNiIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aW12b25vbGRlbmJ1cmcvcHJvamVjdHMvY29mZmVlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgSCBmcm9tICcuLi9jb21wb25lbnRzL0gnO1xuXG5pbXBvcnQgQ2hlbWV4IGZyb20gJy4uL3N2Z3MvY2hlbWV4LnN2Zyc7XG5pbXBvcnQgVjYwIGZyb20gJy4uL3N2Z3MvdjYwLnN2Zyc7XG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vZGVzaWduL2NvbG9ycy5qc29uJztcbmltcG9ydCByZWNpcGVzIGZyb20gJy4uL2RhdGEvcmVjaXBlcyc7XG5cbmNvbnN0IEljb24gPSAoe0NvbXB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiSWNvblwiPlxuICAgIDxDb21wIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cImF1dG9cIiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoI0NoZW1leCkgeyBzdHJva2Utd2lkdGg6IDRweDsgfVxuICAgICAgOmdsb2JhbCgjQ2hlbWV4KSA6Z2xvYmFsKCNIYW5kbGUpIHsgc3Ryb2tlOiBibGFjayAhaW1wb3J0YW50OyBmaWxsOiB3aGl0ZSAhaW1wb3J0YW50OyB9XG4gICAgICAuSWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ2hlbWV4SWNvbiA9IEljb24oQ2hlbWV4KTtcbmNvbnN0IFY2MEljb24gPSBJY29uKFY2MCk7XG5cbmNvbnN0IFJlY2lwZUNhcmQgPSAoe1xuICByZWNpcGUsXG4gIGNoaWxkcmVuLFxufSkgPT4gKFxuICA8Q2FyZCBocmVmPXtgL2dlYXI/Z2Vhcj0ke3JlY2lwZS5tZXRob2QudG9Mb3dlckNhc2UoKX1gfSBjbGFzc05hbWU9XCJSZWNpcGVDYXJkXCI+XG4gICAgPGRpdj5cbiAgICAgIDxJY29uIENvbXA9e3JlY2lwZS5JY29ufSAvPlxuICAgICAgPGgyPnsgcmVjaXBlLm1ldGhvZCB9PC9oMj5cbiAgICAgIHtcbiAgICAgICAgcmVjaXBlLnJlY2lwZSAmJiA8cCBjbGFzc05hbWU9XCJDYXJkX19zdW1tYXJ5XCI+eyByZWNpcGUucmVjaXBlLnN1bW1hcnkgfTwvcD5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuQ2FyZF9fc3VtbWFyeSB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9DYXJkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+cHJvdG90eXBpbmcu4piV77iPPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPC9IZWFkPlxuICAgIHsvKiA8SD5MZWFybiBob3cgdG8gYnJldyBncmVhdCBjb2ZmZWU8L0g+XG4gICAgPEg+QnJldyBtZXRob2RzPC9IPlxuICAgIDxIPkZpa2E8L0g+XG4gICAgPEg+UMOldMOlcjwvSD4gKi99XG4gICAgey8qIDxwPlxuICAgICAgQnJld2luZ1xuICAgICAgRmlsdGVyXG4gICAgICBCbG9vbVxuICAgICAgRHJpcFxuICAgICAgQ29mZmVlXG4gICAgPC9wPiAqL31cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9wL0JSZmw0ZWZnY0xSL21lZGlhLz9zaXplPW1cIiAvPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3AvQk80YWtEd2dwRncvbWVkaWEvP3NpemU9bVwiIC8+XG4gICAgPHA+XG4gICAgICBHcmluZC4gUmluc2UuIEJsb29tLiBCcmV3LiBSZXBlYXQuXG4gICAgPC9wPlxuICAgIDxIPkJhc2ljczwvSD5cbiAgICA8cD5cbiAgICAgIEdyaW5kLCBXYXRlciwgVGVtcGVyYXR1cmUsIC4uLlxuICAgIDwvcD5cbiAgICA8SD5FcXVpcG1lbnQ8L0g+XG4gICAgPHA+XG4gICAgICBEcmlwcGVyLCBHcmluZGVyLCBTY2FsZSwgVGltZXJcbiAgICA8L3A+XG4gICAgPEg+UmVjaXBlczwvSD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlY2lwZXMpLm1hcChyZWNpcGUgPT4gPFJlY2lwZUNhcmQga2V5PXtyZWNpcGV9IHJlY2lwZT17cmVjaXBlc1tyZWNpcGVdfSAvPilcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FyZHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement('title', {
    'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, 'prototyping.\u2615\uFE0F'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })), _react2.default.createElement('img', { src: 'https://instagram.com/p/BRfl4efgcLR/media/?size=m', 'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }), _react2.default.createElement('img', { src: 'https://instagram.com/p/BO4akDwgpFw/media/?size=m', 'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }), _react2.default.createElement('p', {
    'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, 'Grind. Rinse. Bloom. Brew. Repeat.'), _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, 'Basics'), _react2.default.createElement('p', {
    'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, 'Grind, Water, Temperature, ...'), _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, 'Equipment'), _react2.default.createElement('p', {
    'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, 'Dripper, Grinder, Scale, Timer'), _react2.default.createElement(_H2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, 'Recipes'), _react2.default.createElement('div', { className: 'cards', 'data-jsx': 1031097144,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, (0, _keys2.default)(_recipes2.default).map(function (recipe) {
    return _react2.default.createElement(RecipeCard, { key: recipe, recipe: _recipes2.default[recipe], __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    });
  })), _react2.default.createElement(_style2.default, {
    styleId: 1031097144,
    css: '.cards[data-jsx="1031097144"] {display:-webkit-flex; display:flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;justify-content: space-between;align-items: stretch;}img[data-jsx="1031097144"] {max-width: 100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGZ0IsQUFDRiwrQkFDUSxtQ0FDRSw2REFDZSwrQkFDVixxQkFDdEIsQ0FFSSw0QkFDYSxnQkFDakIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RpbXZvbm9sZGVuYnVyZy9wcm9qZWN0cy9jb2ZmZWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBIIGZyb20gJy4uL2NvbXBvbmVudHMvSCc7XG5cbmltcG9ydCBDaGVtZXggZnJvbSAnLi4vc3Zncy9jaGVtZXguc3ZnJztcbmltcG9ydCBWNjAgZnJvbSAnLi4vc3Zncy92NjAuc3ZnJztcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9kZXNpZ24vY29sb3JzLmpzb24nO1xuaW1wb3J0IHJlY2lwZXMgZnJvbSAnLi4vZGF0YS9yZWNpcGVzJztcblxuY29uc3QgSWNvbiA9ICh7Q29tcH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJJY29uXCI+XG4gICAgPENvbXAgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiYXV0b1wiIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbCgjQ2hlbWV4KSB7IHN0cm9rZS13aWR0aDogNHB4OyB9XG4gICAgICA6Z2xvYmFsKCNDaGVtZXgpIDpnbG9iYWwoI0hhbmRsZSkgeyBzdHJva2U6IGJsYWNrICFpbXBvcnRhbnQ7IGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7IH1cbiAgICAgIC5JY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDaGVtZXhJY29uID0gSWNvbihDaGVtZXgpO1xuY29uc3QgVjYwSWNvbiA9IEljb24oVjYwKTtcblxuY29uc3QgUmVjaXBlQ2FyZCA9ICh7XG4gIHJlY2lwZSxcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxDYXJkIGhyZWY9e2AvZ2Vhcj9nZWFyPSR7cmVjaXBlLm1ldGhvZC50b0xvd2VyQ2FzZSgpfWB9IGNsYXNzTmFtZT1cIlJlY2lwZUNhcmRcIj5cbiAgICA8ZGl2PlxuICAgICAgPEljb24gQ29tcD17cmVjaXBlLkljb259IC8+XG4gICAgICA8aDI+eyByZWNpcGUubWV0aG9kIH08L2gyPlxuICAgICAge1xuICAgICAgICByZWNpcGUucmVjaXBlICYmIDxwIGNsYXNzTmFtZT1cIkNhcmRfX3N1bW1hcnlcIj57IHJlY2lwZS5yZWNpcGUuc3VtbWFyeSB9PC9wPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5DYXJkX19zdW1tYXJ5IHtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0NhcmQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5wcm90b3R5cGluZy7imJXvuI88L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgey8qIDxIPkxlYXJuIGhvdyB0byBicmV3IGdyZWF0IGNvZmZlZTwvSD5cbiAgICA8SD5CcmV3IG1ldGhvZHM8L0g+XG4gICAgPEg+RmlrYTwvSD5cbiAgICA8SD5Qw6V0w6VyPC9IPiAqL31cbiAgICB7LyogPHA+XG4gICAgICBCcmV3aW5nXG4gICAgICBGaWx0ZXJcbiAgICAgIEJsb29tXG4gICAgICBEcmlwXG4gICAgICBDb2ZmZWVcbiAgICA8L3A+ICovfVxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3AvQlJmbDRlZmdjTFIvbWVkaWEvP3NpemU9bVwiIC8+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2luc3RhZ3JhbS5jb20vcC9CTzRha0R3Z3BGdy9tZWRpYS8/c2l6ZT1tXCIgLz5cbiAgICA8cD5cbiAgICAgIEdyaW5kLiBSaW5zZS4gQmxvb20uIEJyZXcuIFJlcGVhdC5cbiAgICA8L3A+XG4gICAgPEg+QmFzaWNzPC9IPlxuICAgIDxwPlxuICAgICAgR3JpbmQsIFdhdGVyLCBUZW1wZXJhdHVyZSwgLi4uXG4gICAgPC9wPlxuICAgIDxIPkVxdWlwbWVudDwvSD5cbiAgICA8cD5cbiAgICAgIERyaXBwZXIsIEdyaW5kZXIsIFNjYWxlLCBUaW1lclxuICAgIDwvcD5cbiAgICA8SD5SZWNpcGVzPC9IPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVjaXBlcykubWFwKHJlY2lwZSA9PiA8UmVjaXBlQ2FyZCBrZXk9e3JlY2lwZX0gcmVjaXBlPXtyZWNpcGVzW3JlY2lwZV19IC8+KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jYXJkcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};