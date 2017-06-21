/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';


import First from './routes/First/First'
import RushHourLevel from './prueba/RushHourLevel';
import RushHourSuccessScreen from './prueba/RushHourSuccessScreen';

export default class Navigation extends React.Component {
  constructor(props) {
    super();
    this.metrics = props.metrics;
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene}
        metrics={this.metrics}/> // este es el this de Navigation
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'rush-hour-lvl':
        return (<RushHourLevel navigator={navigator} metrics={this.metrics} levelNumber={route.levelNumber}/>); // este es el this de Navigator
      case 'rush-hour-success-screen':
        return (<RushHourSuccessScreen navigator={navigator} metrics={this.metrics} actualLevelNumber={route.levelNumber} nextLevelNumber={route.nextLevelNumber}/>); // este es el this de Navigator
    }
  }

}
