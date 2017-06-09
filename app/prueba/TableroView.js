import React, {Component} from "react";
import {View} from "react-native";
import Tablero from "./Tablero";
import CuadraditoView from "./CuadraditoView";

export default class TableroView extends Component {
  constructor(props) {
    super(props);
    this.tablero = new Tablero();
  }

  render() {
    return (
      <View style={{backgroundColor: 'powderblue', height: 500, width: 300, top: 50, left: 30}}>
        { this.tablero.cuadraditos.map((cuadradito, index) => {
          return (<CuadraditoView key={index} cuadradito={cuadradito}/>);
        })}
      </View>
    )
  }
}
