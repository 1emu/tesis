import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from '../style/LevelNavBarStyle'
import LevelMenuModal from '../model/LevelMenuModal';

export default class LevelNavBarView extends Component {

  constructor(props){
    super(props);
    this.title = 'NIVEL ' + props.levelNumber;
  }

  render() {

    return (
    <View>
      <View style={style.navBar}>
        <LevelMenuModal navigator={this.props.navigator} levelNumber={this.props.levelNumber}/>
        <Text style={style.title}>{this.title}</Text>
      </View>
    </View>
    )
  }
}
