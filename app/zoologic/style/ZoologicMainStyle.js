import {StyleSheet} from "react-native";
import Metrics from '../../Metrics';
import ZoologicColors from './ZoologicColors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: ZoologicColors.light,
  },

  title: {
    color: '#000000',
    fontSize: 48,
  },

  btn: {
    backgroundColor: ZoologicColors.mid,
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10
  },

  btnText: {
    color: ZoologicColors.dark,
    fontWeight: 'bold',
    fontSize: 18,
  }

});

const iconColor = ZoologicColors.dark;

export default {
  style,
  iconColor
};