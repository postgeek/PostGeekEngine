import Scene from 'gameEngine/scene/Scene';
import KeyboardKey from 'inputEngine/KeyboardKey';
import ServiceLocator from '../../src/core/ServiceLocator';

export default class KeyboardDemoScene extends Scene {  
  create() {
    console.log(KeyboardKey.A);
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerAllKeys();
  }

  update() {
    if (this.keyboard.keyDownHeld(KeyboardKey.A)) {
      console.log('A is down');
    }
  }

  draw() {

  }
}
