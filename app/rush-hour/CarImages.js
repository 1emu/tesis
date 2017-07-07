export default class CarImage {
  static imageHash() {
    return {
      'car': {
        'red': {
          'right': require('./img/cars/red_car_right.gif')
        },
        'black': {
          'left': require('./img/cars/black_car_left.gif'),
          'up': require('./img/cars/black_car_up.gif')
        },
        'blue': {
          'left': require('./img/cars/blue_car_left.gif'),
          'up': require('./img/cars/blue_car_up.gif')
        },
        'brown': {
          'left': require('./img/cars/brown_car_left.gif'),
          'up': require('./img/cars/brown_car_up.gif')
        },
        'dkgreen': {
          'left': require('./img/cars/dkgreen_car_left.gif'),
          'up': require('./img/cars/dkgreen_car_up.gif')
        },
        'green': {
          'left': require('./img/cars/green_car_left.gif'),
          'up': require('./img/cars/green_car_up.gif')
        },
        'grey': {
          'left': require('./img/cars/grey_car_left.gif'),
          'up': require('./img/cars/grey_car_up.gif')
        },
        'moss': {
          'left': require('./img/cars/moss_car_left.gif'),
          'up': require('./img/cars/moss_car_up.gif')
        },
        'orange': {
          'left': require('./img/cars/orange_car_left.gif'),
          'up': require('./img/cars/orange_car_up.gif')
        },
        'pink': {
          'left': require('./img/cars/pink_car_left.gif'),
          'up': require('./img/cars/pink_car_up.gif')
        },
        'purple': {
          'left': require('./img/cars/purple_car_left.gif'),
          'up': require('./img/cars/purple_car_up.gif')
        },
        'yellow': {
          'left': require('./img/cars/yellow_car_left.gif'),
          'up': require('./img/cars/yellow_car_up.gif')
        }
      },
      'truck': {
        'blue': {
          'left': require('./img/cars/blue_truck_left.gif'),
          'up': require('./img/cars/blue_truck_up.gif')
        },
        'green': {
          'left': require('./img/cars/green_truck_left.gif'),
          'up': require('./img/cars/green_truck_up.gif')
        },
        'purple': {
          'left': require('./img/cars/purple_truck_left.gif'),
          'up': require('./img/cars/purple_truck_up.gif')
        },
        'yellow': {
          'left': require('./img/cars/yellow_truck_left.gif'),
          'up': require('./img/cars/yellow_truck_up.gif')
        },
      }
    }
  };

  static defaultImage() {
    return require('./img/empty.png');
  }

  static for(vehicle, color, orientation) {
    let images = this.imageHash();
    let image = images[vehicle] && images[vehicle][color] && images[vehicle][color][orientation];
    return image || this.defaultImage();
  }
}
