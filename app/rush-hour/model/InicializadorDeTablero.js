import RushHourBoard from "./RushHourBoard";
import AutoGanador from "./WinningCar";
import VerticalVehicle from "./VerticalVehicle";
import HorizontalVehicle from './HorizontalVehicle';
import RushHourLevels from './RushHourLevels';
import Metrics from '../../Metrics';
import VehicleType from './VehicleType';

export default class InicializadorDeTablero {

  constructor(levelNumber) {
    this.configDeTablero = RushHourLevels.getLevelConfig(levelNumber);
    this.contadorID = 0;
  }

  obtenerTablero() {
    let nuevoTablero = new RushHourBoard(Metrics.RUSH_HOUR_DIMENSIONS);
    let vehiculos = this.generarVehiculos(nuevoTablero);
    nuevoTablero.ubicarVehiculos(vehiculos);
    return nuevoTablero;
  }

  generarVehiculos(board) {
    return this.configDeTablero.configuracionDeAutitos.map((configDeVehiculo) => {
      switch (configDeVehiculo.tipo) {
        case 'hc':
          return new HorizontalVehicle(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'left', VehicleType.car());
        case 'vc':
          return new VerticalVehicle(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'up', VehicleType.car());
        case 'ht':
          return new HorizontalVehicle(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'left', VehicleType.truck());
        case 'vt':
          return new VerticalVehicle(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'up', VehicleType.truck());
        case 'wc':
          return new AutoGanador(this.generarId(), configDeVehiculo.x, configDeVehiculo.y, board);
      }
    });
  }

  generarId() {
    return this.contadorID++;
  }
}
