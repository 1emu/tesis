import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from './LevelNavBarStyle'
import LevelMenuModal from './LevelMenuModal';

export default class LevelNavBarView extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
    <View>
      <View style={style.container}>
        <LevelMenuModal />
        <Text style={style.content}>{this.props.text}</Text>
      </View>
    </View>
    )
  }
}
