export default class CarImage {
  static imageHash() {
    return {
      'car': {
        'red': {
          'right': require('./cars/red_car_right.gif')
        },
        'black': {
          'left': require('./cars/black_car_left.gif'),
          'up': require('./cars/black_car_up.gif')
        },
        'blue': {
          'left': require('./cars/blue_car_left.gif'),
          'up': require('./cars/blue_car_up.gif')
        },
        'brown': {
          'left': require('./cars/brown_car_left.gif'),
          'up': require('./cars/brown_car_up.gif')
        },
        'dkgreen': {
          'left': require('./cars/dkgreen_car_left.gif'),
          'up': require('./cars/dkgreen_car_up.gif')
        },
        'green': {
          'left': require('./cars/green_car_left.gif'),
          'up': require('./cars/green_car_up.gif')
        },
        'grey': {
          'left': require('./cars/grey_car_left.gif'),
          'up': require('./cars/grey_car_up.gif')
        },
        'moss': {
          'left': require('./cars/moss_car_left.gif'),
          'up': require('./cars/moss_car_up.gif')
        },
        'orange': {
          'left': require('./cars/orange_car_left.gif'),
          'up': require('./cars/orange_car_up.gif')
        },
        'pink': {
          'left': require('./cars/pink_car_left.gif'),
          'up': require('./cars/pink_car_up.gif')
        },
        'purple': {
          'left': require('./cars/purple_car_left.gif'),
          'up': require('./cars/purple_car_up.gif')
        },
        'yellow': {
          'left': require('./cars/yellow_car_left.gif'),
          'up': require('./cars/yellow_car_up.gif')
        }
      },
      'truck': {
        'blue': {
          'left': require('./cars/blue_truck_left.gif'),
          'up': require('./cars/blue_truck_up.gif')
        },
        'green': {
          'left': require('./cars/green_truck_left.gif'),
          'up': require('./cars/green_truck_up.gif')
        },
        'purple': {
          'left': require('./cars/purple_truck_left.gif'),
          'up': require('./cars/purple_truck_up.gif')
        },
        'yellow': {
          'left': require('./cars/yellow_truck_left.gif'),
          'up': require('./cars/yellow_truck_up.gif')
        },
      }
    }
  };

  static defaultImage() {
    return require('./empty.png');
  }

  static for(vehicle, color, orientation) {
    let images = this.imageHash();
    let image = images[vehicle] && images[vehicle][color] && images[vehicle][color][orientation];
    return image || this.defaultImage();
  }
}
