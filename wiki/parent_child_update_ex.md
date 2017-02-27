import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0}

  componentWillReceiveProps(nextProps) {
    this.setState({count: nextProps.time});
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {time: 0}
  }
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'steelblue'} size={80} time={this.state.time}/>
      </View>
    )
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({time: this.state.time + 1})
    }, 1000)
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('App', () => App)
