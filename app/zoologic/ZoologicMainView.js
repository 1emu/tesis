/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './ZoologicMainStyle'

export default class ZoologicMainView extends Component {
  iconColor = '#161616';

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>ZOOLOGIC</Text>

        <Icon.Button name="play-circle-filled" size={30} color={this.iconColor} style={style.btn} onPress={() => this.startPlaying()}>
          <Text style={style.btnText}>Comenzar</Text>
        </Icon.Button>

        <Icon.Button name="list" size={30} style={style.btn} onPress={() => this.chooseLevel()}>
          <Text style={style.btnText}>Elegir nivel</Text>
        </Icon.Button>

        <Icon.Button name="arrow-back" size={30} color={this.iconColor} style={style.btn} onPress={() => this.goToGameSelection()}>
          <Text style={style.btnText}>Volver</Text>
        </Icon.Button>
      </View>
    );
  }

  startPlaying() {
    this.props.navigator.push({id: 'zoologic-lvl', levelNumber: 1});
  }

  chooseLevel() {
    this.props.navigator.push({id: 'zoologic-level-selection'});
  }

  goToGameSelection() {
    this.props.navigator.resetTo({id: 'game-selection'});
  }
}
