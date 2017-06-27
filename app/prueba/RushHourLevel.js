import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import LevelNavBarView from './LevelNavBarView';
import TableroView from './TableroView';
import style from './RushHourLevelStyle'
import {autorun} from 'mobx';
import InicializadorDeTablero from './InicializadorDeTablero';
import Metrics from './Metrics';

export default class RushHourLevel extends React.Component {

  constructor(props) {
    super(props);
    this.tablero = new InicializadorDeTablero(props.levelNumber).obtenerTablero();
    autorun(() => this.transitionToSuccessScreen());
  }

  render() {
    let levelTitle = 'Nivel ' + this.props.levelNumber;

    return (

      <View style={style.container}>
        <LevelNavBarView text={levelTitle}/>
        <TableroView tablero={this.tablero}/>
      </View>
    );
  }

  transitionToSuccessScreen() {
    if (this.tablero.playerHasWon) {
      this.props.navigator.push({id: 'rush-hour-success-screen', levelNumber: this.props.levelNumber, nextLevelNumber: this.props.levelNumber + 1});
    }
  }

}
