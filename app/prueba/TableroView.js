import React, {Component} from "react";
import {View} from "react-native";
import Tablero from "./Tablero"
import CuadraditoView from "./CuadraditoView"

export default class TableroView extends Component {
  constructor(props) {
    super(props);
    this.tablero = new Tablero();
  }

  render() {
    return (
      <View>
        { this.tablero.cuadraditos.map((cuadradito, index) => {
          return (<CuadraditoView key={index} cuadradito={cuadradito}/>);
        })}
      </View>
    )
  }
}
