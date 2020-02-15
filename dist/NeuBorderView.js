"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NeuView = _interopRequireDefault(require("./NeuView"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NeuBorderView = function NeuBorderView(props) {
  var color = props.color,
      _props$width = props.width,
      width = _props$width === void 0 ? 100 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 100 : _props$height,
      borderRadius = props.borderRadius,
      _props$borderWidth = props.borderWidth,
      borderWidth = _props$borderWidth === void 0 ? 10 : _props$borderWidth,
      children = props.children,
      containerStyle = props.containerStyle,
      style = props.style;
  return _react["default"].createElement(_NeuView["default"], {
    color: color,
    width: width,
    height: height,
    borderRadius: borderRadius,
    style: style
  }, _react["default"].createElement(_NeuView["default"], {
    inset: true,
    color: color,
    width: width - borderWidth,
    height: height - borderWidth,
    borderRadius: borderRadius,
    containerStyle: containerStyle
  }, children));
};

NeuBorderView.propTypes = {
  color: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  borderRadius: _propTypes["default"].number.isRequired,
  borderWidth: _propTypes["default"].number.isRequired,
  containerStyle: _propTypes["default"].object.isRequired,
  style: _propTypes["default"].object.isRequired
};
var _default = NeuBorderView;
exports["default"] = _default;