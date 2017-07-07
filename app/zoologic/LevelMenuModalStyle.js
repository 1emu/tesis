import {StyleSheet, Dimensions} from "react-native";

import Metrics from '../Metrics';

const style = StyleSheet.create({

  showModalBtn: {
    backgroundColor: "#c6afb5",
  },

  showModalBtnTxt: {
    color: '#161616',
    fontSize: 16,
  },

  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#c6afb5'
  },

  modalBtn: {
    backgroundColor: "#f7ffb8",
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },

  modalBtnText: {
    color: '#161616',
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;
