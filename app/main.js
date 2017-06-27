/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from "react";
import {AppRegistry} from "react-native";

import Navigation from "./Navigation"
import Metrics from './prueba/Metrics';

class Main extends Component {
    constructor(){
      super();
    };

    render() {
      console.log('hegiht', Metrics.DEVICE_HEIGHT);
      console.log('board width', Metrics.BOARD_WIDTH);
        return (
            <Navigation/>
        )
    }
}

module.exports = Main;
