import Cuadradito from "./Cuadradito"

export default class Tablero {
  constructor() {
    this.cuadraditos = [
      new Cuadradito(),
      new Cuadradito(100, 100)
    ];
  }
}
