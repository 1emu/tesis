/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from "react";
import {Navigator, StyleSheet, View, Text, TouchableHighlight} from "react-native";


import First from "./First"
import Second from "./Second"

export default class Navigation extends React.Component {
    render() {
        return (
            <Navigator
                style={this.styles.container}
                initialRoute={{id: 'first'}}
                renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        console.log('route id: ' + route.id);
        switch (route.id) {
            case 'first':
                console.log('returning first');
                return (<First navigator={navigator} title="first"/>);
            case 'second':
                console.log('returning second');
                return (<Second navigator={navigator} title="second"/>);
        }
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#644B62',
        },
        toolbar: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#356434',
        },
    });
}