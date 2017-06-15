import React, {Component} from 'react';
import {View} from 'react-native';
import Tablero from './Tablero';
import CuadraditoView from './CuadraditoView';
import VictoryGardenView from './VictoryGardenView';
import {BOARD_HEIGHT, BOARD_WIDTH} from './Metrics';


export default class TableroView extends Component {
  constructor(props) {
    super(props);
    this.tablero = new Tablero(props);
    this.metrics = props.metrics;
  }

  render() {
    let height = this.metrics.BOARD_HEIGHT;
    let width = this.metrics.BOARD_WIDTH;
    let boardmargin = this.metrics.BOARD_MARGIN;
    return (
      <View style={{backgroundColor: 'powderblue', height: height, width: width, top: boardmargin, left: boardmargin/2}}>
        <VictoryGardenView key='victoryGarden' victoryGarden={this.tablero.victoryGarden}/>
        { this.tablero.cuadraditos.map((cuadradito, index) => {
          return (<CuadraditoView key={index} cuadradito={cuadradito}/>);
        })}
      </View>
    )
  }
}
