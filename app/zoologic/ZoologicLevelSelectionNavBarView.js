import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ZoologicLevelSelectionNavBarView extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={this.props.style.navBar}>
        <Icon.Button name="arrow-back" size={20} color={this.props.iconColor}  style={this.props.style.backBtn} onPress={() => this._goBack()}>
          <Text style={this.props.style.backBtnTxt}>Menu Principal</Text>
        </Icon.Button>
        <Text style={this.props.style.title}>Selección de niveles</Text>
      </View>
    )
  }

  _goBack() {
    this.props.navigator.resetTo({id: this.props.backRouteId});
  }
}
