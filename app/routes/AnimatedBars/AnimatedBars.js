/**
 * Created by jp on 2/5/2017.
 */

import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableHighlight, StyleSheet } from 'react-native';

import AnimatedBar from '../../components/AnimatedBar';
import style from "./style"
import scene from "../../styles/scene"

const window = Dimensions.get('window');
const DELAY = 100;

export default class AnimatedBars extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(Math.floor(Math.random() * window.width));
    }

    this.setState({
      data,
    });
  }

  render() {
    return (
      <View style={style.container}>
          <View style={scene.title}>
            <Text>ANIMATED BARS</Text>
            <TouchableHighlight onPress={this.props.navigator.pop}>
              <Text>Back</Text>
            </TouchableHighlight>
          </View>
          <View style={style.barContainer}>
            {this.state.data.map((value, index) => <AnimatedBar value={value} delay={DELAY * index} key={index} />)}
          </View>
      </View>
    );
  }

};