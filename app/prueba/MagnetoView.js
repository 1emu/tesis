import React, {Component} from 'react';
import {View, PanResponder, Text} from 'react-native';

export default class MagnetoView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{width: this.props.magneto.width(), height: this.props.magneto.height(), backgroundColor: 'black', left: this._currentX(), top: this._currentY(), position: 'absolute', borderWidth: 1,
        borderColor: 'white'}}>
      <Text style={{color: 'white'}}>{this.props.magneto.id}</Text>
      </View>
    )
  }

  _currentX() {
    return this.props.magneto.x;
  }

  _currentY() {
    return this.props.magneto.y;
  }

}
