export default class ZoologicImage {

  static imageHash() {
    return {
      MOUSE: require('./Mouse.png'),
      CAT: require('./Cat.png'),
      DOG: require('./Dog.png'),
      BULLDOG: require('./Bulldog.png'),
      CHEESE: require('./Cheese.png'),
      FISH: require('./Fish.png'),
      BONE: require('./Bone.png'),
      BULL: require('./Bull.png'),
      ANTS: require('./Ants.png'),
      BLANK: require('./Empty.png')
    }
  }

  static defaultImage() {
    return require('./Empty.png');
  }

  static borderImage() {
    return require('./Border.png');
  }

  static for(type) {
    let images = this.imageHash();
    let image = images[type];
    return image || this.defaultImage();
  }
}
