import {StyleSheet} from "react-native";

import Metrics from '../../Metrics';
import RushHourColors from './RushHourColors'

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: RushHourColors.dark,
  },

  title: {
    fontSize: 48,
    color: RushHourColors.light
  },

  btn: {
    backgroundColor: "#3e9184",
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "center",
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