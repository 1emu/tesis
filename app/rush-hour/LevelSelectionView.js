/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import RushHourLevels from './RushHourLevels';
import LevelSelectionCell from './LevelSelectionCell';
import LevelSelectionNavBarView from './LevelSelectionNavBarView';
import style from './LevelSelectionStyle';

export default class LevelSelectionView extends Component {
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});
    this.dataSource = dataSource.cloneWithRows(RushHourLevels.LEVELS);
  }

  render() {
    return (
    <View>
        <LevelSelectionNavBarView navigator={this.props.navigator} />
        <ListView dataSource={this.dataSource} initialListSize={30}
                  contentContainerStyle={style.list}
                  renderRow={(levelData) => <LevelSelectionCell navigator={this.props.navigator} level={levelData}/>}
        />
    </View>
    );
  }
}
