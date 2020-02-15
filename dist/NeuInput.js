"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _NeuView = _interopRequireDefault(require("./NeuView"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NeuInput = function NeuInput(props) {
  var _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      textStyle = props.textStyle,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$onChangeText = props.onChangeText,
      onChangeText = _props$onChangeText === void 0 ? function () {} : _props$onChangeText,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      Prefix = props.prefix,
      rest = _objectWithoutProperties(props, ["style", "textStyle", "placeholder", "onChangeText", "value", "prefix"]);

  var styles = _reactNative.StyleSheet.create({
    input: {
      borderBottomWidth: 0,
      flex: 1
    }
  });

  return _react["default"].createElement(_NeuView["default"], _extends({}, rest, {
    style: _objectSpread({}, style, {
      alignItems: 'stretch'
    }),
    inset: true
  }), _react["default"].createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      paddingHorizontal: 12
    }
  }, Prefix && _react["default"].createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 6
    }
  }, Prefix), _react["default"].createElement(_reactNative.TextInput, {
    style: _objectSpread({}, styles.input, {}, textStyle),
    onChangeText: onChangeText,
    placeholder: placeholder,
    value: value
  })));
};

NeuInput.propTypes = _objectSpread({
  style: _propTypes["default"].object,
  textStyle: _propTypes["default"].object,
  placeholder: _propTypes["default"].string,
  onChangeText: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].string.isRequired
}, _NeuView["default"].propTypes);
var _default = NeuInput;
exports["default"] = _default;