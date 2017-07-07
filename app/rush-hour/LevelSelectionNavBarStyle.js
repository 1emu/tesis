import {StyleSheet} from 'react-native';
import Metrics from '../Metrics'

const style = StyleSheet.create({

  navBar: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: "space-between",
    height: Metrics.NAV_BAR_HEIGHT_PORTRAIT,
    width: Metrics.NAV_BAR_WIDTH_PORTRAIT,
    backgroundColor: '#295246',
    paddingRight: 10,
  },

  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  backBtn: {
    backgroundColor: "#3e9184",
  },

  backBtnTxt: {
    color: '#ffffff',
    fontSize: 16,
  },

});

export default style;
