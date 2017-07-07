import React, {Component} from 'react';
import {View, PanResponder, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react/native'

@observer
export default class VictoryGardenView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          width: this.props.victoryGarden.width, height: this.props.victoryGarden.height, backgroundColor: this.props.victoryGarden.backgroundColor,
          left: this._currentX(), top: this._currentY(), position: 'absolute',
          borderColor: 'white'
        }}>
        <View style={styles.container}>
          <Text style={styles.headline}> - - - - </Text>
        </View>
      </View>
    )
  }

  _currentX() {
    return this.props.victoryGarden.x;
  }

  _currentY() {
    return this.props.victoryGarden.y;
  }

}

var styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
