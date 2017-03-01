/**
 * Created by jp on 2/22/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, TouchableHighlight, Dimensions} from "react-native";
import Tile from "../../components/tile/Tile";
import style from "./style";
import scene from "../../styles/scene";

var {width, height} = Dimensions.get('window');


export default class Tiles extends React.Component {



  constructor(props) {
    super(props);

    this.state = {draggableTileContainerLayout: undefined}
  }

  render() {
    let windowDimensions = "W: " + width + " H: " + height;

    return (
      <View style={[style.container, {backgroundColor: '#37b451'}]}>
        <View style={scene.title}>
          <Text>Tiles | {windowDimensions}</Text>
          <TouchableHighlight onPress={this.props.navigator.pop}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>

        <View style={[style.tilesContainer]}>
          <Text>TileContainer : {this._getDraggableTileContainerLayout()}</Text>
          <View style={[style.draggableTileContainer, {width: width * 0.8, height: height * 0.8}]} onLayout={this.onLayout}>
            <Tile width={20} height={20} parentLayout={this.state.draggableTileContainerLayout}/>
            <Tile width={40} height={40} x={62} y={0} parentLayout={this.state.draggableTileContainerLayout}/>
            <Tile width={20} height={40} x={100} y={150} parentLayout={this.state.draggableTileContainerLayout}/>
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
    return layout ? 'X: ' + Math.floor(layout.x) + ' Y: ' + Math.floor(layout.y) + ' W: ' + Math.floor(layout.width) + ' H: ' + Math.floor(layout.height) : "undefined"
  }


};