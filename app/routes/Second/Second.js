/**
 * Created by jp on 2/5/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import BoardView from "../../components/RushHour"
import scene from "../../styles/scene"

export default class Second extends React.Component{
    render() {
        return (
            <View style={[scene.container, {backgroundColor: '#146db4'}]}>
                <Text>SECOND</Text>
                <TouchableHighlight onPress={this.props.navigator.pop}>
                    <Text>Back</Text>
                </TouchableHighlight>
                <BoardView/>
            </View>
        );
    }

};