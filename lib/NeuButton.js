import React, {useState} from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import NeuView from './NeuView';
import PropTypes from 'prop-types';

const NeuButton = props => {
  const {
    children,
    isConvex,
    active,
    noPressEffect,
    isPressed,
    setIsPressed,
  } = props;

  if (isConvex) {
    return (
      <TouchableWithoutFeedback
        onPressOut={() =>
          noPressEffect
            ? ''
            : !active
            ? setIsPressed(false)
            : setIsPressed(true)
        }
        onPressIn={() =>
          noPressEffect ? '' : !active ? setIsPressed(true) : setIsPressed(true)
        }>
        <View>
          <NeuView
            {...props}
            concave={noPressEffect ? false : isPressed}
            convex={noPressEffect ? false : !isPressed}>
            {children}
          </NeuView>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPressOut={() =>
        noPressEffect ? '' : !active ? setIsPressed(false) : setIsPressed(true)
      }
      onPressIn={() =>
        noPressEffect ? '' : !active ? setIsPressed(true) : setIsPressed(true)
      }
      onPress={() => noPressEffect && setIsPressed(!isPressed)}>
      <View>
        <NeuView {...props} inset={noPressEffect ? false : isPressed}>
          {children}
        </NeuView>
      </View>
    </TouchableWithoutFeedback>
  );
};

NeuButton.propTypes = {
  isConvex: PropTypes.bool,
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  noPressEffect: PropTypes.bool,
  isPressed: PropTypes.bool.isRequired,
  setIsPressed: PropTypes.func.isRequired,
};

export default NeuButton;
