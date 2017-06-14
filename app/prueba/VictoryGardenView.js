import React, {Component} from 'react';
import {View, PanResponder, Text} from 'react-native';
import {observer} from "mobx-react/native"

@observer
export default class VictoryGardenView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{width: this.props.victoryGarden.width, height: this.props.victoryGarden.height, backgroundColor: this.props.victoryGarden.backgroundColor,
          left: this._currentX(), top: this._currentY(), position: 'absolute', borderWidth: 1,
        borderColor: 'white'}}>
      <Text style={{color: 'white'}}>{this.props.victoryGarden.id}</Text>
      </View>
    )
  }

  _currentX() {
    return this.props.victoryGarden.x;
  }

  _currentY() {
    return this.props.victoryGarden.y;
  }

}
