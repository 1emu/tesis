/**
 * Created by jp on 2/22/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Dimensions } from 'react-native';


import Tile from "../../components/Tile"
import style from "./style"
import scene from "../../styles/scene"

export default class Tiles extends React.Component{
    render() {
        return (
            <View style={[style.container, {backgroundColor: '#37b451'}]}>
              <View style={scene.title}>
                <Text>Tiles</Text>
                <TouchableHighlight onPress={this.props.navigator.pop}>
                    <Text>Back</Text>
                </TouchableHighlight>
              </View>
              <View style={style.tileContainer}>
                <Tile />
              </View>

            </View>
        );
    }

};