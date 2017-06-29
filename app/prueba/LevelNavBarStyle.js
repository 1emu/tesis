import {StyleSheet, Dimensions} from "react-native";

import Metrics from './Metrics';

const style = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: "space-between",
    height: Metrics.NAV_BAR_HEIGHT,
    width: Metrics.NAV_BAR_WIDTH,
    backgroundColor: '#295246',
    paddingRight: 10,
  },

  content: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default style;