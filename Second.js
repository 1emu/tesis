/**
 * Created by jp on 2/5/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Second extends React.Component{
    render() {
        return (
            <View style={this.styles.container}>
                <Text>SECOND</Text>
                <TouchableHighlight onPress={this.props.navigator.pop}>
                    <Text>Back</Text>
                </TouchableHighlight>
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#146db4',
        }
    });
};