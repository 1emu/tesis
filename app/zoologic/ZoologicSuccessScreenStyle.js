import {StyleSheet, Dimensions} from "react-native";

import Metrics from '../Metrics';
import ZoologicColors from './ZoologicColors'

const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: ZoologicColors.light,
  },

  content: {
    color: ZoologicColors.dark,
    fontSize: 20,
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: ZoologicColors.mid,
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },

  btnText: {
    color: ZoologicColors.dark,
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;
