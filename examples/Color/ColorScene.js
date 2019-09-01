import Point from 'core/Point';
import Scene from 'gameEngine/scene/Scene';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Color from 'renderingEngine/colors/Color';
import ColorConverter from 'renderingEngine/colors/ColorConverter';

export default class KeyboardDemoScene extends Scene {
  create() {
    this.textGraphic = new TextGraphic(new Point(100, 100), 'Test');
  }

  update() {

  }

  draw() {
    this.textGraphic.draw();
  }
}
