/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import mainStyle from '../style/ZoologicMainStyle'

export default class ZoologicMainView extends Component {
  iconColor = mainStyle.iconColor;

  render() {
    return (
      <View style={mainStyle.style.container}>
        <Text style={mainStyle.style.title}>ZOOLOGIC</Text>

        <Icon.Button name="play-circle-filled" size={30} color={this.iconColor} style={mainStyle.style.btn} onPress={() => this.startPlaying()}>
          <Text style={mainStyle.style.btnText}>COMENZAR</Text>
        </Icon.Button>

        <Icon.Button name="list" size={30} color={this.iconColor}  style={mainStyle.style.btn} onPress={() => this.chooseLevel()}>
          <Text style={mainStyle.style.btnText}>ELEGIR NIVEL</Text>
        </Icon.Button>

        <Icon.Button name="arrow-back" size={30} color={this.iconColor} style={mainStyle.style.btn} onPress={() => this.goToGameSelection()}>
          <Text style={mainStyle.style.btnText}>VOLVER</Text>
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
