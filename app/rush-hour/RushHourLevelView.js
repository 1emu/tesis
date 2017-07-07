import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import {autorun} from 'mobx';
import {observer} from "mobx-react/native"
import Orientation from 'react-native-orientation';
import LevelNavBarView from './LevelNavBarView';
import TableroView from './TableroView';
import InicializadorDeTablero from './InicializadorDeTablero';
import PlayerResults from "./PlayerResults";
import style from './RushHourLevelStyle'

@observer
export default class RushHourLevelView extends React.Component {

  constructor(props) {
    super(props);
    this.tablero = new InicializadorDeTablero(props.levelNumber).obtenerTablero();
    autorun(() => this.transitionToSuccessScreen());
  }

  componentWillMount() {
    Orientation.lockToPortrait();
  }


  render() {
    return (
      <View style={style.container}>
        <LevelNavBarView navigator={this.props.navigator} levelNumber={this.props.levelNumber} />
        <TableroView tablero={this.tablero}/>
      </View>
    );
  }

  transitionToSuccessScreen() {
    if (this.tablero.playerHasWon) {
      PlayerResults.markLevelComplete(this.props.levelNumber);
      this.props.navigator.push({id: 'rush-hour-success-screen', levelNumber: this.props.levelNumber, nextLevelNumber: this.props.levelNumber + 1});
    }
  }

}
