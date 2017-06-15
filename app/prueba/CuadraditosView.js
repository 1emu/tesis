import React, {Component} from 'react';
import {View} from 'react-native';
import CuadraditoView from './CuadraditoView';
import {observer} from "mobx-react/native"

@observer
export default class CuadraditosView extends Component {
  render() {
    const {cuadraditos} = this.props;

    return <View>
      {cuadraditos.map((cuadradito) => <CuadraditoView key={cuadradito.id} cuadradito={cuadradito}/>)}
    </View>;
  }
}