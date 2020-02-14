import React from 'react';
import NeuView from './NeuView';
import PropTypes from 'prop-types';

const NeuBorderView = props => {
  const {
    color,
    width = 100,
    height = 100,
    borderRadius,
    borderWidth = 10,
    children,
    containerStyle,
    style,
  } = props;
  return (
    <NeuView
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
      style={style}>
      <NeuView
        inset
        color={color}
        width={width - borderWidth}
        height={height - borderWidth}
        borderRadius={borderRadius}
        containerStyle={containerStyle}>
        {children}
      </NeuView>
    </NeuView>
  );
};

NeuBorderView.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  borderRadius: PropTypes.number.isRequired,
  borderWidth: PropTypes.number.isRequired,
  containerStyle: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default NeuBorderView;
