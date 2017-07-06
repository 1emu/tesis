import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

  list: {
    backgroundColor: '#295246',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  btn: {
    flexDirection: 'column',
    width: 100,
    height: 100,
    margin: 10,
    borderColor: '#295246',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnBeginner: {
    backgroundColor: '#3e9184',
  },
  btnIntermediate: {
    backgroundColor: '#c5ca65',
  },
  btnAdvanced: {
    backgroundColor: '#91440f',
  },
  btnExpert: {
    backgroundColor: '#5e0809',
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

export default style;
