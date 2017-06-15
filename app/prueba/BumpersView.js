import React, {Component} from 'react';
import {View} from 'react-native';
import BumperView from './BumperView';
import {observer} from "mobx-react/native"

@observer
export default class BumpersView extends Component {
  render() {
    const {bumpers} = this.props;

    return <View>
      {bumpers.map((cuadradito) => <BumperView key={cuadradito.id} cuadradito={cuadradito}/>)}
    </View>;
  }
}