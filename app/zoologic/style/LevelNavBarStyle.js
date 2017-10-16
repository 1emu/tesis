import {StyleSheet, Dimensions} from "react-native";

import Metrics from '../../Metrics';
import ZoologicColors from './ZoologicColors';

const style = StyleSheet.create({
  navBar: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: "space-between",
    height: Metrics.NAV_BAR_HEIGHT,
    width: Metrics.NAV_BAR_WIDTH,
    backgroundColor: ZoologicColors.light,
    paddingRight: 10,
  },

  title: {
    color: ZoologicColors.dark,
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default style;
