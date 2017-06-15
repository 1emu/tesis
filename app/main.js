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
      this.metrics = new Metrics();
    };
    render() {
        return (
            <Navigation metrics={this.metrics}/>
        )
    }
}

module.exports = Main;
