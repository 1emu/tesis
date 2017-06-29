import {observable, autorun} from "mobx";

export default class Modal {

  @observable isOpen;

  constructor(id, isOpen = false) {
    this.id = id;
    this.isOpen = isOpen;
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
