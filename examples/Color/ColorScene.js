import Scene from 'gameEngine/scene/Scene';
import Vec2D from 'core/Vec2D';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import ColorPickerComponent from 'HUDEngine/components/colorPicker/ColorPickerComponent';

export default class ColorDemoScene extends Scene {
  create() {
    this.colorPicker = new ColorPickerComponent(new Vec2D(5, 5));
    this.rectangle = new Rectangle(new Vec2D(0, 0), 800, 300);
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
