"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runOnce = exports.runInfinite = void 0;

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Value = _reactNativeReanimated["default"].Value,
    block = _reactNativeReanimated["default"].block,
    cond = _reactNativeReanimated["default"].cond,
    set = _reactNativeReanimated["default"].set,
    startClock = _reactNativeReanimated["default"].startClock,
    clockRunning = _reactNativeReanimated["default"].clockRunning,
    timing = _reactNativeReanimated["default"].timing,
    stopClock = _reactNativeReanimated["default"].stopClock;

var runInfinite = function runInfinite(clock, value, endValue, duration, easingType) {
  var state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };
  var config = {
    duration: duration,
    toValue: new Value(0),
    easing: _reactNativeReanimated.Easing.inOut(easingType)
  };
  return block([cond(clockRunning(clock), [set(config.toValue, endValue)], [set(state.finished, 0), set(state.time, 0), set(state.position, value), set(state.frameTime, 0), set(config.toValue, endValue), startClock(clock)]), timing(clock, state, config), cond(state.finished, [set(state.finished, 0), set(state.time, 0), set(state.position, value), set(state.frameTime, 0), set(config.toValue, endValue), startClock(clock)]), state.position]);
};

exports.runInfinite = runInfinite;

var runOnce = function runOnce(clock, value, endValue, duration, easingType) {
  var state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };
  var config = {
    duration: duration,
    toValue: new Value(0),
    easing: _reactNativeReanimated.Easing.inOut(easingType)
  };
  return block([cond(clockRunning(clock), [set(config.toValue, endValue)], [set(state.finished, 0), set(state.time, 0), set(state.position, value), set(state.frameTime, 0), set(config.toValue, endValue), startClock(clock)]), timing(clock, state, config), cond(state.finished, [stopClock(clock)]), state.position]);
};

exports.runOnce = runOnce;