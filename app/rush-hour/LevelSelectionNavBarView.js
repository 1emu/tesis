import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './LevelSelectionNavBarStyle'

export default class LevelSelectionNavBarView extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={style.navBar}>
        <Icon.Button name="arrow-back" size={20} style={style.backBtn} onPress={() => this._goBack()}>
          <Text style={style.backBtnTxt}>Menu Principal</Text>
        </Icon.Button>
        <Text style={style.title}>Selección de niveles</Text>
      </View>
    )
  }

  _goBack() {
    this.props.navigator.resetTo({id: 'rush-hour-main'});
  }
}
