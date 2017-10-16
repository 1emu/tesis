import {StyleSheet} from 'react-native';
import Metrics from './Metrics';
import RushHourColors from './rush-hour/RushHourColors';
import ZoologicColors from './zoologic/ZoologicColors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#877670',
  },

  title: {
    color: '#353535',
    fontSize: 48,
  },

  rushHourBtn: {
    alignSelf: 'center',
    backgroundColor: '#295246',
    width: Metrics.DEVICE_WIDTH * 0.6,
  },

  rushHourBtnText: {
    color: RushHourColors.light,
    fontWeight: 'bold',
    fontSize: 18,
  },

  zoologicBtn: {
    alignSelf: 'center',
    backgroundColor: '#f7ffb8',
    width: Metrics.DEVICE_WIDTH * 0.6,
  },

  zoologicBtnText: {
    color: ZoologicColors.dark,
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;