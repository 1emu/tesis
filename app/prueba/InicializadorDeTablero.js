import Tablero from "./Tablero";
import AutoHorizontal from "./AutoHorizontal";
import AutoVertical from "./AutoVertical";
import CamionVertical from "./CamionVertical";
import AutoGanador from "./AutoGanador";
import CamionHorizontal from "./CamionHorizontal";

export default class InicializadorDeTablero {

  constructor(configDeTablero) {
    this.configDeTablero = configDeTablero;
    this.contadorID = 0;
  }

  obtenerTablero(props) {
    let nuevoTablero = new Tablero(props);
    let vehiculos = this.generarVehiculos(nuevoTablero);
    nuevoTablero.ubicarVehiculos(vehiculos);
    return nuevoTablero;
  }

  generarVehiculos(tablero) {
    let vehiculos = this.configDeTablero.map((configDeVehiculo) => {
      switch (configDeVehiculo.tipo) {
        case 'hc':
          return new AutoHorizontal(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, configDeVehiculo.color, tablero);
        case 'vc':
          return new AutoVertical(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, configDeVehiculo.color, tablero);
        case 'ht':
          return new CamionHorizontal(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, configDeVehiculo.color, tablero);
        case 'vt':
          return new CamionVertical(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, configDeVehiculo.color, tablero);
        case 'wc':
          return new AutoGanador(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, tablero);
      }
    });

    return vehiculos;
  }

  generarId() {
    return this.contadorID++;
  }
}
