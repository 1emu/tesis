import {StyleSheet, Dimensions} from "react-native";

import Metrics from '../Metrics';

const style = StyleSheet.create({

  showModalBtn: {
    backgroundColor: "#3e9184",
  },

  showModalBtnTxt: {
    color: '#ffffff',
    fontSize: 16,
  },

  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#3e9184'
  },

  modalBtn: {
    backgroundColor: "#295246",
    width: Metrics.DEVICE_WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },

  modalBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default style;
