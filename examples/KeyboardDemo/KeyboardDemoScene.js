import Scene from 'gameEngine/scene/Scene';
import TextGraphic from 'renderingEngine/text/TextGraphic';
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
