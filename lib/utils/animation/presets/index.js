import Animated, {Easing} from 'react-native-reanimated';

const {
  Value,
  block,
  cond,
  set,
  startClock,
  clockRunning,
  timing,
  stopClock,
} = Animated;

export const runInfinite = (clock, value, endValue, duration, easingType) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: new Value(0),
    easing: Easing.inOut(easingType),
  };

  return block([
    cond(
      clockRunning(clock),
      [set(config.toValue, endValue)],
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, endValue),
        startClock(clock),
      ],
    ),
    timing(clock, state, config),
    cond(state.finished, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, endValue),
      startClock(clock),
    ]),
    state.position,
  ]);
};

export const runOnce = (clock, value, endValue, duration, easingType) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: new Value(0),
    easing: Easing.inOut(easingType),
  };

  return block([
    cond(
      clockRunning(clock),
      [set(config.toValue, endValue)],
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, endValue),
        startClock(clock),
      ],
    ),
    timing(clock, state, config),
    cond(state.finished, [stopClock(clock)]),
    state.position,
  ]);
};
