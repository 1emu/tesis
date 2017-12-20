import React, {Component} from 'react';
import {View} from "react-native";
import ZoologicColors from '../style/ZoologicColors';

export default class ShapeBarView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          width: this.props.width, height: this.props.height, backgroundColor: ZoologicColors.dark2,
          left: this.props.x, top: this.props.y, position: 'absolute',
          borderColor: 'white'
        }}>
      </View>
    )
  }
}
