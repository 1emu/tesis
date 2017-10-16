/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from "react";
import {AppRegistry} from "react-native";

import Navigation from "./Navigation"
import Metrics from './Metrics';
import PlayerResults from "./rush-hour/model/PlayerResults";

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
