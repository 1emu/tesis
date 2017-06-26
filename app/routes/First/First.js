/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, ListView} from 'react-native';
import scene from '../../styles/scene';
import RushHourLevels from '../../prueba/RushHourLevels';

export default class First extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (a,b) => a !== b });
    this.dataSource = ds.cloneWithRows(RushHourLevels.LEVELS);
  }

  render() {
    return (
      <View style={scene.container}>
        <ListView dataSource={this.dataSource} initialListSize={30}
          renderRow={(levelData) => <LevelCell navigator={this.props.navigator} level={levelData}/>}
        />
      </View>
    );
  }
}

class LevelCell extends Component {
  constructor(props) {
    super(props);
    this.navigator = props.navigator;
    this.level = props.level
  }

  render() {
    return(
      <TouchableHighlight onPress={() => { this.chooseLevel() }}>
        <Text>{`${this.level.levelNumber} - ${this.level.difficulty}`}</Text>
      </TouchableHighlight>
    )
  }

  chooseLevel() {
    this.props.navigator.push({
      id: 'rush-hour-lvl',
      levelNumber: this.level.levelNumber
    });
  }
}
