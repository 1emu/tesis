import {StyleSheet} from "react-native";
import Metrics from '../Metrics';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f7ffb8',
  },

  title: {
    color: '#000000',
    fontSize: 48,
  },

  btn: {
    backgroundColor: "#c6afb5",
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "center",
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