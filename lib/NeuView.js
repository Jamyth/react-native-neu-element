import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import Shadow from './Shadow';

import { hexToHsl, hslToHex } from './utils';

import LinearGradient from 'react-native-linear-gradient';

const NeuView = props => {
  const {
    color = '#444444',
    width = 100,
    height = 100,
    radius = 0,
    children,
    customLightShadow = {},
    customDarkShadow = {},
    customGradient,
    borderRadius = 0,
    inset,
    convex,
    concave,
    style = {},
    containerStyle,
    noShadow
  } = props;

  const { h, s, l } = hexToHsl(color);
  const light = hslToHex(
    h - 2 < 0 ? 0 : h - 2,
    s + 5 > 100 ? 100 : s + 11,
    l + 5 > 100 ? 100 : l + 5
  );
  const dark = hslToHex(h, s, l - 8 < 0 ? 0 : l - 20);
  const mid = hslToHex(h, s, l - 5 < 0 ? 0 : l - 5);

  const lightSetting = {
    width,
    height,
    blur: 10,
    spread: 0,
    borderRadius,
    radius,
    color: inset ? dark : light,
    offsetX: inset ? -2 : -4,
    offsetY: inset ? -2 : -4,
    opacity: 1,
    ...customLightShadow
  };

  const darkSetting = {
    width,
    height,
    blur: 10,
    spread: 0,
    radius,
    color: inset ? light : dark,
    borderRadius,
    offsetX: inset ? 2 : 3,
    offsetY: inset ? 2 : 3,
    opacity: 1,
    ...customDarkShadow
  };

  const styles = StyleSheet.create({
    container: {
      position: 'relative'
    },
    view: {
      width,
      height,
      borderRadius,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  const renderComposed = children => {
    if (concave) {
      return (
        <>
          <LinearGradient
            colors={customGradient ? customGradient : [mid, light]}
            useAngle={true}
            angle={145}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              borderRadius
            }}
          >
            <View
              style={{
                ...styles.view,
                ...containerStyle,
                backgroundColor: 'transparent'
              }}
            >
              {children}
            </View>
          </LinearGradient>
        </>
      );
    }

    if (convex) {
      return (
        <>
          <LinearGradient
            colors={customGradient ? customGradient.reverse() : [light, mid]}
            useAngle={true}
            angle={145}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              borderRadius
            }}
          >
            <View
              style={{
                ...styles.view,
                ...containerStyle,
                backgroundColor: 'transparent'
              }}
            >
              {children}
            </View>
          </LinearGradient>
        </>
      );
    }

    return (
      <>
        <View
          style={{
            ...styles.view,
            ...containerStyle
          }}
        >
          {children}
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        ...styles.container,
        ...style
      }}
    >
      {!noShadow && (
        <>
          <Shadow setting={lightSetting} />
          <Shadow setting={darkSetting} />
        </>
      )}
      {renderComposed(children)}
    </View>
  );
};

NeuView.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  radius: PropTypes.number,
  customLightShadow: ViewPropTypes,
  customDarkShadow: ViewPropTypes,
  borderRadius: PropTypes.number,
  customGradient: PropTypes.array,
  style: ViewPropTypes,
  containerStyle: ViewPropTypes,
  inset: PropTypes.bool,
  convex: PropTypes.bool,
  concave: PropTypes.bool,
  noShadow: PropTypes.bool
};

export default NeuView;
