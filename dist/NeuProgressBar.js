// import NeuView from './NeuView';
// import {runOnce} from './utils/animation/presets';
// import React from 'react';
// import PropTypes from 'prop-types';
// import Animated, {Easing} from 'react-native-reanimated';
// const {Value, Clock, concat} = Animated;
// export default class NeuProgressBar extends React.Component {
//   static propTypes = {
//     progress: PropTypes.number.isRequired,
//     height: PropTypes.number,
//     width: PropTypes.number,
//     indicatorHeight: PropTypes.number,
//     color: PropTypes.string,
//     indicatorColor: PropTypes.string,
//   };
//   static defaultProps = {
//     height: 15,
//     indicatorColor: 'green',
//     indicatorHeight: 15,
//     width: 300,
//     backgroundColor: 'red',
//   };
//   clock = new Clock();
//   progress = new Value(0);
//   animation = new Value(0);
//   transX = runOnce(this.clock, this.progress, this.animation, 200, Easing.ease);
//   componentDidUpdate() {
//     const progress = Math.max(Math.min(this.props.progress, 1), 0);
//     this.animation.setValue(progress * 100);
//   }
//   render() {
//     const progressStyle = {
//       width: concat(this.transX, '%'),
//       height: this.props.indicatorHeight,
//       backgroundColor: this.props.indicatorColor,
//       borderRadius: 100,
//     };
//     return (
//       <NeuView
//         color={this.props.color}
//         borderRadius={100}
//         width={this.props.width}
//         height={this.props.height}
//         concave
//         containerStyle={{
//           alignItems: 'flex-start',
//         }}>
//         <Animated.View style={progressStyle} />
//       </NeuView>
//     );
//   }
// }
"use strict";