"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NeuView = _interopRequireDefault(require("./NeuView"));

var _NeuButton = _interopRequireDefault(require("./NeuButton"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NeuSwitch = function NeuSwitch(props) {
  var isPressed = props.isPressed,
      setIsPressed = props.setIsPressed,
      customGradient = props.customGradient,
      color = props.color,
      containerWidth = props.containerWidth,
      containerHeight = props.containerHeight,
      buttonWidth = props.buttonWidth,
      buttonHeight = props.buttonHeight;
  return _react["default"].createElement(_NeuView["default"], {
    color: color,
    width: containerWidth,
    height: containerHeight,
    borderRadius: 50,
    concave: true,
    customGradient: isPressed && customGradient,
    containerStyle: {
      alignItems: isPressed ? 'flex-end' : 'flex-start'
    }
  }, _react["default"].createElement(_NeuButton["default"], {
    color: color,
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: 50 // style={{marginHorizontal: 5}}
    ,
    isPressed: isPressed,
    setIsPressed: setIsPressed,
    noPressEffect: true,
    convex: true,
    noShadow: customGradient && isPressed
  }));
};

NeuSwitch.propTypes = _objectSpread({
  isPressed: _propTypes["default"].bool.isRequired,
  setIsPressed: _propTypes["default"].func.isRequired,
  customGradient: _propTypes["default"].array,
  color: _propTypes["default"].string.isRequired,
  containerWidth: _propTypes["default"].number.isRequired,
  containerHeight: _propTypes["default"].number.isRequired,
  buttonWidth: _propTypes["default"].number.isRequired,
  buttonHeight: _propTypes["default"].number.isRequired
}, _NeuView["default"].propTypes);
var _default = NeuSwitch;
exports["default"] = _default;