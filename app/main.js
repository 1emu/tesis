/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from "react";
import {AppRegistry} from "react-native";

import Navigation from "./Navigation"
import Metrics from './prueba/Metrics';
import PlayerResults from "./prueba/PlayerResults";

class Main extends Component {
    constructor(){
      super();
      PlayerResults.loadResults();
    };

    render() {
        return (
            <Navigation/>
        )
    }
}

module.exports = Main;
