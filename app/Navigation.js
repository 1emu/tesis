/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text, TouchableHighlight} from "react-native";
import {Navigator} from "react-native-deprecated-custom-components";


import First from "./routes/First/First"
import Second from "./routes/Second/Second"
import AnimatedBars from "./routes/AnimatedBars/AnimatedBars"
import Tiles from "./routes/Tiles/Tiles"
import TableroView from "./prueba/TableroView"

export default class Navigation extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{id: 'prueba'}}
                renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'first':
                return (<First navigator={navigator} title="first"/>);
            case 'second':
                return (<Second navigator={navigator} title="second"/>);
            case 'animatedBars':
                return (<AnimatedBars navigator={navigator} title="animatedBars"/>);
            case 'tiles':
                return (<Tiles navigator={navigator} title="tiles"/>);
            case 'prueba':
                return (<TableroView/>);
        }
    }

}
