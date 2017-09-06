import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PlayerResults from './PlayerResults';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'apsl-react-native-button';
import {DIFFICULTY} from './RushHourLevels'
import btnsStyle from './LevelSelectionStyle';

export default class LevelSelectionCell extends Component {
  constructor(props) {
    super(props);
    this.navigator = props.navigator;
    this.level = props.level;
    this.routeId = props.routeId;
  }

  render() {
    let style = this.props.style;
    let btnColor = this.buttonColor();
    return (
      <Button style={[style.btn, btnColor]} onPress={() => {this.chooseLevel()}}>
        <View style={style.btnTextContainer}>
          <Icon name="play-circle-filled" size={30} color='#ffffff'/>
          <Text style={style.btnText}>Nivel {`${this.level.levelNumber}`}</Text>
        </View>
        <View style={style.levelCompletedContainer}>
          {this.levelCompletedTick()}
        </View>
      </Button>
    )
  }

  levelCompletedTick() {
    let tickView = null;
    if (PlayerResults.levelCompleted(this.level.levelNumber)) {
      tickView = <Icon name="done" size={20} color='#ffffff'/>;
    }
    return tickView;
  }

  chooseLevel() {
    this.props.navigator.push({
      id: this.routeId,
      levelNumber: this.level.levelNumber
    });
  }

  buttonColor() {
    switch(this.level.difficulty) {
      case DIFFICULTY.BEGINNER:
        return btnsStyle.btnBeginner;
      case DIFFICULTY.INTERMEDIATE:
        return btnsStyle.btnIntermediate;
      case DIFFICULTY.ADVANCED:
        return btnsStyle.btnAdvanced;
      case DIFFICULTY.EXPERT:
        return btnsStyle.btnExpert;
    }
  }
}
