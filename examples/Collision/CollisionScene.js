import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import RectangleGameObject from './RectangleGameObject';

class CollisionScene extends Scene {
  create() {
    this.rectangle = new RectangleGameObject(this);
    this.rectangleText = new TextGraphic(new Point(3, 12), '');
  }

  update() {
    this.rectangle.update();
    this.rectangleText.text = `Rectangle is at x: '${this.rectangle.graphics.rectangle.x}' y: '${this.rectangle.graphics.rectangle.y}'`;
  }

  draw(timeStep) {
    this.rectangle.draw();
    this.rectangleText.draw();
  }
} export default CollisionScene;
