import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from './LevelNavBarStyle'
import ModalView from './ModalView';

export default class LevelNavBarView extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
    <View>
      <View style={style.container}>
        <Text style={style.content}>{this.props.text}</Text>
        <ModalView />
      </View>
    </View>
    )
  }
}
