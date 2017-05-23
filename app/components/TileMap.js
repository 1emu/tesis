/**
 * Created by jp on 5/22/17.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {observable, computed, autorun} from 'mobx';

export default class TileMap {

  @observable tiles = [{lulu: 1, width: 40, height: 40, x: 50, y: 50, number: 1}];

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed get report() {
    if (this.tiles.length === 0)
      return '<none>';
    return "Tile lulu" + this.tiles[0].lulu + " Amount of tiles: " + this.tiles.length;
  }

  addTile(initialLulu) {
    this.tiles.push({
      lulu: initialLulu,
    });
  }
}
