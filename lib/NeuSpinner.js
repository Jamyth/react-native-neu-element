import React from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import {runInfinite} from './utils/animation/presets';
import NeuView from './NeuView';
import PropTypes from 'prop-types';

const NeuSpinner = props => {
  const {Clock, concat} = Animated;

  const {
    color,
    indicatorColor = '#000',
    duration = 1000,
    size = 50,
    easingType = Easing.linear,
  } = props;

  const rotation = runInfinite(new Clock(), 0, 360, duration, easingType);

  const defaultSize = size < 50 ? 50 : size;
  const innerSize = defaultSize - 15;

  return (
    <NeuView
      color={color}
      width={defaultSize}
      height={defaultSize}
      borderRadius={1000}
      inset>
      <NeuView
        color={color}
        width={innerSize}
        height={innerSize}
        borderRadius={1000}>
        <Animated.View
          style={{
            borderLeftColor: indicatorColor,
            borderTopColor: indicatorColor,
            borderBottomColor: indicatorColor,
            borderWidth: 6,
            borderRightColor: 'transparent',
            transform: [{rotate: concat(rotation, 'deg')}],
            borderRadius: 100,
            width: defaultSize,
            height: defaultSize,
          }}
        />
      </NeuView>
    </NeuView>
  );
};

NeuSpinner.propTypes = {
  color: PropTypes.string.isRequired,
  indicatorColor: PropTypes.string.isRequired,
  duration: PropTypes.number,
  size: PropTypes.number,
  easingType: PropTypes.func,
};

export default NeuSpinner;
