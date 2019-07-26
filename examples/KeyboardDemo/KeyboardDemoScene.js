import Scene from 'gameEngine/scene/Scene';
import Text from 'renderingEngine/text/Text';
import KeyboardKey from 'inputEngine/KeyboardKey';

export default class KeyboardDemoScene extends Scene {
  create() {
    console.log(KeyboardKey.A);
    this.game.Keyboard.registerKey(KeyboardKey.A);
  }

  update() {
    if (this.game.Keyboard.keyDownHeld(KeyboardKey.A)) {
      console.log('A is down');
    }
  }

  draw() {

  }
}
