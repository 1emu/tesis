import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from './LevelNavBarStyle'
import Button from 'apsl-react-native-button';
import Modal from './Modal';
import ModalView from './ModalView';

export default class LevelNavBarView extends Component {

  constructor(props){
    super(props);
    this.modal = new Modal('rush-hour-level-modal');
  }

  render() {
    return (
    <View>
      <View style={style.container}>
        <Text style={style.content}>{this.props.text}</Text>
        <ModalView modal={this.modal}/>
      </View>
    </View>
    )
  }
}
