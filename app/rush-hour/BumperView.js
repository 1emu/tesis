import React, {Component} from "react";
import {View} from "react-native";
import {observer} from "mobx-react/native"

@observer
export default class BumperView extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View
            style={{width: this.props.cuadradito.width, height: this.props.cuadradito.height, backgroundColor: 'grey',
              left: this._currentX(), top: this._currentY(), position: 'absolute'
              }}
        />
    )
  }

  _currentX() {
    return this.props.cuadradito.x;
  }

  _currentY() {
    return this.props.cuadradito.y;
  }
}
