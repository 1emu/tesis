import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react/native'
import style from './LevelNavBarStyle'

@observer
export default class LevelNavBarView extends Component {

  render() {
    return (
      <View style={style.container}>
        <Text style={style.content}>{this.props.text}</Text>
      </View>
    )
  }
}