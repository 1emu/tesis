/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Button from 'apsl-react-native-button';
import style from './GameSelectionStyle'

export default class GameSelectionView extends Component {


  render() {
    return (
      <View style={style.container}>

        <Button style={style.rushHourBtn} onPress={() => this._goToRushHour()}>
          <Image style={{alignSelf: 'center'}}
            source={require('./rush-hour/img/cars/red_car_right.gif')}
          />
          <Text style={style.rushHourBtnText}>   RUSH HOUR</Text>
        </Button>

        <Button style={style.zoologicBtn} onPress={() => this._goToZoologic()}>
          <Image style={{alignSelf: 'center'}}
                 source={require('./zoologic/img/Cat.png')}
          />
          <Text style={style.zoologicBtnText}>  ZOOLOGIC  </Text>
          <Image style={{alignSelf: 'center'}}
                 source={require('./zoologic/img/Dog.png')}
          />
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
