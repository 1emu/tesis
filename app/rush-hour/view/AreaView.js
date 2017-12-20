import React, {Component} from "react";
import {View} from "react-native";
import {observer} from "mobx-react/native"

@observer
export default class AreaView extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View
            style={{width: this.props.area.width, height: this.props.area.height, backgroundColor: 'grey',
              left: this._currentX(), top: this._currentY(), position: 'absolute'
              }}
        />
    )
  }

  _currentX() {
    return this.props.area.x;
  }

  _currentY() {
    return this.props.area.y;
  }
}
