import React, {Component} from 'react';
import {View, PanResponder, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react/native'

@observer
export default class ShapeBarView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          width: this.props.shapeBar.width, height: this.props.shapeBar.height, backgroundColor: this.props.shapeBar.backgroundColor,
          left: this._currentX(), top: this._currentY(), position: 'absolute',
          borderColor: 'white'
        }}>
      </View>
    )
  }

  _currentX() {
    return this.props.shapeBar.x;
  }

  _currentY() {
    return this.props.shapeBar.y;
  }

}
