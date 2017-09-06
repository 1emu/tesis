import {StyleSheet, Dimensions} from "react-native";

import RushHourColors from '../rush-hour/RushHourColors'
import Metrics from '../Metrics';

const style = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: RushHourColors.mid
  },

  content: {
    color: RushHourColors.light,
    fontSize: 20,
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: "#295246",
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },

  btnText: {
    color: RushHourColors.light,
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;
