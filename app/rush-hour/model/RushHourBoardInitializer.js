import RushHourBoard from "./RushHourBoard";
import AutoGanador from "./WinningCar";
import VerticalVehicle from "./VerticalVehicle";
import HorizontalVehicle from './HorizontalVehicle';
import RushHourLevels from './RushHourLevels';
import Metrics from '../../Metrics';
import VehicleType from './VehicleType';

export default class RushHourBoardInitializer {

  constructor(levelNumber) {
    this.boardConfig = RushHourLevels.getLevelConfig(levelNumber);
    this.contadorID = 0;
  }

  _generateVehicles(board) {
    return this.boardConfig.vehiclesConfiguration.map((configDeVehiculo) => {
      switch (configDeVehiculo.tipo) {
        case 'hc':
          return new HorizontalVehicle(this._generateId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'left', VehicleType.car());
        case 'vc':
          return new VerticalVehicle(this._generateId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'up', VehicleType.car());
        case 'ht':
          return new HorizontalVehicle(this._generateId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'left', VehicleType.truck());
        case 'vt':
          return new VerticalVehicle(this._generateId(), configDeVehiculo.x, configDeVehiculo.y, board, configDeVehiculo.color, 'up', VehicleType.truck());
        case 'wc':
          return new AutoGanador(this._generateId(), configDeVehiculo.x, configDeVehiculo.y, board);
      }
    });
  }

  _generateId() {
    return this.contadorID++;
  }

  generateBoard() {
    let nuevoTablero = new RushHourBoard(Metrics.RUSH_HOUR_DIMENSIONS);
    let vehiculos = this._generateVehicles(nuevoTablero);
    nuevoTablero.placeVehicles(vehiculos);
    return nuevoTablero;
  }
}


