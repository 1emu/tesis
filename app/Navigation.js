/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Metrics from '../app/prueba/Metrics'

import First from './routes/First/First'
import RushHourLevel from './prueba/RushHourLevel';
import RushHourSuccessScreen from './prueba/RushHourSuccessScreen';
import LevelSelectionView from "./prueba/LevelSelectionView";

export default class Navigation extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'rush-hour-level-selection'}}
        renderScene={this.navigatorRenderScene}
      /> // este es el this de Navigation
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'rush-hour-lvl':
        return (<RushHourLevel navigator={navigator} levelNumber={route.levelNumber}/>); // este es el this de Navigator
      case 'rush-hour-success-screen':
        return (<RushHourSuccessScreen navigator={navigator} actualLevelNumber={route.levelNumber} nextLevelNumber={route.nextLevelNumber}/>); // este es el this de Navigator
      case 'rush-hour-level-selection':
        return (<LevelSelectionView navigator={navigator}/>);
    }
  }

}
