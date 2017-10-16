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
      BULL: require('./img/Bull.png'),
      ANTS: require('./img/Ants.png'),
      BLANK: require('./img/Empty.png')
    }
  }

  static defaultImage() {
    return require('./img/Empty.png');
  }

  static borderImage() {
    return require('./img/Border.png');
  }

  static for(type) {
    let images = this.imageHash();
    let image = images[type];
    return image || this.defaultImage();
  }
}
