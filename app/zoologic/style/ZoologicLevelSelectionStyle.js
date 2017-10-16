import {StyleSheet} from 'react-native';
import Metrics from '../../Metrics'
import ZoologicColors from './ZoologicColors'

const levelSelectionStyle = StyleSheet.create({

  list: {
    backgroundColor: ZoologicColors.light,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  btn: {
    flexDirection: 'column',
    width: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    height: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    margin: Metrics.LEVEL_SELECTION_BUTTON_MARGIN,
    backgroundColor: ZoologicColors.light,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnBeginner: {
    backgroundColor: ZoologicColors.btnBeginner,
  },
  btnEasy: {
    backgroundColor: ZoologicColors.btnEasy,
  },
  btnIntermediate: {
    backgroundColor: ZoologicColors.btnIntermediate,
  },
  btnAdvanced: {
    backgroundColor: ZoologicColors.btnAdvanced,
  },
  btnExpert: {
    backgroundColor: ZoologicColors.btnExpert,
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
    color: ZoologicColors.light,
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
    backgroundColor: ZoologicColors.mid,
    paddingRight: 10,
  },

  title: {
    color: ZoologicColors.dark,
    fontSize: 20,
    fontWeight: 'bold',
  },

  backBtn: {
    backgroundColor: ZoologicColors.light,
  },

  backBtnTxt: {
    color: ZoologicColors.dark,
    fontSize: 16,
  },

});

const iconColor = ZoologicColors.dark;

export default {
  iconColor,
  levelSelectionStyle,
  navBarStyle
}
