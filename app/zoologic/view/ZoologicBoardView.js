import React, {Component} from 'react';
import {View} from 'react-native';
import Metrics from '../../Metrics';
import style from '../style/ZoologicBoardStyle'
import PiecesBarView from './PiecesBarView';
import ZoologicPieceView from './ZoologicPieceView';
import ZoologicSquareView from './ZoologicSquareView';

export default class ZoologicBoardView extends Component {
  constructor(props) {
    super(props);
    this.board = this.props.board;
    this.squares = this.board.squares;
    this.pieces = this.board.pieces;
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{backgroundColor: 'lightgrey', height: Metrics.DEVICE_HEIGHT - Metrics.NAV_BAR_HEIGHT, width: Metrics.BOARD_WIDTH, left: 0}}>
          {this._renderPiecesBar()}
          {this.squares.map((square) =>
            <ZoologicSquareView key={square.key} square={square}/>
          )}
          {this.pieces.map((piece, index) =>
            <ZoologicPieceView key={'piece'+index} piece={piece}/>
          )}
        </View>
      </View>
    )
  }

  _renderPiecesBar() {
    return (
      <PiecesBarView key='piecesBar' x={0} y={Metrics.DEVICE_HEIGHT - Metrics.ZOOLOGIC_PIECES_BAR_HEIGHT} width={Metrics.ZOOLOGIC_PIECES_BAR_WIDTH} height={Metrics.ZOOLOGIC_PIECES_BAR_HEIGHT}/>
    )
  }
}


