/**
 * Created by jp on 2/22/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, TouchableHighlight, Dimensions} from "react-native";
import Tile from "../../components/tile/Tile";
import style from "./style";
import scene from "../../styles/scene";

var {width, height} = Dimensions.get('window');
var TILE_WIDTH = 20; // 20% of the screen width
var TILE_HEIGHT = TILE_WIDTH;


export default class Tiles extends React.Component {



  constructor(props) {
    super(props);

    this.state = {draggableTileContainerLayout: undefined}
  }

  render() {
    let windowDimensions = "w: " + width + " h: " + height;

    return (
      <View style={[style.container, {backgroundColor: '#37b451'}]}>
        <View style={scene.title}>
          <Text>Tiles | {windowDimensions}</Text>
          <TouchableHighlight onPress={this.props.navigator.pop}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>

        <View style={[style.tilesContainer]}>
          <Text>DraggableTileContainer : {this._getDraggableTileContainerLayout()}</Text>
          <View style={[style.draggableTileContainer, {width: 200, height: 300}]} onLayout={this.onLayout}>
            <Tile width={TILE_WIDTH} height={TILE_HEIGHT} parentLayout={this.state.draggableTileContainerLayout}/>
          </View>
        </View>

      </View>
    );
  }

  onLayout = event => {
    if (this.state.draggableTileContainerLayout) return;
    this.setState({draggableTileContainerLayout: event.nativeEvent.layout});
  };

  _getDraggableTileContainerLayout(){
    let layout = this.state.draggableTileContainerLayout;
    return layout ? 'x: ' + layout.x + ' y: ' + layout.y + ' width: ' + layout.width + ' hegiht: ' + layout.height : "undefined"
  }


};