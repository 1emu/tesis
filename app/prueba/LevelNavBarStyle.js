import {StyleSheet, Dimensions} from "react-native";

import Metrics from './Metrics';

const style = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    height: Metrics.NAV_BAR_HEIGHT,
    width: Metrics.NAV_BAR_WIDTH,
    backgroundColor: '#295246',
  },

  content: {
    color: '#ffffff'
  }

});

export default style;