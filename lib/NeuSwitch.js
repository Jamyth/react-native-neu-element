import React from 'react';
import NeuView from './NeuView';
import NeuButton from './NeuButton';
import PropTypes from 'prop-types';

const NeuSwitch = props => {
  const {
    isPressed,
    setIsPressed,
    customGradient,
    color,
    containerWidth,
    containerHeight,
    buttonWidth,
    buttonHeight,
  } = props;
  return (
    <NeuView
      color={color}
      width={containerWidth}
      height={containerHeight}
      borderRadius={50}
      concave
      customGradient={isPressed && customGradient}
      containerStyle={{
        alignItems: isPressed ? 'flex-end' : 'flex-start',
      }}>
      <NeuButton
        color={color}
        width={buttonWidth}
        height={buttonHeight}
        borderRadius={50}
        // style={{marginHorizontal: 5}}
        isPressed={isPressed}
        setIsPressed={setIsPressed}
        noPressEffect
        convex
        noShadow={customGradient && isPressed}
      />
    </NeuView>
  );
};

NeuSwitch.propTypes = {
  isPressed: PropTypes.bool.isRequired,
  setIsPressed: PropTypes.func.isRequired,
  customGradient: PropTypes.array,
  color: PropTypes.string.isRequired,
  containerWidth: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
  buttonWidth: PropTypes.number.isRequired,
  buttonHeight: PropTypes.number.isRequired,
};

export default NeuSwitch;
