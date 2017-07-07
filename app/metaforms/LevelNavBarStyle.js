import {StyleSheet, Dimensions} from "react-native";

import Metrics from '../Metrics';

const style = StyleSheet.create({
  navBar: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: "space-between",
    height: Metrics.NAV_BAR_HEIGHT,
    width: Metrics.NAV_BAR_WIDTH,
    backgroundColor: '#f7ffb8',
    paddingRight: 10,
  },

  title: {
    color: '#161616',
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default style;
