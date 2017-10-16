import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import style from '../style/RushHourLevelStyle'
import {autorun} from 'mobx';
import LevelNavBarView from './LevelNavBarView';
import RushHourPieceView from './RushHourBoardView';
import InicializadorDeTablero from '../model/RushHourBoardInitializer';
import {observer} from "mobx-react/native"
import PlayerResults from "../model/PlayerResults";

@observer
export default class RushHourLevelView extends React.Component {

  constructor(props) {
    super(props);
    this.board = new InicializadorDeTablero(props.levelNumber).obtenerTablero();
    autorun(() => this.transitionToSuccessScreen());
  }

  render() {
    return (
      <View style={style.container}>
        <LevelNavBarView navigator={this.props.navigator} levelNumber={this.props.levelNumber} />
        <RushHourPieceView board={this.board}/>
      </View>
    );
  }

  transitionToSuccessScreen() {
    if (this.board.playerHasWon) {
      PlayerResults.markLevelComplete(this.props.levelNumber);
      this.props.navigator.push({id: 'rush-hour-success-screen', levelNumber: this.props.levelNumber, nextLevelNumber: this.props.levelNumber + 1});
    }
  }

}
