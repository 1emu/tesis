import {StyleSheet} from 'react-native';
import Metrics from '../Metrics'

const levelSelectionStyle = StyleSheet.create({

  list: {
    backgroundColor: '#f7ffb8',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  btn: {
    flexDirection: 'column',
    width: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    height: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    margin: Metrics.LEVEL_SELECTION_BUTTON_MARGIN,
    backgroundColor: '#f7ffb8',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnBeginner: {
    backgroundColor: '#64963a',
  },
  btnIntermediate: {
    backgroundColor: '#d4b727',
  },
  btnAdvanced: {
    backgroundColor: '#bb7722',
  },
  btnExpert: {
    backgroundColor: '#710809',
  },

  btnTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
  },

  levelCompletedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
  },

  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

const navBarStyle = StyleSheet.create({

  navBar: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: "space-between",
    height: Metrics.NAV_BAR_HEIGHT,
    width: Metrics.NAV_BAR_WIDTH,
    backgroundColor: "#c6afb5",
    paddingRight: 10,
  },

  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },

  backBtn: {
    backgroundColor: '#f7ffb8',
  },

  backBtnTxt: {
    color: '#161616',
    fontSize: 16,
  },

});

const iconColor = '#161616';

export default {
  iconColor,
  levelSelectionStyle,
  navBarStyle
}
