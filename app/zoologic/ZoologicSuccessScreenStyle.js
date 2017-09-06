import {StyleSheet, Dimensions} from "react-native";

import Metrics from '../Metrics';

const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#f7ffb8',
  },

  content: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: "#c6afb5",
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },

  btnText: {
    color: '#161616',
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;
