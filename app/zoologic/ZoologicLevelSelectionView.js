/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import LevelSelectionCell from '../rush-hour/LevelSelectionCell';
import ZoologicLevels from './ZoologicLevels';
import ZoologicLevelSelectionNavBarView from './ZoologicLevelSelectionNavBarView';

export default class ZoologicLevelSelectionView extends Component {
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});
    this.dataSource = dataSource.cloneWithRows(ZoologicLevels.LEVELS);
  }

  render() {
    return (
      <View>
        <ZoologicLevelSelectionNavBarView navigator={this.props.navigator} style={this.props.style.navBarStyle} iconColor={this.props.style.iconColor} backRouteId={this.props.backRouteId}/>
        <ListView dataSource={this.dataSource} initialListSize={30}
                  contentContainerStyle={this.props.style.levelSelectionStyle.list}
                  renderRow={(levelData) => <LevelSelectionCell navigator={this.props.navigator} level={levelData} routeId={this.props.levelSelectionRouteId} style={this.props.style.levelSelectionStyle}/>}
        />
      </View>
    );
  }
}
