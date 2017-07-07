import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import {autorun} from 'mobx';
import {observer} from "mobx-react/native"
import style from './MetaformsLevelStyle'
import LevelNavBarView from './LevelNavBarView';

@observer
export default class MetaformsLevelView extends React.Component {

  constructor(props) {
    super(props);
    autorun(() => this.transitionToSuccessScreen());
  }

  render() {
    return (
      <View style={style.container}>
        <LevelNavBarView navigator={this.props.navigator} levelNumber={this.props.levelNumber} />
      </View>
    );
  }

  transitionToSuccessScreen() {
  }

}
