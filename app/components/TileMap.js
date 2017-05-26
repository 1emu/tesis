/**
 * Created by jp on 5/22/17.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {observable, computed, autorun} from 'mobx';
import TileView from './tile/TileView';

export default class TileMap {

  @observable tiles = [];
  containerLayout = {};

  constructor(tiles) {
    this.tiles = tiles;
    // autorun(() => console.log(this.report)); // que logguee el mapa cada vez que cambia algo
  }

  // esta funcion se llama al final de cada movimiento dentro del tile map. Podriamos usarla para evaluar la condicion final del nivel.
  @computed get report() {
    if (this.tiles.length === 0) return '<none>';
    return '\nTileMap: ' + JSON.stringify(this.tiles)
      // + '\nContainer Layout: ' + JSON.stringify(this.containerLayout)
      + '\n';
  }

  render() {
    return this.tiles.map(
      (tile, key) => <TileView key={key} tileModel={tile} tileMap={this} />
    )
  }

  getUpdateCommandFor(tileModel, gesture){
    return {dx: this._calculateDX(tileModel, gesture), dy: this._calculateDY(tileModel, gesture)}
  }

  /**
   * Cuando se invoca a esta funcion:
   *
   * - Siendo Xc la posicion incial en X del centro del tile
   * - Siendo gesture.dx la distancia acumulada del movimiento del gesto desde el inicio del gesto hasta ahora.
   * - Siendo pan.x la distancia acumulada del movimiento del tile desde el inicio hasta ahora.
   * Cada vez que se llama a esta funcion, pan.x vale lo que valia gesture.dx en el llamado anterior, ya que a pan.x lo vamos actualizando con gesture.dx.
   *
   * La posicion actual del tile seria Xc + pan.x (posicion incial del centro + distancia acumulada de su movimiento)
   * La posicion futura del tile (hacia donde queremos que vaya si es que no choca con nada) seria Xc + gesture.dx (posicion inicial del centro + distancia acumulada del gesto)
   *
   * Esta funcion devuelve la cantidad en X que sumada a la posicion inicial del tile da la nueva posicion en la que se va a renderear.
   */
  _calculateDX(tileModel, gesture) {
    let {leftLimit, rightLimit, topLimit, bottomLimit} = this._calculateLimits(tileModel);
    let Xc = leftLimit + tileModel.initialLayout.x;
    let actualX = tileModel.pan.x._value + Xc;
    let futureX = Xc + gesture.dx;

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if (futureX > leftLimit && futureX < rightLimit) return gesture.dx;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el borde
    // A la cantidad de movimiento acumulado en X actualmente (pan.x), le sumamos la distancia entre nuestra posicion actual y el limite, lo cual hace que en el proximo ciclo de render nos movamos ese
    // cachito que nos faltaba para estar justo en el limite. Y al estar en el limite, si el gesto sigue fuera del limite, el término (rigthLimit - actualX) == 0, por lo que nos quedamos quietos
    if (futureX >= rightLimit) return tileModel.pan.x._value + (rightLimit - actualX);
    if (futureX <= leftLimit) return tileModel.pan.x._value + (leftLimit - actualX);

    // caso contrario, que no actualice su posición
    return tileModel.pan.x._value;
  }

  _calculateDY(tileModel, gesture) {
    let {leftLimit, rightLimit, topLimit, bottomLimit} = this._calculateLimits(tileModel);
    let Yc = topLimit + tileModel.initialLayout.y;
    let actualY = tileModel.pan.y._value + Yc;
    let futureY = Yc + gesture.dy;

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if (futureY > topLimit && futureY < bottomLimit) return gesture.dy;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if (futureY >= bottomLimit) return tileModel.pan.y._value + (bottomLimit - actualY);
    if (futureY <= topLimit) return tileModel.pan.y._value + (topLimit - actualY);

    // caso contrario, que no actualice su posición
    return tileModel.pan.y._value;
  }

  _calculateLimits(tileModel) {
    let containerLeftMargin = this.containerLayout.x;
    let containerRightMargin = containerLeftMargin + this.containerLayout.width;
    let containerTopMargin = this.containerLayout.y;
    let containerBottomMargin = containerTopMargin + this.containerLayout.height;

    return {
      leftLimit: containerLeftMargin + tileModel.width * 0.5,
      rightLimit: containerRightMargin - tileModel.width * 0.5,
      topLimit: containerTopMargin + tileModel.height * 0.5,
      bottomLimit: containerBottomMargin - tileModel.height * 0.5
    };
  }

  logMovement(gesture, tileModel){
    let {leftLimit, rightLimit, topLimit, bottomLimit} = this._calculateLimits(tileModel);
    console.log('Gesture dx' + gesture.dx);
    console.log("Pan: " + JSON.stringify(tileModel.pan) + ' | Layout: ' + tileModel.layout.x + ' , ' + tileModel.layout.y + ' | Initial Layout ' + tileModel.initialLayout.x + ' , ' + tileModel.initialLayout.y);
    console.log('LL: ' + leftLimit + ' RL: ' + rightLimit + ' TL: ' + topLimit + ' BL: ' + bottomLimit);
  }
}
