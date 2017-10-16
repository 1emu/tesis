import {StyleSheet, Dimensions} from "react-native";
import ZoologicColors from './ZoologicColors'

import Metrics from '../../Metrics';

const style = StyleSheet.create({

  showModalBtn: {
    backgroundColor: ZoologicColors.mid,
  },

  showModalBtnTxt: {
    color: ZoologicColors.dark,
    fontSize: 16,
  },

  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: ZoologicColors.mid
  },

  modalBtn: {
    backgroundColor: ZoologicColors.light,
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },

  modalBtnText: {
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
