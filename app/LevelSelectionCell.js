import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PlayerResults from './rush-hour/PlayerResults';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'apsl-react-native-button';
import {DIFFICULTY} from './rush-hour/RushHourLevels'

export default class LevelSelectionCell extends Component {
  constructor(props) {
    super(props);
    this.navigator = props.navigator;
    this.level = props.level;
    this.routeId = props.routeId;
  }

  render() {
    let levelSelectionStyle = this.props.style.levelSelectionStyle;
    let btnColor = this.buttonColor();
    return (
      <Button style={[levelSelectionStyle.btn, btnColor]} onPress={() => {this.chooseLevel()}}>
        <View style={levelSelectionStyle.btnTextContainer}>
          <Icon name="play-circle-filled" size={30} color={this.props.style.iconColor}/>
          <Text style={levelSelectionStyle.btnText}>NIVEL {`${this.level.levelNumber}`}</Text>
        </View>
        <View style={levelSelectionStyle.levelCompletedContainer}>
          {this.levelCompletedTick()}
        </View>
      </Button>
    )
  }

  levelCompletedTick() {
    let tickView = null;
    if (PlayerResults.levelCompleted(this.level.levelNumber)) {
      tickView = <Icon name="done" size={20} color={this.props.style.iconColor}/>;
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
    let levelSelectionStyle = this.props.style.levelSelectionStyle;

    switch(this.level.difficulty) {
      case DIFFICULTY.BEGINNER:
        return levelSelectionStyle.btnBeginner;
      case DIFFICULTY.EASY:
        return levelSelectionStyle.btnEasy;
      case DIFFICULTY.INTERMEDIATE:
        return levelSelectionStyle.btnIntermediate;
      case DIFFICULTY.ADVANCED:
        return levelSelectionStyle.btnAdvanced;
      case DIFFICULTY.EXPERT:
        return levelSelectionStyle.btnExpert;
    }
  }
}
