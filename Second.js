/**
 * Created by jp on 2/5/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, ToolbarAndroid, StyleSheet } from 'react-native';

export default class Second extends React.Component{
    render() {
        return (
            <View style={this.styles.container}>
                <ToolbarAndroid style={this.styles.toolbar}
                                title={this.props.title}
                                navIcon={require('./android/app/src/main/res/ic_arrow_back_white_24dp.png')}
                                onIconClicked={this.props.navigator.pop}
                                titleColor={'#FFFFFF'}/>
                <Text>
                    Second screen
                </Text>
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05124E',
        },
        toolbar: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#356434',
        },
    });
};