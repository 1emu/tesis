import {StyleSheet} from "react-native";
import Metrics from '../Metrics';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#295246',
  },

  title: {
    fontSize: 48,
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
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;