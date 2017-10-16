import {StyleSheet} from 'react-native';
import Metrics from '../../Metrics'
import RushHourColors from './RushHourColors'



const levelSelectionStyle = StyleSheet.create({

  list: {
    backgroundColor: RushHourColors.mid,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  btn: {
    flexDirection: 'column',
    width: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    height: Metrics.LEVEL_SELECTION_BUTTON_WIDTH,
    margin: Metrics.LEVEL_SELECTION_BUTTON_MARGIN,
    borderColor: RushHourColors.mid,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnBeginner: {
    backgroundColor: RushHourColors.btnBeginner,
  },
  btnIntermediate: {
    backgroundColor: RushHourColors.btnIntermediate,
  },
  btnAdvanced: {
    backgroundColor: RushHourColors.btnAdvanced,
  },
  btnExpert: {
    backgroundColor: RushHourColors.btnExpert,
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
    color: RushHourColors.light,
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
    backgroundColor: RushHourColors.dark,
    paddingRight: 10,
  },

  title: {
    color: RushHourColors.light,
    fontSize: 20,
    fontWeight: 'bold',
  },

  backBtn: {
    backgroundColor: RushHourColors.mid,
  },

  backBtnTxt: {
    color: RushHourColors.light,
    fontSize: 16,
  },

});

const iconColor = RushHourColors.light;

export default {
  iconColor,
  levelSelectionStyle,
  navBarStyle
}
