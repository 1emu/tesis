import {StyleSheet, Dimensions} from "react-native";

import RushHourColors from './RushHourColors'
import Metrics from '../../Metrics';

const style = StyleSheet.create({
  navBar: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: "space-between",
    height: Metrics.NAV_BAR_HEIGHT,
    width: Metrics.NAV_BAR_WIDTH,
    backgroundColor: RushHourColors.dark,
    paddingRight: 10,
  },

  title: {
    color: RushHourColors.light,
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default style;
