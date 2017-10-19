import React, {Component} from 'react';
import {View} from 'react-native';
import RushHourPieceView from './RushHourPieceView';
import {observer} from "mobx-react/native"

@observer
export default class VehiclesView extends Component {
  render() {
    const {cuadraditos} = this.props;

    return <View>
      {cuadraditos.map((area) => <RushHourPieceView key={area.id} area={area}/>)}
    </View>;
  }
}