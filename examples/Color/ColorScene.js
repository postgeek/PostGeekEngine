import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import ColorPicker from 'HUDEngine/components/colorPicker/ColorPicker';

/*
  https://www.script-tutorials.com/html5-canvas-image-zoomer/
*/
export default class ColorDemoScene extends Scene {
  create() {
    this.colorPicker = new ColorPicker(new Point(5, 5));
  }

  update() {
    this.colorPicker.update();
  }

  draw() {
    this.colorPicker.draw();
  }
}
