import {StyleSheet, Dimensions} from "react-native";

var {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    height: height * 0.2,
    width: width,
    backgroundColor: '#295246',
  },

  content: {
    color: '#ffffff'
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  }
});

export default style;