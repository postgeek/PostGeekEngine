import Scene from 'gameEngine/scene/Scene';
import KeyboardKey from 'inputEngine/KeyboardKey';
import ServiceLocator from '../../src/core/ServiceLocator';

export default class KeyboardDemoScene extends Scene {  
  create() {
    console.log(KeyboardKey.A);
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.allKeys = KeyboardKey.ALL_KEYS;
    this.keyboard.registerAllKeys();
  }

  update() {
    for(let i = 0; i < this.allKeys.length; i++) {
      if(this.keyboard.keyDownHeld(this.allKeys[i])) {
        console.log(this.allKeys[i].code);
      }
    }
  }

  draw() {

  }
}
