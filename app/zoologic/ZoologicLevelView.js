import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Orientation from 'react-native-orientation';
import LevelNavBarView from './LevelNavBarView';
import TableroZoologicView from './TableroZoologicView';
import style from './ZoologicLevelStyle'

export default class ZoologicLevelView extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Orientation.lockToLandscape();
  }

  render() {
    return (
      <View style={style.container}>
        <LevelNavBarView navigator={this.props.navigator} levelNumber={this.props.levelNumber}/>
        <TableroZoologicView style={style.tablero}/>
      </View>
    );
  }


}
