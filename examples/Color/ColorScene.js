import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import ColorPicker from 'HUDEngine/components/colorPicker/ColorPicker';

/*
  https://www.script-tutorials.com/html5-canvas-image-zoomer/
*/
export default class ColorDemoScene extends Scene {
  create() {
    this.colorPicker = new ColorPicker(new Point(5, 5));
    this.rectangle = new Rectangle(new Point(0, 0), 800, 300);
    this.rectangle.geometryStyle.fillStyle = 'black';
  }

  update() {
    this.colorPicker.update();
  }

  draw() {
    this.rectangle.draw();
    this.colorPicker.draw();
  }
}
