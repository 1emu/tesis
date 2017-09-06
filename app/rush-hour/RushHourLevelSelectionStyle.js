import {StyleSheet} from 'react-native';
import Metrics from '../Metrics'

const levelSelectionStyle = StyleSheet.create({

  list: {
    backgroundColor: '#3e9184',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  btn: {
    flexDirection: 'column',
    width: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    height: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    margin: Metrics.LEVEL_SELECTION_BUTTON_MARGIN,
    borderColor: '#3e9184',
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

const iconColor = '#ffffff';

export default {
  iconColor,
  levelSelectionStyle,
  navBarStyle
}
