/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import First from './routes/First/First'
import RushHourLevelView from './prueba/RushHourLevelView';
import RushHourSuccessScreenView from './prueba/RushHourSuccessScreenView';
import LevelSelectionView from "./prueba/LevelSelectionView";

export default class Navigation extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene}
      /> // este es el this de Navigation
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'rush-hour-lvl':
        return (<RushHourLevelView navigator={navigator} levelNumber={route.levelNumber}/>); // este es el this de Navigator
      case 'rush-hour-success-screen':
        return (<RushHourSuccessScreenView navigator={navigator} actualLevelNumber={route.levelNumber} nextLevelNumber={route.nextLevelNumber}/>); // este es el this de Navigator
      case 'rush-hour-level-selection':
        return (<LevelSelectionView navigator={navigator}/>);
    }
  }

}
