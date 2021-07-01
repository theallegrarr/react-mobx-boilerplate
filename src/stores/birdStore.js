import {observable, action, computed, makeAutoObservable} from 'mobx'

class BirdStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable birds = [];

  @action addBird = (bird) => {
    this.birds.push(bird);
  }

  @computed get birdCount(){
    return this.birds.length
  }
}

const store = new BirdStore();
export default store;
