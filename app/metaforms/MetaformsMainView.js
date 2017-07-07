/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './MetaformsMainStyle'

export default class MetaformsMainView extends Component {
  iconColor = '#161616';

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>METAFORMS</Text>

        <Icon.Button name="play-circle-filled" size={30} color={this.iconColor} style={style.btn} onPress={() => this.startPlaying()}>
          <Text style={style.btnText}>Comenzar</Text>
        </Icon.Button>

        <Icon.Button name="arrow-back" size={30} color={this.iconColor} style={style.btn} onPress={() => this.goToGameSelection()}>
          <Text style={style.btnText}>Volver</Text>
        </Icon.Button>
      </View>
    );
  }

  startPlaying() {
    this.props.navigator.push({id: 'metaforms-lvl'});
  }

  goToGameSelection() {
    this.props.navigator.resetTo({id: 'game-selection'});
  }
}
