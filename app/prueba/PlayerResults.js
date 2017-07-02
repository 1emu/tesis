import {AsyncStorage} from "react-native";

var results = [];

export default class PlayerResults {
  static async loadResults() {
    const storedResults = await AsyncStorage.getItem('@RushHour:player_results');
    results = JSON.parse(storedResults) || [];
  }

  static markLevelComplete(level) {
    results = results.concat(level);
    AsyncStorage.setItem('@RushHour:player_results', JSON.stringify(results));
  }

  static levelCompleted(level) {
    return results.includes(level)
  }
}
