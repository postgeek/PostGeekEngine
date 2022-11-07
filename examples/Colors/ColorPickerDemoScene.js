import Scene from 'gameEngine/scene/Scene';
import Vec2D from 'core/Vec2D';
import ColorPicker from 'HUDEngine/components/colorPicker/ColorPicker';

/*
  https://www.script-tutorials.com/html5-canvas-image-zoomer/
*/
export default class ColorDemoScene extends Scene {
  create() {
    this.colorPicker = new ColorPicker(new Vec2D(5, 5));
  }

  update() {
    this.colorPicker.update();
  }

  draw() {
    this.colorPicker.draw();
  }
}
