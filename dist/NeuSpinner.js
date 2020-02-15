"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _presets = require("./utils/animation/presets");

var _NeuView = _interopRequireDefault(require("./NeuView"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NeuSpinner = function NeuSpinner(props) {
  var Clock = _reactNativeReanimated["default"].Clock,
      concat = _reactNativeReanimated["default"].concat;
  var color = props.color,
      _props$indicatorColor = props.indicatorColor,
      indicatorColor = _props$indicatorColor === void 0 ? '#000' : _props$indicatorColor,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 1000 : _props$duration,
      _props$size = props.size,
      size = _props$size === void 0 ? 50 : _props$size,
      _props$easingType = props.easingType,
      easingType = _props$easingType === void 0 ? _reactNativeReanimated.Easing.linear : _props$easingType;
  var rotation = (0, _presets.runInfinite)(new Clock(), 0, 360, duration, easingType);
  var defaultSize = size < 50 ? 50 : size;
  var innerSize = defaultSize - 15;
  return _react["default"].createElement(_NeuView["default"], {
    color: color,
    width: defaultSize,
    height: defaultSize,
    borderRadius: 1000,
    inset: true
  }, _react["default"].createElement(_NeuView["default"], {
    color: color,
    width: innerSize,
    height: innerSize,
    borderRadius: 1000
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: {
      borderLeftColor: indicatorColor,
      borderTopColor: indicatorColor,
      borderBottomColor: indicatorColor,
      borderWidth: 6,
      borderRightColor: 'transparent',
      transform: [{
        rotate: concat(rotation, 'deg')
      }],
      borderRadius: 100,
      width: defaultSize,
      height: defaultSize
    }
  })));
};

NeuSpinner.propTypes = _objectSpread({
  color: _propTypes["default"].string.isRequired,
  indicatorColor: _propTypes["default"].string.isRequired,
  duration: _propTypes["default"].number,
  size: _propTypes["default"].number.isRequired,
  easingType: _propTypes["default"].func
}, _NeuView["default"].propTypes);
var _default = NeuSpinner;
exports["default"] = _default;