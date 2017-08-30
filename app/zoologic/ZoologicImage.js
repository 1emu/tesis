export default class ZoologicImage {

  static imageHash() {
    return {
      MOUSE: require('./img/Mouse.png'),
      CAT: require('./img/Cat.png'),
      DOG: require('./img/Dog.png'),
      BULLDOG: require('./img/Bulldog.png'),
      CHEESE: require('./img/Cheese.png'),
      FISH: require('./img/Fish.png'),
      BONE: require('./img/Bone.png'),
      BULL: require('./img/empty.png'),
      ANTS: require('./img/empty.png'),
      BLANK: require('./img/empty.png')
    }
  }

  static defaultImage() {
    return require('./img/empty.png');
  }

  static for(type) {
    let images = this.imageHash();
    let image = images[type];
    return image || this.defaultImage();
  }
}