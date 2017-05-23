/**
 * Created by jp on 2/22/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, TouchableHighlight, Dimensions} from "react-native";
import {observer} from 'mobx-react/native'
import style from "./style";
import scene from "../../styles/scene";
import colisionador from "../../components/Colisionador"
import Tile from '../../components/tile/Tile';

var {width, height} = Dimensions.get('window');

@observer
export default class Tiles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {draggableTileContainerLayout: undefined}
  }

  render() {
    const colo = new colisionador();

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
            <Text>{colo.tiles[0].lulu}</Text>
            {colo.tiles.map(
              (tile, key) => <Tile key={key} tileModel={tile} parentLayout={this.state.draggableTileContainerLayout}/>
            )}
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