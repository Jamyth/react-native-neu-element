"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _NeuView = _interopRequireDefault(require("./NeuView"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NeuButton = function NeuButton(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggleEffect = _useState2[0],
      setToggleEffect = _useState2[1];

  var children = props.children,
      isConvex = props.isConvex,
      active = props.active,
      noPressEffect = props.noPressEffect,
      onPressIn = props.onPressIn,
      onPressOut = props.onPressOut,
      onPress = props.onPress;

  var pressOut = function pressOut() {
    if (noPressEffect) {
      return;
    }

    if (active) {
      return setToggleEffect(true);
    }

    if (onPressOut) {
      onPressOut();
    }

    setToggleEffect(false);
  };

  var pressIn = function pressIn() {
    if (noPressEffect) {
      return;
    }

    if (active) {
      return setToggleEffect(false);
    }

    if (onPressIn) {
      onPressIn();
    }

    setToggleEffect(true);
  };

  if (isConvex) {
    return _react["default"].createElement(_reactNative.TouchableWithoutFeedback, {
      onPressOut: pressOut,
      onPressIn: pressIn,
      onPress: onPress
    }, _react["default"].createElement(_reactNative.View, null, _react["default"].createElement(_NeuView["default"], _extends({}, props, {
      concave: noPressEffect ? false : toggleEffect,
      convex: noPressEffect ? false : !toggleEffect
    }), children)));
  }

  return _react["default"].createElement(_reactNative.TouchableWithoutFeedback, {
    onPressOut: pressOut,
    onPressIn: pressIn,
    onPress: onPress
  }, _react["default"].createElement(_reactNative.View, null, _react["default"].createElement(_NeuView["default"], _extends({}, props, {
    inset: noPressEffect ? false : toggleEffect
  }), children)));
};

NeuButton.propTypes = _objectSpread({
  isConvex: _propTypes["default"].bool,
  active: _propTypes["default"].bool,
  color: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  noPressEffect: _propTypes["default"].bool,
  onPress: _propTypes["default"].func,
  onPressIn: _propTypes["default"].func,
  onPressOut: _propTypes["default"].func,
  children: _propTypes["default"].node
}, _NeuView["default"].propTypes);
var _default = NeuButton;
exports["default"] = _default;