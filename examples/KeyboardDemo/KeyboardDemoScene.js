import Scene from 'gameEngine/scene/Scene';
import Text from 'renderingEngine/text/Text';
import KeyboardKey from 'inputEngine/KeyboardKey';

export default class KeyboardDemoScene extends Scene {
  create() {
    this.game.Keyboard.addKey(KeyboardKey.A);
  }

  update() {
    if (this.game.Keyboard.keyDownHeld(KeyboardKey.A)) {
      console.log('A is down');
    }
  }

  draw() {

  }
}
