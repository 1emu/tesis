import {AsyncStorage} from "react-native";
import RushHourLevels from "./RushHourLevels";

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

  static firstLevelPending() {
    let pending = RushHourLevels.LEVELS.find((level) => !this.levelCompleted(level.levelNumber)) || RushHourLevels.LEVELS.slice(-1).pop();
    return pending.levelNumber;
  }
}
