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

        <Button style={style.zoologicBtn} onPress={() => this._goToZoologic()}>
          <Text style={style.zoologicBtnText}>ZOOLOGIC</Text>
        </Button>
      </View>
    );
  }

  _goToRushHour() {
    this.props.navigator.push({id: 'rush-hour-main'});
  }

  _goToZoologic() {
    this.props.navigator.push({id: 'zoologic-main'});
  }
}
