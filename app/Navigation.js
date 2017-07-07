/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Orientation from 'react-native-orientation';

import RushHourMainView from './rush-hour/RushHourMainView'
import RushHourLevelView from './rush-hour/RushHourLevelView';
import RushHourSuccessScreenView from './rush-hour/RushHourSuccessScreenView';
import LevelSelectionView from "./rush-hour/LevelSelectionView";
import ZoologicMainView from './zoologic/ZoologicMainView';
import GameSelectionView from './rush-hour/GameSelectionView';
import ZoologicLevelView from './zoologic/ZoologicLevelView';

export default class Navigation extends React.Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    const initial = Orientation.getInitialOrientation();
    if (initial === 'LANDSCAPE') {
      console.log('landscape orientation detected');
      Orientation.lockToPortrait();
      console.log('changed to portrait');
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'game-selection'}}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {

      case 'game-selection':
        return (<GameSelectionView navigator={navigator} />);

      case 'rush-hour-main':
        return (<RushHourMainView navigator={navigator} />);
      case 'rush-hour-lvl':
        return (<RushHourLevelView navigator={navigator} levelNumber={route.levelNumber}/>);
      case 'rush-hour-success-screen':
        return (<RushHourSuccessScreenView navigator={navigator} actualLevelNumber={route.levelNumber} nextLevelNumber={route.nextLevelNumber}/>);
      case 'rush-hour-level-selection':
        return (<LevelSelectionView navigator={navigator}/>);

      case 'zoologic-main':
        return (<ZoologicMainView navigator={navigator}/>);
      case 'zoologic-lvl':
        return (<ZoologicLevelView navigator={navigator} levelNumber={1}/>);
    }
  }

}
