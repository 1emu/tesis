import {StyleSheet} from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#146db4',
  },

  tilesContainer: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#146db4',
  },

  draggableTileContainer: {
    borderWidth: 1,
    backgroundColor: "#000cff",
  }

});

export default style;