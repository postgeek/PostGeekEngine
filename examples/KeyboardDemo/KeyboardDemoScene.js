import Scene from 'gameEngine/scene/Scene';
import KeyboardKey from 'inputEngine/KeyboardKey';
import ServiceLocator from 'core/ServiceLocator';

export default class KeyboardDemoScene extends Scene {  
  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.A);
  }

  update() {
    if (this.keyboard.keyDownHeld(KeyboardKey.A)) {
      console.log('A is down');
    }
  }

  draw() {

  }
}
