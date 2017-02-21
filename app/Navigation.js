/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from "react";
import {Navigator, StyleSheet, View, Text, TouchableHighlight} from "react-native";


import First from "./routes/First/First"
import Second from "./routes/Second/Second"
import AnimatedBars from "./routes/AnimatedBars/AnimatedBars"
import DragAndDrop from "./routes/DragAndDrop/DragAndDrop"


export default class Navigation extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{id: 'first'}}
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
            case 'dragAndDrop':
                return (<DragAndDrop navigator={navigator} title="dragAndDrop"/>);
        }
    }
}
