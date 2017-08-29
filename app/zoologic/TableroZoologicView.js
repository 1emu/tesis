import React, {Component} from 'react';
import {View} from 'react-native';
import Metrics from '../Metrics';
import style from './TableroZoologicStyle'
import PiecesBar from './PiecesBar';
import PiecesBarView from './PiecesBarView';
import ZoologicPiece from './ZoologicPiece';
import ZoologicPieceView from './ZoologicPieceView';
import ZoologicSquareView from './ZoologicSquareView';
import ZoologicSquaresInitializer from './ZoologicSquaresInitializer';
import ZoologicPieceTypeGenerator from './ZoologicPieceTypeGenerator';

export default class TableroZoologicView extends Component {
  constructor(props) {
    super(props);
    this.squares = new ZoologicSquaresInitializer(1).getSquares();
    this.generarCuadraditos();
    this.piecesBar = new PiecesBar('piecesBar', 0, 0, Metrics.ZOOLOGIC_PIECES_BAR_WIDTH, Metrics.DEVICE_HEIGHT - Metrics.NAV_BAR_HEIGHT);
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{backgroundColor: 'lightgrey', height: Metrics.DEVICE_HEIGHT - Metrics.NAV_BAR_HEIGHT, width: Metrics.BOARD_WIDTH, left: 0}}>
          <PiecesBarView key='piecesBar' piecesBar={this.piecesBar}/>
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

  generarCuadraditos() {
    let piecesX = Metrics.ZOOLOGIC_PIECES_BAR_PADDING;
    let initialY = Metrics.ZOOLOGIC_PIECES_BAR_PADDING;

    this.pieces = [
      new ZoologicPiece(ZoologicPieceTypeGenerator.MOUSE(), piecesX, initialY, this.squares),
      new ZoologicPiece(ZoologicPieceTypeGenerator.CAT(), piecesX, Metrics.TILE_SIZE + piecesX * 2, this.squares),
      new ZoologicPiece(ZoologicPieceTypeGenerator.DOG(), piecesX, Metrics.TILE_SIZE * 2 + piecesX * 3, this.squares),
      new ZoologicPiece(ZoologicPieceTypeGenerator.BULLDOG(), piecesX, Metrics.TILE_SIZE * 3 + piecesX * 4, this.squares)

    ]
  }
}


