/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import RushHourLevels from './RushHourLevels';
import LevelSelectionCell from './LevelSelectionCell';
import style from './LevelSelectionStyle';

export default class LevelSelectionView extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});
    this.dataSource = ds.cloneWithRows(RushHourLevels.LEVELS);
  }

  render() {
    return (
        <ListView dataSource={this.dataSource} initialListSize={30}
                  contentContainerStyle={style.list}
                  renderRow={(levelData) => <LevelSelectionCell navigator={this.props.navigator} level={levelData}/>}
        />
    );
  }
}
