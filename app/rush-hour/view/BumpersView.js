import React, {Component} from 'react';
import {View} from 'react-native';
import AreaView from './AreaView';
import {observer} from "mobx-react/native"

@observer
export default class BumpersView extends Component {
  render() {
    const {bumpers} = this.props;

    return <View>
      {bumpers.map((area) => <AreaView key={area.id} area={area}/>)}
    </View>;
  }
}