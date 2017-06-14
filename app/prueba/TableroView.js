import React, {Component} from "react";
import {View} from "react-native";
import Tablero from "./Tablero";
import CuadraditoView from "./CuadraditoView";
import VictoryGardenView from "./VictoryGardenView";

export default class TableroView extends Component {
  constructor(props) {
    super(props);
    this.tablero = new Tablero(props.navigator);
  }

  render() {
    return (
      <View style={{backgroundColor: 'powderblue', height: 500, width: 300, top: 50, left: 30}}>
        <VictoryGardenView key='victoryGarden' victoryGarden={this.tablero.victoryGarden}/>
        { this.tablero.cuadraditos.map((cuadradito, index) => {
          return (<CuadraditoView key={index} cuadradito={cuadradito}/>);
        })}
      </View>
    )
  }
}
