/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from 'apsl-react-native-button';
import style from './GameSelectionStyle'

export default class GameSelectionView extends Component {

  render() {
    return (
      <View style={style.container}>
        <Button style={style.rushHourBtn} onPress={() => this._goToRushHour()}>
          <Text style={style.rushHourBtnText}>RUSH HOUR</Text>
        </Button>

        <Button style={style.metaformsBtn} onPress={() => this._goToMetaforms()}>
          <Text style={style.metaformsBtnText}>METAFORMS</Text>
        </Button>
      </View>
    );
  }

  _goToRushHour() {
    this.props.navigator.push({id: 'rush-hour-main'});
  }

  _goToMetaforms() {
    this.props.navigator.push({id: 'metaforms-main'});
  }
}
