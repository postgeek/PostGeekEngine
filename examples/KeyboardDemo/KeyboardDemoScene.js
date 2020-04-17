import Scene from 'gameEngine/scene/Scene';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Point from 'core/Point';
import KeyboardKey from 'inputEngine/KeyboardKey';

export default class KeyboardDemoScene extends Scene {
  create() {
    console.log(KeyboardKey.A);
    this.game.Keyboard.registerKey(KeyboardKey.A);
    this.game.Keyboard.registerKey(KeyboardKey.B);
    this.game.Keyboard.registerKey(KeyboardKey.C);
    this.KeyboardKeyPressed = new TextGraphic(new Point(100, 140), '');
  }

  update() {
    if (this.game.Keyboard.keyDownHeld(KeyboardKey.A)) {
      this.KeyboardKeyPressed.text = "A";
    }
    if (this.game.Keyboard.keyDownHeld(KeyboardKey.B)) {
      this.KeyboardKeyPressed.text = "B";
    }
    if (this.game.Keyboard.keyDownHeld(KeyboardKey.C)) {
      this.KeyboardKeyPressed.text = "C";
    }
  }

  draw() {
    this.KeyboardKeyPressed.draw();
  }
}
