"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _grommet = require("grommet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header() {
  return _react["default"].createElement(_grommet.Grommet, {
    theme: _grommet.grommet
  }, _react["default"].createElement(_grommet.Box, {
    pad: "small"
  }, _react["default"].createElement(_grommet.Heading, {
    level: 3
  }, _react["default"].createElement("strong", null, "Hello World")), _react["default"].createElement(_grommet.Paragraph, null, "Hello from Aries! In order to understand how monorepo works in-action, change the Header component on aries-core and see how it immediately impacts aries-site.")));
};

exports.Header = Header;