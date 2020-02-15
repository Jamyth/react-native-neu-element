"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function colorRgb(color) {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var sColor = color.toLowerCase();
  var rgb = [];

  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';

      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }

      sColor = sColorNew;
    }

    for (var _i = 1; _i < 7; _i += 2) {
      // tslint:disable-next-line: radix
      rgb.push(parseInt('0x' + sColor.slice(_i, _i + 2)));
    }

    return rgb;
  } else {
    throw Error('Invalid Color!');
  }
}

var Shadow = function Shadow(props) {
  var _props$setting = props.setting,
      _props$setting$width = _props$setting.width,
      width = _props$setting$width === void 0 ? 0 : _props$setting$width,
      _props$setting$height = _props$setting.height,
      height = _props$setting$height === void 0 ? 0 : _props$setting$height,
      _props$setting$color = _props$setting.color,
      color = _props$setting$color === void 0 ? '#000' : _props$setting$color,
      _props$setting$offset = _props$setting.offsetX,
      offsetX = _props$setting$offset === void 0 ? 0 : _props$setting$offset,
      _props$setting$offset2 = _props$setting.offsetY,
      offsetY = _props$setting$offset2 === void 0 ? 0 : _props$setting$offset2,
      _props$setting$blur = _props$setting.blur,
      blur = _props$setting$blur === void 0 ? 3 : _props$setting$blur,
      _props$setting$spread = _props$setting.spread,
      spread = _props$setting$spread === void 0 ? 0 : _props$setting$spread,
      _props$setting$border = _props$setting.borderRadius,
      _borderRadius = _props$setting$border === void 0 ? 0 : _props$setting$border,
      _props$setting$opacit = _props$setting.opacity,
      opacity = _props$setting$opacit === void 0 ? '1' : _props$setting$opacit,
      _props$setting$style = _props$setting.style,
      style = _props$setting$style === void 0 ? {} : _props$setting$style,
      children = _props$setting.children;

  var borderRadius = _borderRadius > Math.min(width, height) / 2 ? Math.min(width, height) / 2 : _borderRadius;
  var rectInnerWidth = width + spread * 2 - blur;
  var rectInnerHeight = height + spread * 2 - blur;
  var rectOuterWidth = width + spread * 2 + blur;
  var rectOuterHeight = height + spread * 2 + blur;
  var innerRadius = borderRadius > 0 ? Math.max(0, borderRadius + spread - blur / 2) : 0;
  var outerRadius = borderRadius > 0 ? Math.max(0, borderRadius + spread + blur / 2) : blur;
  var borderWidth = (rectOuterWidth - rectInnerWidth) / 2;
  var rgb = hexToRgb(color);

  var linear = function linear(key) {
    return [_react["default"].createElement(_reactNativeSvg.Stop, {
      offset: "0",
      stopColor: color,
      stopOpacity: opacity,
      key: key + 'Linear0'
    }), _react["default"].createElement(_reactNativeSvg.Stop, {
      offset: "1",
      stopColor: color,
      stopOpacity: "0",
      key: key + 'Linear1'
    })];
  };

  var radial = function radial(key) {
    return [_react["default"].createElement(_reactNativeSvg.Stop, {
      offset: "0",
      stopColor: color,
      stopOpacity: opacity,
      key: key + 'Radial0'
    }), _react["default"].createElement(_reactNativeSvg.Stop, {
      offset: Math.max(0, innerRadius / outerRadius).toString(),
      stopColor: color,
      stopOpacity: opacity,
      key: key + 'Radial1'
    }), _react["default"].createElement(_reactNativeSvg.Stop, {
      offset: "1",
      stopColor: color,
      stopOpacity: "0",
      key: key + 'Radial2'
    })];
  };

  var styles = _reactNative.StyleSheet.create({
    viewContainer: _objectSpread({
      width: rectOuterWidth,
      height: rectOuterHeight,
      position: 'absolute',
      left: -blur / 2 - spread + offsetX,
      top: -blur / 2 - spread + offsetY
    }, style)
  });

  return _react["default"].createElement(_reactNative.View, {
    style: styles.viewContainer
  }, _react["default"].createElement(_reactNativeSvg["default"], {
    width: rectOuterWidth,
    height: rectOuterHeight
  }, _react["default"].createElement(_reactNativeSvg.Defs, null, _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    id: "top",
    x1: "0%",
    x2: "0%",
    y1: "100%",
    y2: "0%"
  }, linear('BoxTop')), _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    id: "bottom",
    x1: "0%",
    x2: "0%",
    y1: "0%",
    y2: "100%"
  }, linear('BoxBottom')), _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    id: "left",
    x1: "100%",
    x2: "0%",
    y1: "0%",
    y2: "0%"
  }, linear('BoxLeft')), _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    id: "right",
    x1: "0%",
    x2: "100%",
    y1: "0%",
    y2: "0%"
  }, linear('BoxRight')), _react["default"].createElement(_reactNativeSvg.RadialGradient, {
    id: "border-left-top",
    rx: "100%",
    ry: "100%",
    cx: "100%",
    cy: "100%",
    fx: "100%",
    fy: "100%"
  }, radial('BoxLeftTop')), _react["default"].createElement(_reactNativeSvg.RadialGradient, {
    id: "border-left-bottom",
    rx: "100%",
    ry: "100%",
    cx: "100%",
    cy: "0%",
    fx: "100%",
    fy: "0%"
  }, radial('BoxLeftBottom')), _react["default"].createElement(_reactNativeSvg.RadialGradient, {
    id: "border-right-top",
    rx: "100%",
    ry: "100%",
    cx: "0%",
    cy: "100%",
    fx: "0%",
    fy: "100%"
  }, radial('BoxRightTop')), _react["default"].createElement(_reactNativeSvg.RadialGradient, {
    id: "border-right-bottom",
    rx: "100%",
    ry: "100%",
    cx: "0%",
    cy: "0%",
    fx: "0%",
    fy: "0%"
  }, radial('BoxRightBottom'))), _react["default"].createElement(_reactNativeSvg.Path, {
    d: "\n            M 0 ".concat(outerRadius, ",\n            a ").concat(outerRadius, " ").concat(outerRadius, " 0 0 1 ").concat(outerRadius, " ").concat(-outerRadius, "\n            v ").concat(blur, "\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 0 ").concat(-innerRadius, " ").concat(innerRadius, "\n            z\n          "),
    fill: "url(#border-left-top)"
  }), _react["default"].createElement(_reactNativeSvg.Path, {
    d: "\n            M ".concat(rectOuterWidth - outerRadius, " 0,\n            a ").concat(outerRadius, " ").concat(outerRadius, " 0 0 1 ").concat(outerRadius, " ").concat(outerRadius, "\n            h ").concat(-blur, "\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 0 ").concat(-innerRadius, " ").concat(-innerRadius, "\n            z\n          "),
    fill: "url(#border-right-top)"
  }), _react["default"].createElement(_reactNativeSvg.Path, {
    d: "\n            M ".concat(rectOuterWidth, " ").concat(rectOuterHeight - outerRadius, ",\n            a ").concat(outerRadius, " ").concat(outerRadius, " 0 0 1 ").concat(-outerRadius, " ").concat(outerRadius, "\n            v ").concat(-blur, "\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 0 ").concat(innerRadius, " ").concat(-innerRadius, "\n            z\n          "),
    fill: "url(#border-right-bottom)"
  }), _react["default"].createElement(_reactNativeSvg.Path, {
    d: "\n            M ".concat(outerRadius, " ").concat(rectOuterHeight, ",\n            a ").concat(outerRadius, " ").concat(outerRadius, " 0 0 1 ").concat(-outerRadius, " ").concat(-outerRadius, "\n            h ").concat(blur, "\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 0 ").concat(innerRadius, " ").concat(innerRadius, "\n            z\n          "),
    fill: "url(#border-left-bottom)"
  }), _react["default"].createElement(_reactNativeSvg.Rect, {
    x: outerRadius,
    y: 0,
    width: rectInnerWidth - innerRadius * 2,
    height: blur,
    fill: "url(#top)"
  }), _react["default"].createElement(_reactNativeSvg.Rect, {
    x: rectOuterWidth - blur,
    y: outerRadius,
    width: blur,
    height: rectInnerHeight - innerRadius * 2,
    fill: "url(#right)"
  }), _react["default"].createElement(_reactNativeSvg.Rect, {
    x: outerRadius,
    y: rectOuterHeight - blur,
    width: rectInnerWidth - innerRadius * 2,
    height: blur,
    fill: "url(#bottom)"
  }), _react["default"].createElement(_reactNativeSvg.Rect, {
    x: 0,
    y: outerRadius,
    width: blur,
    height: rectInnerHeight - innerRadius * 2,
    fill: "url(#left)"
  }), _react["default"].createElement(_reactNativeSvg.Path, {
    d: "\n            M ".concat(borderWidth, " ").concat(borderWidth + innerRadius, ",\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 1 ").concat(innerRadius, " ").concat(-innerRadius, "\n            h ").concat(rectInnerWidth - innerRadius * 2, "\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 1 ").concat(innerRadius, " ").concat(innerRadius, "\n            v ").concat(rectInnerHeight - innerRadius * 2, "\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 1 ").concat(-innerRadius, " ").concat(innerRadius, "\n            h ").concat(-rectInnerWidth + innerRadius * 2, "\n            a ").concat(innerRadius, " ").concat(innerRadius, " 0 0 1 ").concat(-innerRadius, " ").concat(-innerRadius, "\n            z\n          "),
    fill: "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(opacity || 1, ")")
  }), children));
};

var _default = Shadow;
exports["default"] = _default;