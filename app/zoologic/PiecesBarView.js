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
          width: this.props.piecesBar.width, height: this.props.piecesBar.height, backgroundColor: this.props.piecesBar.backgroundColor,
          left: this._currentX(), top: this._currentY(), position: 'absolute',
          borderColor: 'white'
        }}>
      </View>
    )
  }

  _currentX() {
    return this.props.piecesBar.x;
  }

  _currentY() {
    return this.props.piecesBar.y;
  }

}
