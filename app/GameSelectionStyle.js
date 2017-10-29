import {StyleSheet} from 'react-native';
import Metrics from './Metrics';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },

  title: {
    color: '#353535',
    fontSize: 48,
  },

  rushHourBtn: {
    alignSelf: 'center',
    backgroundColor: "#ffffff",
    width: Metrics.DEVICE_WIDTH * 0.9,
    height: Metrics.DEVICE_HEIGHT * 0.4,
  },

  rushHourBtnText: {
    color: "#000000",
    fontWeight: 'bold',
    fontSize: 18,
  },

  zoologicBtn: {
    alignSelf: 'center',
    backgroundColor: "#ffffff",
    width: Metrics.DEVICE_WIDTH * 0.9,
    height: Metrics.DEVICE_HEIGHT * 0.4,
  },

  zoologicBtnText: {
    color: "#000000",
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;