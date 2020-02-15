"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _Shadow = _interopRequireDefault(require("./Shadow"));

var _utils = require("./utils");

var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NeuView = function NeuView(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? '#444444' : _props$color,
      _props$width = props.width,
      width = _props$width === void 0 ? 100 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 100 : _props$height,
      _props$radius = props.radius,
      radius = _props$radius === void 0 ? 0 : _props$radius,
      children = props.children,
      _props$customLightSha = props.customLightShadow,
      customLightShadow = _props$customLightSha === void 0 ? {} : _props$customLightSha,
      _props$customDarkShad = props.customDarkShadow,
      customDarkShadow = _props$customDarkShad === void 0 ? {} : _props$customDarkShad,
      customGradient = props.customGradient,
      _props$borderRadius = props.borderRadius,
      borderRadius = _props$borderRadius === void 0 ? 0 : _props$borderRadius,
      inset = props.inset,
      convex = props.convex,
      concave = props.concave,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      containerStyle = props.containerStyle,
      noShadow = props.noShadow;

  var _hexToHsl = (0, _utils.hexToHsl)(color),
      h = _hexToHsl.h,
      s = _hexToHsl.s,
      l = _hexToHsl.l;

  var light = (0, _utils.hslToHex)(h - 2 < 0 ? 0 : h - 2, s + 5 > 100 ? 100 : s + 11, l + 5 > 100 ? 100 : l + 5);
  var dark = (0, _utils.hslToHex)(h, s, l - 8 < 0 ? 0 : l - 20);
  var mid = (0, _utils.hslToHex)(h, s, l - 5 < 0 ? 0 : l - 5);

  var lightSetting = _objectSpread({
    width: width,
    height: height,
    blur: 10,
    spread: 0,
    borderRadius: borderRadius,
    radius: radius,
    color: inset ? dark : light,
    offsetX: inset ? -2 : -4,
    offsetY: inset ? -2 : -4,
    opacity: 1
  }, customLightShadow);

  var darkSetting = _objectSpread({
    width: width,
    height: height,
    blur: 10,
    spread: 0,
    radius: radius,
    color: inset ? light : dark,
    borderRadius: borderRadius,
    offsetX: inset ? 2 : 3,
    offsetY: inset ? 2 : 3,
    opacity: 1
  }, customDarkShadow);

  var styles = _reactNative.StyleSheet.create({
    container: {
      position: 'relative'
    },
    view: {
      width: width,
      height: height,
      borderRadius: borderRadius,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  var renderComposed = function renderComposed(children) {
    if (concave) {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactNativeLinearGradient["default"], {
        colors: customGradient ? customGradient : [mid, light],
        useAngle: true,
        angle: 145,
        angleCenter: {
          x: 0.5,
          y: 0.5
        },
        style: {
          borderRadius: borderRadius
        }
      }, _react["default"].createElement(_reactNative.View, {
        style: _objectSpread({}, styles.view, {}, containerStyle, {
          backgroundColor: 'transparent'
        })
      }, children)));
    }

    if (convex) {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactNativeLinearGradient["default"], {
        colors: customGradient ? customGradient.reverse() : [light, mid],
        useAngle: true,
        angle: 145,
        angleCenter: {
          x: 0.5,
          y: 0.5
        },
        style: {
          borderRadius: borderRadius
        }
      }, _react["default"].createElement(_reactNative.View, {
        style: _objectSpread({}, styles.view, {}, containerStyle, {
          backgroundColor: 'transparent'
        })
      }, children)));
    }

    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactNative.View, {
      style: _objectSpread({}, styles.view, {}, containerStyle)
    }, children));
  };

  return _react["default"].createElement(_reactNative.View, {
    style: _objectSpread({}, styles.container, {}, style)
  }, !noShadow && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Shadow["default"], {
    setting: lightSetting
  }), _react["default"].createElement(_Shadow["default"], {
    setting: darkSetting
  })), renderComposed(children));
};

NeuView.propTypes = {
  color: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  radius: _propTypes["default"].number,
  customLightShadow: _reactNative.ViewPropTypes,
  customDarkShadow: _reactNative.ViewPropTypes,
  borderRadius: _propTypes["default"].number,
  customGradient: _propTypes["default"].array,
  style: _reactNative.ViewPropTypes,
  containerStyle: _reactNative.ViewPropTypes,
  inset: _propTypes["default"].bool,
  convex: _propTypes["default"].bool,
  concave: _propTypes["default"].bool,
  noShadow: _propTypes["default"].bool
};
var _default = NeuView;
exports["default"] = _default;