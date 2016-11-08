'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Isvg = require('react-inlinesvg');

var GeoSvgMap = function GeoSvgMap(props) {
  return _react2.default.createElement(
    'section',
    { className: 'geo-svg-wrapper' },
    _react2.default.createElement(Isvg, { src: 'https://upload.wikimedia.org/wikipedia/commons/0/03/BlankMap-World6.svg' })
  );
};

exports.default = GeoSvgMap;