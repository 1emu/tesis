import {Dimensions, Platform} from 'react-native';
var {width, height} = Dimensions.get('window');

const DEVICE_HEIGHT = height;
const DEVICE_WIDTH = width;
const IS_ANDROID = Platform.OS === 'android';

const BOARD_MARGIN = 20;
const BOARD_MARGIN_TOP = 100;
const BOARD_WIDTH = DEVICE_WIDTH - BOARD_MARGIN;
const TILE_SIZE = BOARD_WIDTH / 7;
const BOARD_HEIGHT = TILE_SIZE * 6;

const TILE_SHADOW_DEPTH = 6;
const TILE_BORDER_RADIUS = TILE_SIZE * 0.27;
const MAX_SPACE_IN_BETWEEN_TILES = TILE_SIZE * 0.1;

export default {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  IS_ANDROID,

  BOARD_MARGIN,
  BOARD_MARGIN_TOP,
  BOARD_WIDTH,
  TILE_SIZE,
  BOARD_HEIGHT,

  TILE_SHADOW_DEPTH,
  TILE_BORDER_RADIUS,
  MAX_SPACE_IN_BETWEEN_TILES,
};