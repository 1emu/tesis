import React, {Component} from 'react';
import {View, Image, PanResponder, Animated} from 'react-native';
import {observer} from 'mobx-react/native'

@observer
export default class ZoologicSquareView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Animated.Image
        key={this.props.square.key}
        style={{
          width: this.props.square.width,
          height: this.props.square.height,
          left: this.props.square.x - this.props.square.width / 2,
          top: this.props.square.y - this.props.square.height / 2,
          position: 'absolute',
          backgroundColor: this.props.square.type.backgroundColor
        }}
        source={this.props.square.type.image}
      />
    )
  }
}
