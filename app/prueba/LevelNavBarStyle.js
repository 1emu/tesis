import {StyleSheet, Dimensions} from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const style = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    height: height * 0.05,
    width: width,
    backgroundColor: '#295246',
  },

  content: {
    color: '#ffffff'
  }

});

export default style;